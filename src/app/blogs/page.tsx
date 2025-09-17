import React from 'react'
import Structure from '@/components/common/page-structure';
import { TechServices as HeroSection } from '@/components/ui/sticky-scroll-reveal';
import Image from 'next/image';
import { Calendar, Clock, User, ArrowRight, Tag, Eye, Heart, Bookmark, Share2, FileText, Hash, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { BlogPost, sampleBlogs } from '@/config/content/blogs';
import Section from '@/components/section-structure';


const page = () => {
    return (
        <Structure className='!p-0'>
            <HeroSection
                btnData={{
                    title:'Expore Blogs'
                    ,url:'#blogs-section'
                }} // Blogs page ke liye button optional hai, isliye false
                heading="Our Blog"
                subheading="Latest insights, stories & updates"
                description="Stay informed with expert articles, tutorials, and industry insights designed to inspire learning and spark innovation. 
    Explore a wide range of topics covering technology trends, product updates, success stories, and practical guides that help you grow and stay ahead."
                content={
                    <div className='relative flex-1 hidden md:flex overflow-hidden'>
                        <Image
                            src={require('@assets/blog/hero-section.jpg')}  
                            alt="Blog Hero Image"
                            width={400}
                            height={400}
                            className='flex-1 shadow-xl z-20 block aspect-square h-[420px] w-full object-contain rounded-lg'
                        />
                        {/* Decorative gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/40 via-purple-100/30 to-pink-100/20 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/10 blur-2xl"></div>
                    </div>
                }
                className={`!max-w-none w-full bg-gray-50 dark:bg-background`}
                subSection={false}
            />

            <Section
                id='blogs-section'
                className="max-w-7xl mx-auto px-4 py-8"
            >

                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {sampleBlogs.map((blog) => (
                        <BlogCard key={blog._id} post={blog} />
                    ))}

                </div>
            </Section>
        </Structure>
    )
}

interface BlogCardProps {
    post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
    return (
        <div className="group relative">
            <Link href={`/blogs/${post.slug}`} className="block">
                <article className="relative bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-3">

                    {/* Background Decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-secondary-foreground/40 to-transparent rounded-full -translate-y-16 translate-x-16" />

                    {/* Image */}
                    {post.featuredImage && (
                        <div className="relative h-48 mx-6 mt-6 group-hover:shadow-2xl rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src={post.featuredImage.url}
                                alt={post.featuredImage.alt}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                    )}

                    <div className="p-6 space-y-4">
                        {/* Category */}
                        <div className="flex justify-between items-start">
                            <span className="inline-block px-4 py-2 bg-muted text-muted-foreground text-xs font-bold rounded-xl shadow-lg transform group-hover:scale-105 transition-transform">
                                {post.categories[0]}
                            </span>

                            {/* Date */}
                            <div className="text-right">
                                <p className="text-xs text-muted-foreground font-medium">
                                    {new Date(post.publishedAt!).toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric'
                                    })}
                                </p>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-3">
                            <h2 className="text-xl font-bold text-primary line-clamp-2 leading-snug group-hover:text-accent-foreground transition-colors">
                                {post.title}
                            </h2>

                            <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                                {post.excerpt}
                            </p>
                        </div>

                        {/* Author Section */}
                        <div className="flex items-center space-x-4 pt-4">
                            <div className="flex items-center space-x-3 flex-1">
                                <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-md">
                                    <span className="text-secondary font-bold text-sm">
                                        {post.author.name.charAt(0)}
                                    </span>
                                </div>
                                <div>
                                    <p className="font-semibold text-primary text-sm">{post.author.name}</p>
                                    <p className="text-muted-foreground text-xs">{post.readTime} min read</p>
                                </div>
                            </div>

                            {/* Arrow */}
                            <div className="w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                                <ArrowUpRight className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </article>
            </Link>
        </div>
    );
}



export default page