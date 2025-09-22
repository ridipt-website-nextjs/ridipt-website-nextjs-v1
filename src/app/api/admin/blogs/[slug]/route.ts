import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { BlogPost } from '@/models/blog.model';
import TokenManager from '@/lib/jwt-token-manager';

interface RouteParams {
  params: any;
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

    // Token validation (same as before)
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

    const { slug } = await params;
    const body = await request.json();

    const blog = await BlogPost.findOne({ slug });

    if (!blog) {
      return NextResponse.json(
        { success: false, error: 'Blog post not found' },
        { status: 404 }
      );
    }

    // **ENHANCED: Smart payload processing**
    const processedData = smartProcessPayload(body, blog.toObject());

    // console.log('Original payload keys:', Object.keys(body));
    // console.log('Processed payload keys:', Object.keys(processedData));

    // Validate processed data
    if (Object.keys(processedData).length === 0) {
      return NextResponse.json(
        { success: true, data: blog, message: 'No changes detected' },
        { status: 200 }
      );
    }

    // Update with processed data
    const updatedBlog = await BlogPost.findByIdAndUpdate(
      blog._id,
      { $set: { ...processedData, updatedAt: new Date() } },
      { new: true, runValidators: true }
    );

    return NextResponse.json({
      success: true,
      data: updatedBlog,
      message: 'Blog post updated successfully',
      changedFields: Object.keys(processedData)
    });

  } catch (error: any) {
    console.error(`PATCH /api/blogs/${params.slug} error:`, error);

    // Enhanced error response
    let errorMessage = error.message;
    if (error.code === 40) {
      errorMessage = "Data conflict detected. Please refresh and try again.";
    }

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
        code: error.code,
        details: error.name
      },
      { status: 500 }
    );
  }
}

// **ENHANCED: Smart payload processing function**
function smartProcessPayload(payload: any, existingData?: any): any {
  const processed: any = {};
  const nestedObjects: Record<string, any> = {};

  // **Step 1: Separate flat and nested fields**
  Object.entries(payload).forEach(([key, value]) => {
    // Skip client-side only fields
    if (['lastSaved', '_id', 'createdAt', '__v'].includes(key)) {
      return;
    }

    // Skip empty values
    if (value === null || value === undefined || value === '') {
      return;
    }

    if (key.includes('.')) {
      // Handle dot notation fields like "author.name", "featuredImage.url"
      const parts = key.split('.');
      const parentKey = parts[0];
      const childPath = parts.slice(1).join('.');

      if (!nestedObjects[parentKey]) {
        nestedObjects[parentKey] = {};
      }

      // Handle nested paths like "author.socialLinks.twitter"
      setNestedValue(nestedObjects[parentKey], childPath, value);
    } else {
      // Regular field or complete nested object
      processed[key] = value;
    }
  });

  // **Step 2: Merge nested objects with processed data**
  Object.entries(nestedObjects).forEach(([parentKey, nestedValue]) => {
    if (processed[parentKey] && typeof processed[parentKey] === 'object') {
      // Deep merge with existing nested object
      processed[parentKey] = deepMerge(processed[parentKey], nestedValue);
    } else {
      // Use existing data as base if available
      if (existingData && existingData[parentKey] && typeof existingData[parentKey] === 'object') {
        processed[parentKey] = deepMerge(existingData[parentKey], nestedValue);
      } else {
        processed[parentKey] = nestedValue;
      }
    }
  });

  return processed;
}

// **Helper function to set nested values**
function setNestedValue(obj: any, path: string, value: any): void {
  const keys = path.split('.');
  let current = obj;

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (!(key in current) || typeof current[key] !== 'object') {
      current[key] = {};
    }
    current = current[key];
  }

  current[keys[keys.length - 1]] = value;
}

// **Helper function for deep merge**
function deepMerge(target: any, source: any): any {
  const result = { ...target };

  Object.keys(source).forEach(key => {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(result[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  });

  return result;
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
