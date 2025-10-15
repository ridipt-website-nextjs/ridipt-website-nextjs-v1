import React from 'react';
import { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Heart,
  Share2,
  Bookmark,
  MessageCircle,
  ChevronRight,
  Twitter,
  Linkedin,
  Copy,
  MoreHorizontal,
  User2,
  Sparkles
} from 'lucide-react';
import { BlogPost, sampleBlogs } from '@/config/content/blogs';
import Structure from '@/components/common/page-structure';
import { getOrigin } from '@/lib/helper-functions';
import { ContentParser } from '@/components/blogs/content-parser';
import { CopyLinkInteractive, ShareInteractive } from '@/components/blogs/interaction-btn';

interface BlogDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Server Actions
async function toggleLike(formData: FormData) {
  'use server';
  const postId = formData.get('postId') as string;
  const action = formData.get('action') as string;
  
  try {
    // API call to toggle like
    const res = await fetch(`${await getOrigin()}/api/blogs/${postId}/like`, {
      method: action === 'like' ? 'POST' : 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!res.ok) {
      throw new Error('Failed to toggle like');
    }
  } catch (error) {
    console.error('Like toggle error:', error);
  }
  
  // Revalidate and redirect back to the same page
  redirect(`/blogs/${formData.get('slug')}`);
}

async function toggleBookmark(formData: FormData) {
  'use server';
  const postId = formData.get('postId') as string;
  const action = formData.get('action') as string;
  
  try {
    // API call to toggle bookmark
    const res = await fetch(`${await getOrigin()}/api/blogs/${postId}/bookmark`, {
      method: action === 'bookmark' ? 'POST' : 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!res.ok) {
      throw new Error('Failed to toggle bookmark');
    }
  } catch (error) {
    console.error('Bookmark toggle error:', error);
  }
  
  redirect(`/blogs/${formData.get('slug')}`);
}

async function shareOnPlatform(formData: FormData) {
  'use server';
  const platform = formData.get('platform') as string;
  const url = formData.get('url') as string;
  const title = formData.get('title') as string;
  
  let shareUrl = '';
  
  if (platform === 'twitter') {
    shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
  } else if (platform === 'linkedin') {
    shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  }
  
  if (shareUrl) {
    redirect(shareUrl);
  }
}

async function addComment(formData: FormData) {
  'use server';
  const postId = formData.get('postId') as string;
  const content = formData.get('content') as string;
  const authorName = formData.get('authorName') as string;
  const authorEmail = formData.get('authorEmail') as string;
  
  if (!content.trim()) {
    return;
  }
  
  try {
    // API call to add comment
    const res = await fetch(`${await getOrigin()}/api/blogs/${postId}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content,
        author: {
          name: authorName || 'Anonymous',
          email: authorEmail,
        },
      }),
    });
    
    if (!res.ok) {
      throw new Error('Failed to add comment');
    }
  } catch (error) {
    console.error('Comment add error:', error);
  }
  
  redirect(`/blogs/${formData.get('slug')}`);
}

// Server-side data fetching function
async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(`${await getOrigin()}/api/blogs/${slug}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });
    if (!res.ok) {
      return sampleBlogs.find((b) => b.slug === slug) || null;
    }
    const json = await res.json();
    return json.data || null;
  } catch (error) {
    console.error('Blog fetch error:', error);
    return sampleBlogs.find((b) => b.slug === slug) || null;
  }
}

// Check if user has liked/bookmarked (you can implement user session logic)
async function getUserInteractions(postId: string) {
  try {
    // This would typically check user session and database
    // For now returning default values
    return {
      isLiked: false,
      isBookmarked: false,
      likeCount: Math.floor(Math.random() * 100), // Sample data
    };
  } catch (error) {
    return {
      isLiked: false,
      isBookmarked: false,
      likeCount: 0,
    };
  }
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { slug } = await params;
  const blogPost = await getBlogPost(slug);
  console.log(blogPost)
  
  if (!blogPost) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post was not found.",
    };
  }
  
  return {
    title: blogPost.metaTitle || blogPost.title,
    description: blogPost.metaDescription || blogPost.excerpt,
    keywords: blogPost.keywords,
  };
}

export default async function BlogDetailPage({ params }: any) {
  const { slug } = await params;
  const blogPost = await getBlogPost(slug);
  
  if (!blogPost) {
    notFound();
  }
  
  // Get user interactions
  const userInteractions = await getUserInteractions(blogPost._id || 'default');
  
  // Create share URLs
  const postUrl = `${await getOrigin()}/blogs/${slug}`;
  
  return (
    <Structure>
      {/* Navigation Bar */}
      <nav className="sticky w-full top-[calc(var(--header-height)_+_9px)] z-10 backdrop-blur-3xl bg-popover/70 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/blog"
              className="group flex items-center space-x-3 text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-all duration-300"
            >
              <div className="w-9 h-9 bg-gray-50 dark:bg-gray-900 rounded-full flex items-center justify-center group-hover:bg-gray-100 dark:group-hover:bg-gray-800 transition-colors">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <span className="font-medium">All Articles</span>
            </Link>
            
            <div className="flex items-center space-x-2">
              {/* Like Button */}
              <form action={toggleLike}>
                <input type="hidden" name="postId" value={blogPost._id || 'default'} />
                <input type="hidden" name="slug" value={slug} />
                <input type="hidden" name="action" value={userInteractions.isLiked ? 'unlike' : 'like'} />

                {/* when implemented then will uncomment */}
                {/* <button 
                  type="submit"
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 ${
                    userInteractions.isLiked 
                      ? 'bg-red-50 text-red-600 dark:bg-red-950 dark:text-red-400' 
                      : 'bg-gray-50 hover:bg-red-50 dark:bg-gray-900 dark:hover:bg-red-950 text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${userInteractions.isLiked ? 'fill-current' : ''}`} />
                </button> */}
              </form>

              {/* Native Share Button - Client Component */}
              <ShareInteractive postUrl={postUrl} title={blogPost.title} />

              {/* Bookmark Button */}
              {/* <form action={toggleBookmark}>
                <input type="hidden" name="postId" value={blogPost._id || 'default'} />
                <input type="hidden" name="slug" value={slug} />
                <input type="hidden" name="action" value={userInteractions.isBookmarked ? 'unbookmark' : 'bookmark'} />
                <button 
                  type="submit"
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 ${
                    userInteractions.isBookmarked 
                      ? 'bg-yellow-50 text-yellow-600 dark:bg-yellow-950 dark:text-yellow-400' 
                      : 'bg-gray-50 hover:bg-yellow-50 dark:bg-gray-900 dark:hover:bg-yellow-950 text-gray-600 hover:text-yellow-600 dark:text-gray-400 dark:hover:text-yellow-400'
                  }`}
                >
                  <Bookmark className={`w-4 h-4 ${userInteractions.isBookmarked ? 'fill-current' : ''}`} />
                </button>
              </form> */}

              {/* <button className="w-9 h-9 bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full flex items-center justify-center transition-all duration-300">
                <MoreHorizontal className="w-4 h-4" />
              </button> */}
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 md:gap-40 py-16">
          {/* Main Content */}
          <main className="lg:col-span-3">
            {/* Header */}
            <header className="mb-16">
              {/* Category */}
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full shadow-lg">
                  {blogPost.categories?.[0] || 'General'}
                </span>
              </div>
              
              {/* Title */}
              <h1 className="text-5xl lg:text-5xl font-bold text-primary mb-8 leading-none tracking-tight">
                {blogPost.title}
              </h1>
              
              {/* Subtitle */}
              <p className="text-2xl text-gray-600 dark:text-gray-400 leading-relaxed mb-12 font-light">
                {blogPost.excerpt}
              </p>
              
              {/* Author & Meta */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">
                        {blogPost.author?.name?.charAt(0) || 'A'}
                      </span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white dark:border-black"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg">{blogPost.author?.name || 'Anonymous'}</h3>
                    <p className="text-muted-foreground">{blogPost.author?.bio || 'Content Creator'}</p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center space-x-8 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">
                      {blogPost.publishedAt ? new Date(blogPost.publishedAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      }) : 'Recently'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{blogPost.readTime || 5} min read</span>
                  </div>
                  {userInteractions.likeCount > 0 && (
                    <div className="flex items-center space-x-2">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{userInteractions.likeCount} likes</span>
                    </div>
                  )}
                </div>
              </div>
            </header>

            {/* Featured Image */}
            {blogPost.featuredImage && (
              <div className="mb-16">
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={blogPost.featuredImage.url}
                    alt={blogPost.featuredImage.alt || blogPost.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {blogPost.featuredImage.caption && (
                  <p className="text-center text-muted-foreground text-sm mt-6 italic">
                    {blogPost.featuredImage.caption}
                  </p>
                )}
              </div>
            )}

            {/* Article Content */}
            <article className="mb-20 text-primary">
              <ContentParser content={blogPost?.content || ''} />
            </article>

            {/* Tags */}
            {blogPost.tags && blogPost.tags.length > 0 && (
              <div className="mb-16">
                <div className="flex flex-wrap gap-3">
                  {blogPost.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blogs/tag/${tag.toLowerCase()}`}
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium transition-colors duration-200"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Author Section */}
            <AuthorCard author={blogPost.author} />

            {/* Comments */}
            {/* <CommentsSection 
              comments={blogPost.comments || []} 
              postId={blogPost._id || 'default'}
              slug={slug}
            /> */}
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-[calc(var(--header-height)_+_var(--header-height)_+_30px)] space-y-8">
              {/* Social Share */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Share</h3>
                <div className="space-y-3">
                  {/* Twitter Share */}
                  <form action={shareOnPlatform}>
                    <input type="hidden" name="platform" value="twitter" />
                    <input type="hidden" name="url" value={postUrl} />
                    <input type="hidden" name="title" value={blogPost.title} />
                    <button
                      type="submit"
                      className="w-full flex items-center space-x-3 p-3 bg-blue-50 hover:bg-blue-100 dark:bg-blue-950 dark:hover:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-xl transition-colors group"
                    >
                      <Twitter className="w-5 h-5" />
                      <span className="font-medium">Twitter</span>
                    </button>
                  </form>
                  
                  {/* LinkedIn Share */}
                  <form action={shareOnPlatform}>
                    <input type="hidden" name="platform" value="linkedin" />
                    <input type="hidden" name="url" value={postUrl} />
                    <input type="hidden" name="title" value={blogPost.title} />
                    <button
                      type="submit"
                      className="w-full flex items-center space-x-3 p-3 bg-blue-50 hover:bg-blue-100 dark:bg-blue-950 dark:hover:bg-blue-900 text-blue-700 dark:text-blue-400 rounded-xl transition-colors group"
                    >
                      <Linkedin className="w-5 h-5" />
                      <span className="font-medium">LinkedIn</span>
                    </button>
                  </form>
                  
                  {/* Copy Link - Client Component */}
                  <CopyLinkInteractive postUrl={postUrl} />
                </div>
              </div>

              {/* Related Posts */}
              {/* <RelatedBlogPosts currentBlogPostId={blogPost._id} /> */}
            </div>
          </aside>
        </div>
      </div>
    </Structure>
  );
}

// Author Card Component
function AuthorCard({ author }: { author?: BlogPost['author'] }) {
  if (!author) return null;

  return (
    <div className="mb-20 p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black rounded-3xl border border-gray-100 dark:border-gray-800">
      <div className="flex items-start space-x-6">
        <div className="relative shrink-0">
          <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
            <span className="text-white font-bold text-2xl">
              {author.name?.charAt(0) || 'A'}
            </span>
          </div>
          <div className="absolute -top-2 -right-2 w-7 h-7 bg-green-500 rounded-full border-3 border-white dark:border-black shadow-lg flex items-center justify-center">
            <Sparkles className="w-3 h-3 text-white" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-black dark:text-white mb-3">
            {author.name || 'Anonymous'}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg">
            {author.bio || 'Content Creator'}
          </p>
          {author.socialLinks && (
            <div className="flex space-x-3">
              {author.socialLinks.twitter && (
                <a
                  href={`https://twitter.com/${author.socialLinks.twitter}`}
                  className="w-10 h-10 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              )}
              {author.socialLinks.linkedin && (
                <a
                  href={`https://linkedin.com/in/${author.socialLinks.linkedin}`}
                  className="w-10 h-10 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800 text-blue-700 dark:text-blue-400 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Related Posts Component
function RelatedBlogPosts({ currentBlogPostId }: { currentBlogPostId?: string }) {
  const relatedBlogPosts = sampleBlogs
    .filter(blogPost => blogPost._id !== currentBlogPostId)
    .slice(0, 4);

  if (relatedBlogPosts.length === 0) return null;

  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
        More Articles
      </h3>
      <div className="space-y-6">
        {relatedBlogPosts.map((blogPost) => (
          <Link
            key={blogPost._id}
            href={`/blogs/${blogPost.slug}`}
            className="group block"
          >
            <article className="space-y-3">
              {blogPost.featuredImage && (
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                  <Image
                    src={blogPost.featuredImage.url}
                    alt={blogPost.featuredImage.alt || blogPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div>
                <h4 className="font-bold text-black dark:text-white line-clamp-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors leading-tight mb-2">
                  {blogPost.title}
                </h4>
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <Clock className="w-3 h-3 mr-1" />
                  <span>{blogPost.readTime || 5} min</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Comments Section
function CommentsSection({ 
  comments, 
  postId, 
  slug 
}: { 
  comments: BlogPost['comments']; 
  postId: string;
  slug: string;
}) {
  const commentsArray = Array.isArray(comments) ? comments : [];

  return (
    <div className="mb-16">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl font-black text-black dark:text-white">
          Comments ({commentsArray.length})
        </h2>
      </div>

      {/* Comment Form */}
      <form action={addComment} className="mb-12 p-8 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800">
        <input type="hidden" name="postId" value={postId} />
        <input type="hidden" name="slug" value={slug} />
        
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center shrink-0">
            <User2 className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            {/* Name and Email Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="authorName"
                placeholder="Your name"
                className="p-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
              />
              <input
                type="email"
                name="authorEmail"
                placeholder="Your email (optional)"
                className="p-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
              />
            </div>
            
            <textarea
              name="content"
              placeholder="Share your thoughts..."
              className="w-full p-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-lg"
              rows={4}
              required
            />
            <div className="flex justify-end mt-4">
              <button 
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-200 font-semibold"
              >
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Comments List */}
      {commentsArray.length > 0 && (
        <div className="space-y-8">
          {commentsArray.map((comment) => (
            <CommentCard key={comment._id} comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
}

// Comment Card Component
function CommentCard({ comment }: { comment: BlogPost['comments'][0] }) {
  if (!comment) return null;

  return (
    <div className="p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center shrink-0">
          <span className="text-white font-bold">
            {comment.author?.name?.charAt(0) || 'A'}
          </span>
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-4">
            <h4 className="font-bold text-black dark:text-white text-lg">
              {comment.author?.name || 'Anonymous'}
            </h4>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm rounded-full">
              {comment.createdAt ? new Date(comment.createdAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric'
              }) : 'Recently'}
            </span>
          </div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
            {comment.content || 'No content available'}
          </p>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
              <Heart className="w-5 h-5" />
              <span className="font-medium">{comment.likes || 0}</span>
            </div>
            <button className="font-medium text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
              Reply
            </button>
          </div>
          
          {/* Replies */}
          {comment.replies && comment.replies.length > 0 && (
            <div className="mt-8 space-y-6 border-l-2 border-gray-200 dark:border-gray-700 pl-8">
              {comment.replies.map((reply) => (
                <div key={reply._id} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                  <div className="flex items-center space-x-2 mb-3">
                    <h5 className="font-bold text-black dark:text-white">
                      {reply.author?.name || 'Anonymous'}
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {reply.createdAt ? new Date(reply.createdAt).toLocaleDateString() : 'Recently'}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {reply.content || 'No content available'}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
