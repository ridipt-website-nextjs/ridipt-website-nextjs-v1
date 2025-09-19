
import { S3Config, S3Service } from './s3.service'

export function getS3Config(): S3Config {
  const config = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    region: process.env.AWS_REGION!,
    bucketName: process.env.AWS_BUCKET_NAME!,
  }

  // Validate required environment variables
  const missingVars = []
  if (!config.accessKeyId) missingVars.push('AWS_ACCESS_KEY_ID')
  if (!config.secretAccessKey) missingVars.push('AWS_SECRET_ACCESS_KEY')
  if (!config.region) missingVars.push('AWS_REGION')
  if (!config.bucketName) missingVars.push('AWS_BUCKET_NAME')

  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`)
  }

  return config
}

// Create singleton instance
let s3Instance: S3Service | null = null

export function getS3Service(): S3Service {
  if (!s3Instance) {
    const config = getS3Config()
    s3Instance = new S3Service(config)
  }
  return s3Instance
}
