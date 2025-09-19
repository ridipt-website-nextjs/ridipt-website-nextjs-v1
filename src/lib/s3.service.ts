import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
  DeleteObjectsCommand,
  ListObjectsV2Command,
  HeadObjectCommand,
  CopyObjectCommand,
  PutObjectCommandInput,
  GetObjectCommandInput,
  ListObjectsV2CommandInput,
  ObjectIdentifier,
} from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { Readable } from 'stream'

export interface S3Config {
  accessKeyId: string
  secretAccessKey: string
  region: string
  bucketName: string
}

export interface UploadOptions {
  contentType?: string
  metadata?: Record<string, string>
  cacheControl?: string
  acl?: string
  expires?: Date
}

export interface UploadResult {
  key: string
  url: string
  etag?: string
  versionId?: string
  size?: number
}

export interface S3Object {
  key: string
  size: number
  lastModified: Date
  etag: string
  url: string
}

export interface SignedUrlOptions {
  expiresIn?: number // seconds, default 3600 (1 hour)
  responseContentType?: string
  responseContentDisposition?: string
}

export class S3Service {
  private client: S3Client
  private bucketName: string

  constructor(config: S3Config) {
    this.client = new S3Client({
      region: config.region,
      credentials: {
        accessKeyId: config.accessKeyId,
        secretAccessKey: config.secretAccessKey,
      },
    })
    this.bucketName = config.bucketName
  }

  /**
   * Upload file from Buffer
   */
  async uploadBuffer(
    key: string,
    buffer: Buffer,
    options: UploadOptions = {}
  ): Promise<UploadResult> {
    try {
      const params: PutObjectCommandInput = {
        Bucket: this.bucketName,
        Key: key,
        Body: buffer,
        ContentType: options.contentType || 'application/octet-stream',
        Metadata: options.metadata,
        CacheControl: options.cacheControl,
        ACL: options.acl as any,
        Expires: options.expires,
      }

      const command = new PutObjectCommand(params)
      const response = await this.client.send(command)

      return {
        key,
        url: await this.getPublicUrl(key),
        etag: response.ETag,
        versionId: response.VersionId,
        size: buffer.length,
      }
    } catch (error) {
      console.error('Error uploading buffer to S3:', error)
      throw new Error(`Failed to upload buffer: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  /**
   * Upload file from File object (for browser)
   */
  async uploadFile(
    key: string,
    file: File,
    options: UploadOptions = {}
  ): Promise<UploadResult> {
    try {
      const buffer = await file.arrayBuffer()
      
      const uploadOptions: UploadOptions = {
        contentType: file.type || options.contentType,
        ...options,
      }

      return await this.uploadBuffer(key, Buffer.from(buffer), uploadOptions)
    } catch (error) {
      console.error('Error uploading file to S3:', error)
      throw new Error(`Failed to upload file: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  /**
   * Upload from stream
   */
  async uploadStream(
    key: string,
    stream: Readable,
    options: UploadOptions = {}
  ): Promise<UploadResult> {
    try {
      const params: PutObjectCommandInput = {
        Bucket: this.bucketName,
        Key: key,
        Body: stream,
        ContentType: options.contentType || 'application/octet-stream',
        Metadata: options.metadata,
        CacheControl: options.cacheControl,
        ACL: options.acl as any,
        Expires: options.expires,
      }

      const command = new PutObjectCommand(params)
      const response = await this.client.send(command)

      return {
        key,
        url: await this.getPublicUrl(key),
        etag: response.ETag,
        versionId: response.VersionId,
      }
    } catch (error) {
      console.error('Error uploading stream to S3:', error)
      throw new Error(`Failed to upload stream: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  /**
   * Get file as Buffer
   */
  async getFileBuffer(key: string): Promise<Buffer> {
    try {
      const params: GetObjectCommandInput = {
        Bucket: this.bucketName,
        Key: key,
      }

      const command = new GetObjectCommand(params)
      const response = await this.client.send(command)

      if (!response.Body) {
        throw new Error('No file body received')
      }

      // Convert stream to buffer
      const chunks: Uint8Array[] = []
      const stream = response.Body as Readable

      return new Promise((resolve, reject) => {
        stream.on('data', (chunk) => chunks.push(chunk))
        stream.on('error', reject)
        stream.on('end', () => resolve(Buffer.concat(chunks)))
      })
    } catch (error) {
      console.error('Error getting file from S3:', error)
      throw new Error(`Failed to get file: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  /**
   * Get file as stream
   */
  async getFileStream(key: string): Promise<Readable> {
    try {
      const params: GetObjectCommandInput = {
        Bucket: this.bucketName,
        Key: key,
      }

      const command = new GetObjectCommand(params)
      const response = await this.client.send(command)

      if (!response.Body) {
        throw new Error('No file body received')
      }

      return response.Body as Readable
    } catch (error) {
      console.error('Error getting file stream from S3:', error)
      throw new Error(`Failed to get file stream: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  /**
   * Delete single file
   */
  async deleteFile(key: string): Promise<void> {
    try {
      const params = {
        Bucket: this.bucketName,
        Key: key,
      }

      const command = new DeleteObjectCommand(params)
      await this.client.send(command)
    } catch (error) {
      console.error('Error deleting file from S3:', error)
      throw new Error(`Failed to delete file: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  /**
   * Delete multiple files
   */
  async deleteFiles(keys: string[]): Promise<void> {
    try {
      const objects: ObjectIdentifier[] = keys.map((key) => ({ Key: key }))

      const params = {
        Bucket: this.bucketName,
        Delete: {
          Objects: objects,
          Quiet: false,
        },
      }

      const command = new DeleteObjectsCommand(params)
      const response = await this.client.send(command)

      // Check for errors in batch delete
      if (response.Errors && response.Errors.length > 0) {
        const errorMessages = response.Errors.map((err:any) => `${err.Key}: ${err.Message}`).join(', ')
        throw new Error(`Some files failed to delete: ${errorMessages}`)
      }
    } catch (error) {
      console.error('Error deleting multiple files from S3:', error)
      throw new Error(`Failed to delete files: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  /**
   * Check if file exists
   */
  async fileExists(key: string): Promise<boolean> {
    try {
      const params = {
        Bucket: this.bucketName,
        Key: key,
      }

      const command = new HeadObjectCommand(params)
      await this.client.send(command)
      return true
    } catch (error: any) {
      if (error.name === 'NotFound' || error.$metadata?.httpStatusCode === 404) {
        return false
      }
      console.error('Error checking file existence:', error)
      throw new Error(`Failed to check file existence: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  /**
   * Get file metadata
   */
  async getFileMetadata(key: string) {
    try {
      const params = {
        Bucket: this.bucketName,
        Key: key,
      }

      const command = new HeadObjectCommand(params)
      const response = await this.client.send(command)

      return {
        key,
        size: response.ContentLength,
        lastModified: response.LastModified,
        contentType: response.ContentType,
        etag: response.ETag,
        metadata: response.Metadata,
        cacheControl: response.CacheControl,
        expires: response.Expires,
      }
    } catch (error) {
      console.error('Error getting file metadata from S3:', error)
      throw new Error(`Failed to get file metadata: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  /**
   * List files with optional prefix
   */
  async listFiles(prefix?: string, maxKeys?: number): Promise<S3Object[]> {
    try {
      const params: ListObjectsV2CommandInput = {
        Bucket: this.bucketName,
        Prefix: prefix,
        MaxKeys: maxKeys || 1000,
      }

      const command = new ListObjectsV2Command(params)
      const response = await this.client.send(command)

      if (!response.Contents) {
        return []
      }

    interface S3ListItem {
      Key?: string
      Size?: number
      LastModified?: Date
      ETag?: string
    }

    return response.Contents.map((item: S3ListItem): S3Object => ({
      key: item.Key!,
      size: item.Size!,
      lastModified: item.LastModified!,
      etag: item.ETag!,
      url: this.getPublicUrl(item.Key!),
    }))
    } catch (error) {
      console.error('Error listing files from S3:', error)
      throw new Error(`Failed to list files: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  /**
   * Get signed URL for upload (PUT)
   */
  async getUploadSignedUrl(
    key: string,
    options: SignedUrlOptions & { contentType?: string } = {}
  ): Promise<string> {
    try {
      const params: PutObjectCommandInput = {
        Bucket: this.bucketName,
        Key: key,
        ContentType: options.contentType,
      }

      const command = new PutObjectCommand(params)
      return await getSignedUrl(this.client, command, {
        expiresIn: options.expiresIn || 3600,
      })
    } catch (error) {
      console.error('Error generating upload signed URL:', error)
      throw new Error(`Failed to generate upload signed URL: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  /**
   * Get signed URL for download (GET)
   */
  async getDownloadSignedUrl(
    key: string,
    options: SignedUrlOptions = {}
  ): Promise<string> {
    try {
      const params: GetObjectCommandInput = {
        Bucket: this.bucketName,
        Key: key,
        ResponseContentType: options.responseContentType,
        ResponseContentDisposition: options.responseContentDisposition,
      }

      const command = new GetObjectCommand(params)
      return await getSignedUrl(this.client, command, {
        expiresIn: options.expiresIn || 3600,
      })
    } catch (error) {
      console.error('Error generating download signed URL:', error)
      throw new Error(`Failed to generate download signed URL: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  /**
   * Copy file within same bucket or to another bucket
   */
  async copyFile(
    sourceKey: string,
    destinationKey: string,
    destinationBucket?: string
  ): Promise<void> {
    try {
      const params = {
        Bucket: destinationBucket || this.bucketName,
        CopySource: `${this.bucketName}/${sourceKey}`,
        Key: destinationKey,
      }

      const command = new CopyObjectCommand(params)
      await this.client.send(command)
    } catch (error) {
      console.error('Error copying file in S3:', error)
      throw new Error(`Failed to copy file: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  /**
   * Move file (copy + delete original)
   */
  async moveFile(
    sourceKey: string,
    destinationKey: string,
    destinationBucket?: string
  ): Promise<void> {
    try {
      await this.copyFile(sourceKey, destinationKey, destinationBucket)
      await this.deleteFile(sourceKey)
    } catch (error) {
      console.error('Error moving file in S3:', error)
      throw new Error(`Failed to move file: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  /**
   * Get public URL (for public buckets)
   */
  getPublicUrl(key: string): string {
    return `https://${this.bucketName}.s3.amazonaws.com/${encodeURIComponent(key)}`
  }

  /**
   * Generate unique key with prefix and timestamp
   */
  generateUniqueKey(originalName: string, prefix: string = ''): string {
    const timestamp = Date.now()
    const randomString = Math.random().toString(36).substring(2, 15)
    const extension = originalName.split('.').pop()
    const nameWithoutExt = originalName.replace(/\.[^/.]+$/, '')
    
    return `${prefix}${prefix ? '/' : ''}${timestamp}-${randomString}-${nameWithoutExt}.${extension}`
  }

  /**
   * Get bucket info
   */
  getBucketName(): string {
    return this.bucketName
  }

  /**
   * Close S3 client (cleanup)
   */
  destroy(): void {
    this.client.destroy()
  }
}
