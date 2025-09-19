import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { BlogPost } from '@/models/blog.model';
import TokenManager from '@/lib/jwt-token-manager';

interface RouteParams {
  params:any;
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
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

    const { slug } = params;
    const body = await request.json();

    const blog = await BlogPost.findOne({ slug });

    if (!blog) {
      return NextResponse.json(
        { success: false, error: 'Blog post not found' },
        { status: 404 }
      );
    }

    // If slug is being changed, check for conflicts
    if (body.slug && body.slug !== slug) {
      const existingBlog = await BlogPost.findOne({ slug: body.slug });
      if (existingBlog) {
        return NextResponse.json(
          { success: false, error: 'Blog with this slug already exists' },
          { status: 409 }
        );
      }
    }

    // Update blog post
    const updatedBlog = await BlogPost.findByIdAndUpdate(
      blog._id,
      { ...body, updatedAt: new Date() },
      { new: true, runValidators: true }
    );

    return NextResponse.json({
      success: true,
      data: updatedBlog,
      message: 'Blog post updated successfully'
    });

  } catch (error: any) {
    console.error(`PUT /api/blogs/${params.slug} error:`, error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest, { params }: RouteParams) {
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

    const { slug } = params;
    const body = await request.json();

    const blog = await BlogPost.findOne({ slug });

    if (!blog) {
      return NextResponse.json(
        { success: false, error: 'Blog post not found' },
        { status: 404 }
      );
    }

    // Partial update
    const updatedBlog = await BlogPost.findByIdAndUpdate(
      blog._id,
      { $set: { ...body, updatedAt: new Date() } },
      { new: true, runValidators: true }
    );

    return NextResponse.json({
      success: true,
      data: updatedBlog,
      message: 'Blog post updated successfully'
    });

  } catch (error: any) {
    console.error(`PATCH /api/blogs/${params.slug} error:`, error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    await connectDB();

    const { slug } = params;

    const blog = await BlogPost.findOne({ slug });

    if (!blog) {
      return NextResponse.json(
        { success: false, error: 'Blog post not found' },
        { status: 404 }
      );
    }

    await BlogPost.findByIdAndDelete(blog._id);

    return NextResponse.json({
      success: true,
      message: 'Blog post deleted successfully'
    });

  } catch (error: any) {
    console.error(`DELETE /api/blogs/${params.slug} error:`, error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
