
import { getS3Service } from '@/lib/s3.config'
import { NextRequest, NextResponse } from 'next/server'

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const key = searchParams.get('key')
    
    if (!key) {
      return NextResponse.json({ error: 'File key is required' }, { status: 400 })
    }

    const s3 = getS3Service()
    
    // Check if file exists first
    const fileExists = await s3.fileExists(key)
    if (!fileExists) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 })
    }

    // Delete file
    await s3.deleteFile(key)

    return NextResponse.json({
      success: true,
      message: 'File deleted successfully',
      key: key,
    })
  } catch (error) {
    console.error('Delete error:', error)
    return NextResponse.json(
      { error: 'Delete failed', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

// Alternative: Delete via POST with JSON body
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { key } = body
    
    if (!key || typeof key !== 'string') {
      return NextResponse.json({ error: 'Valid file key is required' }, { status: 400 })
    }

    const s3 = getS3Service()
    
    // Check if file exists first
    const fileExists = await s3.fileExists(key)
    if (!fileExists) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 })
    }

    // Delete file
    await s3.deleteFile(key)

    return NextResponse.json({
      success: true,
      message: 'File deleted successfully',
      key: key,
    })
  } catch (error) {
    console.error('Delete error:', error)
    return NextResponse.json(
      { error: 'Delete failed', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
