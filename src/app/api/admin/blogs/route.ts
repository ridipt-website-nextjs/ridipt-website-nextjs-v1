import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { BlogPost } from '@/models/blog.model';
import TokenManager from '@/lib/jwt-token-manager';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    // 🔑 Token validation
    const authHeader = request.headers.get("authorization");
    if (!authHeader) {
      return NextResponse.json({ error: "Unauthorized - Token missing" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return NextResponse.json({ error: "Unauthorized - Invalid token format" }, { status: 401 });
    }

    const data = TokenManager.verifyToken<{
      email: string;
      adminId: string;
      type: string;
    }>(token);

    if (data.type !== 'admin') {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const body = await request.json();

    // Validate required fields
    if (!body.title || !body.slug || !body.content) {
      return NextResponse.json(
        { success: false, error: 'Title, slug, and content are required' },
        { status: 400 }
      );
    }

    // Check if slug already exists
    const existingBlog = await BlogPost.findOne({ slug: body.slug });
    if (existingBlog) {
      return NextResponse.json(
        { success: false, error: 'Blog with this slug already exists' },
        { status: 409 }
      );
    }

    // Create new blog post
    const newBlog = new BlogPost(body);
    const savedBlog = await newBlog.save();

    return NextResponse.json({
      success: true,
      data: savedBlog,
      message: 'Blog post created successfully'
    }, { status: 201 });

  } catch (error: any) {
    console.error('POST /api/blogs error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
