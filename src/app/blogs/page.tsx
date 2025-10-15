'use client'
import React, { useEffect, useState } from 'react'
import Structure from '@/components/common/page-structure';
import { TechServices as HeroSection } from '@/components/ui/sticky-scroll-reveal';
import Image from 'next/image';
import { BlogPost, sampleBlogs } from '@/config/content/blogs';
import Section from '@/components/section-structure';
import { BlogCard, SkeletonBlogCard } from '@/components/blogs/cards';
import { FileText } from 'lucide-react';

const Page = () => {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchBlog = async () => {
        try {
            setIsLoading(true);
            const res = await fetch('/api/blogs', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await res.json();
            setBlogs(data.data || []);
        } catch (error) {
            console.error('Error fetching blogs:', error);
            // Fallback to sample blogs
            setBlogs(sampleBlogs);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchBlog();
    }, []);

    return (
        <Structure className='!p-0'>
            <HeroSection
                btnData={{
                    title: 'Explore Blogs',
                    url: '#blogs-section'
                }}
                heading="Our Blog"
                subheading="Latest insights, stories & updates"
                description="Stay informed with expert articles, tutorials, and industry insights designed to inspire learning and spark innovation. Explore a wide range of topics covering technology trends, product updates, success stories, and practical guides that help you grow and stay ahead."
                content={
                    <div className='relative flex-1 hidden md:flex overflow-hidden'>
                        <Image
                            src={require('@assets/blog/hero-section.jpg')}
                            alt="Blog Hero Image"
                            width={400}
                            height={400}
                            className='flex-1 shadow-xl z-20 block aspect-square h-[420px] w-full object-contain rounded-lg'
                        />
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
                {/* ✅ Loading State */}
                {isLoading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <SkeletonBlogCard key={i} />
                        ))}
                    </div>
                ) : blogs.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog) => (
                            <BlogCard key={blog._id} post={blog} />
                        ))}
                    </div>
                ) : (
                    // ✅ Empty State
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-6">
                            <FileText className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <h3 className="text-2xl font-semibold text-foreground mb-2">
                            No Blogs Available
                        </h3>
                        <p className="text-muted-foreground max-w-md">
                            We're working on creating amazing content for you. Check back soon for our latest articles and insights!
                        </p>
                    </div>
                )}
            </Section>
        </Structure>
    );
};

export default Page;
