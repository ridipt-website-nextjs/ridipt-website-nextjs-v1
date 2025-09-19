import { getS3Service } from '@/lib/s3.config'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData()
        const file = formData.get('file') as File
        const path = (formData.get('path') as string) || 'uploads/images' // Default path
        // console.log('path: ',path)

        if (!file) {
            return NextResponse.json({ error: 'No file provided' }, { status: 400 })
        }

        // Validate path to prevent directory traversal
        const sanitizedPath = path.replace(/\.\./g, '').replace(/^\/+/, '')

        const s3 = getS3Service()

        // Generate unique key with dynamic path
        const key = s3.generateUniqueKey(file.name, sanitizedPath)

        // Upload file
        const result = await s3.uploadFile(key, file, {
            contentType: file.type,
            metadata: {
                originalName: file.name,
                uploadedAt: new Date().toISOString(),
                uploadPath: sanitizedPath,
            }
        })

        return NextResponse.json({
            success: true,
            key: result.key,
            url: result.url,
            size: result.size,
            path: sanitizedPath,
        })
    } catch (error) {
        console.error('Upload error:', error)
        return NextResponse.json(
            { error: 'Upload failed' },
            { status: 500 }
        )
    }
}
