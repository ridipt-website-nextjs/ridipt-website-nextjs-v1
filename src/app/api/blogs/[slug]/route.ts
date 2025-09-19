import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { BlogPost } from '@/models/blog.model';


export async function GET(request: NextRequest, { params }: any) {
  try {
    await connectDB();

    const { slug } = params;
    const { searchParams } = new URL(request.url);
    const incrementViews = searchParams.get('incrementViews') === 'true';

    const blog = await BlogPost.findOne({ slug });

    if (!blog) {
      return NextResponse.json(
        { success: false, error: 'Blog post not found' },
        { status: 404 }
      );
    }

    // Increment views if requested
    if (incrementViews) {
      await BlogPost.findByIdAndUpdate(blog._id, { $inc: { views: 1 } });
      blog.views += 1;
    }

    return NextResponse.json({
      success: true,
      data: blog
    });

  } catch (error: any) {
    console.error(`GET /api/blogs/${params.slug} error:`, error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}