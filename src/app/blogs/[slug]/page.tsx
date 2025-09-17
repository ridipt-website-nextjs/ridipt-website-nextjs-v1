import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
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

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const post = sampleBlogs.find(blog => blog.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Blog Not Found',
      description: 'The requested blog post was not found.'
    };
  }

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    keywords: post.keywords,
  };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = sampleBlogs.find(blog => blog.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <Structure >
      {/* Navigation Bar */}
      <nav className="sticky w-full top-[calc(var(--header-height)_+_9px)] z-10  backdrop-blur-3xl bg-popover/70 border-b border-gray-100 dark:border-gray-800">
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
              <button className="w-9 h-9 bg-gray-50 hover:bg-red-50 dark:bg-gray-900 dark:hover:bg-red-950 text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105">
                <Heart className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 bg-gray-50 hover:bg-blue-50 dark:bg-gray-900 dark:hover:bg-blue-950 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105">
                <Share2 className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 bg-gray-50 hover:bg-yellow-50 dark:bg-gray-900 dark:hover:bg-yellow-950 text-gray-600 hover:text-yellow-600 dark:text-gray-400 dark:hover:text-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105">
                <Bookmark className="w-4 h-4" />
              </button>
              <button className="w-9 h-9 bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full flex items-center justify-center transition-all duration-300">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 py-16">
          {/* Main Content */}
          <main className="lg:col-span-3">
            {/* Header */}
            <header className="mb-16">
              {/* Category */}
              <div className="mb-8">
                {/* <span className="inline-block px-4 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold rounded-full shadow-lg"> */}
                <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full shadow-lg">
                  {post.categories[0]}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-5xl lg:text-5xl font-bold text-primary mb-8 leading-none tracking-tight">
                {post.title}
              </h1>

              {/* Subtitle */}
              <p className="text-2xl text-gray-600 dark:text-gray-400 leading-relaxed mb-12 font-light">
                {post.excerpt}
              </p>

              {/* Author & Meta */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">
                        {post.author.name.charAt(0)}
                      </span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white dark:border-black"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-lg">{post.author.name}</h3>
                    <p className="text-muted-foreground">{post.author.bio}</p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center space-x-8 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">
                      {new Date(post.publishedAt!).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{post.readTime} min read</span>
                  </div>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            {post.featuredImage && (
              <div className="mb-16">
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={post.featuredImage.url}
                    alt={post.featuredImage.alt}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {post.featuredImage.caption && (
                  <p className="text-center text-muted-foreground text-sm mt-6 italic">
                    {post.featuredImage.caption}
                  </p>
                )}
              </div>
            )}

            {/* Article Content */}
            <article className="mb-20 text-primary">
              <div className="prose prose-2xl max-w-none dark:prose-invert prose-headings:font-black prose-headings:text-black dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-xl prose-strong:text-black dark:prose-strong:text-white prose-a:text-violet-600 dark:prose-a:text-violet-400 prose-a:no-underline hover:prose-a:underline prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-violet-600 dark:prose-code:text-violet-400">
                <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />
              </div>
            </article>

            {/* Tags */}
            <div className="mb-16">
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tag/${tag.toLowerCase()}`}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium transition-colors duration-200"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Author Section */}
            <AuthorCard author={post.author} />

            {/* Comments */}
            <CommentsSection comments={post.comments} />
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-[calc(var(--header-height)_+_var(--header-height)_+_30px)] space-y-8">
              {/* Social Share */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Share</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center space-x-3 p-3 bg-blue-50 hover:bg-blue-100 dark:bg-blue-950 dark:hover:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-xl transition-colors group">
                    <Twitter className="w-5 h-5" />
                    <span className="font-medium">Twitter</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 bg-blue-50 hover:bg-blue-100 dark:bg-blue-950 dark:hover:bg-blue-900 text-blue-700 dark:text-blue-400 rounded-xl transition-colors group">
                    <Linkedin className="w-5 h-5" />
                    <span className="font-medium">LinkedIn</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-xl transition-colors group">
                    <Copy className="w-5 h-5" />
                    <span className="font-medium">Copy Link</span>
                  </button>
                </div>
              </div>

              {/* Related Posts */}
              <RelatedPosts currentPostId={post._id} />
            </div>
          </aside>
        </div>
      </div>
    </Structure>
  );
}

// Author Card Component
function AuthorCard({ author }: { author: BlogPost['author'] }) {
  return (
    <div className="mb-20 p-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black rounded-3xl border border-gray-100 dark:border-gray-800">
      <div className="flex items-start space-x-6">
        <div className="relative shrink-0">
          <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
            <span className="text-white font-bold text-2xl">
              {author.name.charAt(0)}
            </span>
          </div>
          <div className="absolute -top-2 -right-2 w-7 h-7 bg-green-500 rounded-full border-3 border-white dark:border-black shadow-lg flex items-center justify-center">
            <Sparkles className="w-3 h-3 text-white" />
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-black dark:text-white mb-3">
            {author.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg">
            {author.bio}
          </p>
          
          {author.socialLinks && (
            <div className="flex space-x-3">
              {author.socialLinks.twitter && (
                <a 
                  href={`https://twitter.com/${author.socialLinks.twitter}`}
                  className="w-10 h-10 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              )}
              {author.socialLinks.linkedin && (
                <a 
                  href={`https://linkedin.com/in/${author.socialLinks.linkedin}`}
                  className="w-10 h-10 bg-blue-100 hover:bg-blue-200 dark:bg-blue-900 dark:hover:bg-blue-800 text-blue-700 dark:text-blue-400 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
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
function RelatedPosts({ currentPostId }: { currentPostId: string }) {
  const relatedPosts = sampleBlogs.filter(post => post._id !== currentPostId).slice(0, 4);

  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">More Articles</h3>
      <div className="space-y-6">
        {relatedPosts.map((post) => (
          <Link
            key={post._id}
            href={`/blog/${post.slug}`}
            className="group block"
          >
            <article className="space-y-3">
              {post.featuredImage && (
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                  <Image
                    src={post.featuredImage.url}
                    alt={post.featuredImage.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div>
                <h4 className="font-bold text-black dark:text-white line-clamp-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors leading-tight mb-2">
                  {post.title}
                </h4>
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <Clock className="w-3 h-3 mr-1" />
                  <span>{post.readTime} min</span>
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
function CommentsSection({ comments }: { comments: BlogPost['comments'] }) {
  return (
    <div className="mb-16">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl font-black text-black dark:text-white">
          Comments ({comments.length})
        </h2>
      </div>

      {/* Comment Form */}
      <div className="mb-12 p-8 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center shrink-0">
            <User2 className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <textarea
              placeholder="Share your thoughts..."
              className="w-full p-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all text-lg"
              rows={4}
            />
            <div className="flex justify-end mt-4">
              <button className="px-8 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-200 font-semibold">
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-8">
        {comments.map((comment) => (
          <CommentCard key={comment._id} comment={comment} />
        ))}
      </div>
    </div>
  );
}

// Comment Card Component
function CommentCard({ comment }: { comment: BlogPost['comments'][0] }) {
  return (
    <div className="p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center shrink-0">
          <span className="text-white font-bold">
            {comment.author.name.charAt(0)}
          </span>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-4">
            <h4 className="font-bold text-black dark:text-white text-lg">{comment.author.name}</h4>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm rounded-full">
              {new Date(comment.createdAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric'
              })}
            </span>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-lg">
            {comment.content}
          </p>
          
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors">
              <Heart className="w-5 h-5" />
              <span className="font-medium">{comment.likes}</span>
            </button>
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
                    <h5 className="font-bold text-black dark:text-white">{reply.author.name}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(reply.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {reply.content}
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
