'use client';
import React, { useState, useEffect } from 'react';
import { DataTable, DataTableColumn } from '@/components/data-table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Eye, 
    Edit, 
    Trash2, 
    User, 
    Calendar, 
    Clock, 
    FileText, 
    Tag,
    AlertTriangle,
    BookOpen,
    TrendingUp,
    Heart,
    Share,
    MessageCircle,
    Star,
    Pin,
    Globe,
    Lock,
    Users,
    Crown,
    Archive,
    BarChart3
} from 'lucide-react';
import { adminApi,  userApiForAdmin } from '@/lib/admin-api-client';
import { useRouter } from 'next/navigation';

// ✅ Import shadcn AlertDialog components
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { BlogPost } from '@/config/content/blogs';

function BlogsList() {
    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    // ✅ State for delete confirmation dialog
    const [deleteDialog, setDeleteDialog] = useState<{
        open: boolean;
        blog: BlogPost | null;
    }>({
        open: false,
        blog: null
    });

    // ✅ Fetch all blogs
    const fetchBlogs = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await userApiForAdmin.get('/blogs');
            console.log('Blogs response:', response);

            setBlogs(response.data || response);
        } catch (err: any) {
            console.error('Error fetching blogs:', err);
            setError(err.message || 'Failed to fetch blogs');
        } finally {
            setLoading(false);
        }
    };

    // ✅ Load blogs on component mount
    useEffect(() => {
        fetchBlogs();
    }, []);

    // ✅ Handle blog actions
    const handleView = (blog: BlogPost) => {
        if (blog.status === 'published') {
            router.push(`/blog/${blog.slug}`);
        } else {
            router.push(`/blogs/${blog.slug}`);
        }
    };

    const handleEdit = (blog: BlogPost) => {
        router.push(`/blog-editor?blogId=${blog.slug}`);
    };

    // ✅ Open delete confirmation dialog
    const handleDeleteClick = (blog: BlogPost) => {
        setDeleteDialog({
            open: true,
            blog: blog
        });
    };

    // ✅ Close delete confirmation dialog
    const handleDeleteCancel = () => {
        setDeleteDialog({
            open: false,
            blog: null
        });
    };

    // ✅ Confirm delete blog
    const handleDeleteConfirm = async () => {
        if (!deleteDialog.blog) return;

        try {
            setLoading(true);
            await adminApi.delete(`/blogs/${deleteDialog.blog.slug}`);
            
            // Close dialog
            setDeleteDialog({
                open: false,
                blog: null
            });

            // Refresh blogs list
            await fetchBlogs();
            
            console.log('Blog deleted successfully!');
            
        } catch (err: any) {
            console.error('Error deleting blog:', err);
            alert('Failed to delete blog. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // ✅ Toggle blog status
    const handleToggleStatus = async (blog: BlogPost) => {
        try {
            const newStatus = blog.status === 'published' ? 'draft' : 'published';
            
            await adminApi.patch(`/blogs/${blog.slug}`, {
                status: newStatus,
                publishedAt: newStatus === 'published' ? new Date() : blog.publishedAt
            });
            
            await fetchBlogs();
            
        } catch (err: any) {
            console.error('Error updating blog status:', err);
            alert('Failed to update blog status.');
        }
    };

    // ✅ Toggle featured status
    const handleToggleFeatured = async (blog: BlogPost) => {
        try {
            await adminApi.patch(`/blogs/${blog.slug}`, {
                featured: !blog.featured
            });
            
            await fetchBlogs();
            
        } catch (err: any) {
            console.error('Error updating featured status:', err);
            alert('Failed to update featured status.');
        }
    };

    // ✅ Toggle pinned status
    const handleTogglePinned = async (blog: BlogPost) => {
        try {
            await adminApi.patch(`/blogs/${blog.slug}`, {
                pinned: !blog.pinned
            });
            
            await fetchBlogs();
            
        } catch (err: any) {
            console.error('Error updating pinned status:', err);
            alert('Failed to update pinned status.');
        }
    };

    // ✅ Get visibility icon and color
    const getVisibilityDisplay = (visibility: string) => {
        switch (visibility) {
            case 'public':
                return { icon: Globe, color: 'text-green-600', label: 'Public' };
            case 'private':
                return { icon: Lock, color: 'text-red-600', label: 'Private' };
            case 'members-only':
                return { icon: Users, color: 'text-blue-600', label: 'Members Only' };
            default:
                return { icon: Globe, color: 'text-gray-600', label: visibility };
        }
    };

    // ✅ Define table columns with complete BlogPost interface support
    const columns: DataTableColumn<BlogPost>[] = [
        {
            key: 'title',
            label: 'Blog Post',
            width: '30%',
            render: (value, row) => {
                const visibilityDisplay = getVisibilityDisplay(row.visibility);
                const VisibilityIcon = visibilityDisplay.icon;
                
                return (
                    <div className="space-y-2">
                        <div className="font-semibold text-foreground line-clamp-2">
                            {value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                            /{row.slug}
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            {row.featured && (
                                <Badge variant="default" className="text-xs bg-yellow-500">
                                    <Star className="w-3 h-3 mr-1" />
                                    Featured
                                </Badge>
                            )}
                            {row.pinned && (
                                <Badge variant="secondary" className="text-xs">
                                    <Pin className="w-3 h-3 mr-1" />
                                    Pinned
                                </Badge>
                            )}
                            {row.premium && (
                                <Badge variant="outline" className="text-xs text-purple-600 border-purple-200">
                                    <Crown className="w-3 h-3 mr-1" />
                                    Premium
                                </Badge>
                            )}
                            {row.newsletter && (
                                <Badge variant="outline" className="text-xs text-blue-600 border-blue-200">
                                    Newsletter
                                </Badge>
                            )}
                            <div className={`flex items-center gap-1 text-xs ${visibilityDisplay.color}`}>
                                <VisibilityIcon className="w-3 h-3" />
                                <span>{visibilityDisplay.label}</span>
                            </div>
                        </div>
                    </div>
                );
            }
        },
        {
            key: 'author',
            label: 'Author',
            width: '15%',
            render: (value, row) => (
                <div className="flex items-center gap-2">
                    {value.avatar ? (
                        <img 
                            src={value.avatar} 
                            alt={value.name} 
                            className="w-8 h-8 rounded-full object-cover"
                        />
                    ) : (
                        <User className="w-8 h-8 p-1 bg-muted rounded-full text-muted-foreground" />
                    )}
                    <div>
                        <div className="text-sm font-medium">{value.name}</div>
                        <div className="text-xs text-muted-foreground truncate max-w-[120px]">
                            {value.email}
                        </div>
                    </div>
                </div>
            )
        },
        {
            key: 'status',
            label: 'Status',
            width: '10%',
            render: (value, row) => (
                <div className="space-y-1">
                    <Badge
                        variant={
                            value === 'published' ? 'default' :
                            value === 'draft' ? 'secondary' :
                            value === 'scheduled' ? 'outline' : 'destructive'
                        }
                        className="cursor-pointer"
                    >
                        {value === 'published' && <Globe className="w-3 h-3 mr-1" />}
                        {value === 'draft' && <FileText className="w-3 h-3 mr-1" />}
                        {value === 'scheduled' && <Clock className="w-3 h-3 mr-1" />}
                        {value === 'archived' && <Archive className="w-3 h-3 mr-1" />}
                        {value.charAt(0).toUpperCase() + value.slice(1)}
                    </Badge>
                    {row.scheduledAt && value === 'scheduled' && (
                        <div className="text-xs text-muted-foreground">
                            {new Date(row.scheduledAt).toLocaleDateString()}
                        </div>
                    )}
                </div>
            )
        },
        {
            key: 'categories',
            label: 'Categories',
            width: '12%',
            render: (value, row) => (
                <div className="space-y-2">
                    <div className="flex flex-wrap gap-1">
                        {value.slice(0, 2).map((category: string, index: number) => (
                            <Badge key={index} variant="outline" className="text-xs">
                                {category}
                            </Badge>
                        ))}
                        {value.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                                +{value.length - 2}
                            </Badge>
                        )}
                    </div>
                    {row.tags.length > 0 && (
                        <div className="text-xs text-muted-foreground">
                            {row.tags.length} tags
                        </div>
                    )}
                </div>
            )
        },
        {
            key: 'readTime',
            label: 'Read Time',
            width: '8%',
            render: (value) => (
                <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">{value} min</span>
                </div>
            )
        },
        {
            key: 'views',
            label: 'Analytics',
            width: '12%',
            render: (value, row) => (
                <div className="space-y-1">
                    <div className="flex items-center gap-1 text-sm">
                        <Eye className="w-3 h-3 text-blue-600" />
                        <span>{(value || 0).toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                        <Heart className="w-3 h-3 text-red-600" />
                        <span>{(row.likes || 0).toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                        <MessageCircle className="w-3 h-3 text-green-600" />
                        <span>{row.commentsCount || 0}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Share className="w-3 h-3" />
                        <span>{(row.shares || 0).toLocaleString()}</span>
                    </div>
                </div>
            )
        },
        {
            key: 'publishedAt',
            label: 'Published',
            width: '10%',
            render: (value, row) => (
                <div className="space-y-1">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <div className="text-sm">
                            {value ? new Date(value).toLocaleDateString() : (
                                row.status === 'draft' ? 'Draft' : '-'
                            )}
                        </div>
                    </div>
                    {row.updatedAt && (
                        <div className="text-xs text-muted-foreground">
                            Updated: {new Date(row.updatedAt).toLocaleDateString()}
                        </div>
                    )}
                    {row.version > 1 && (
                        <div className="text-xs text-blue-600">
                            v{row.version}
                        </div>
                    )}
                </div>
            )
        }
    ];

    // ✅ Define table actions with all blog operations
    const actions = [
        {
            label: 'View',
            onClick: handleView,
            variant: 'outline' as const,
            className: 'text-blue-600 hover:text-blue-700'
        },
        {
            label: 'Edit',
            onClick: handleEdit,
            variant: 'outline' as const,
            className: 'text-green-600 hover:text-green-700'
        },
        {
            label: 'Toggle Status',
            onClick: handleToggleStatus,
            variant: 'outline' as const,
            className: 'text-orange-600 hover:text-orange-700'
        },
        {
            label: 'Toggle Featured',
            onClick: handleToggleFeatured,
            variant: 'outline' as const,
            className: 'text-yellow-600 hover:text-yellow-700'
        },
        {
            label: 'Toggle Pinned',
            onClick: handleTogglePinned,
            variant: 'outline' as const,
            className: 'text-purple-600 hover:text-purple-700'
        },
        {
            label: 'Delete',
            onClick: handleDeleteClick,
            variant: 'outline' as const,
            className: 'text-red-600 hover:text-red-700'
        }
    ];

    // ✅ Error state
    if (error) {
        return (
            <div className="p-6">
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                    <p className="text-destructive font-medium">Error loading blogs</p>
                    <p className="text-destructive/80 text-sm mt-1">{error}</p>
                    <Button
                        onClick={fetchBlogs}
                        className="mt-3"
                        size="sm"
                    >
                        Retry
                    </Button>
                </div>
            </div>
        );
    }

    // ✅ Enhanced stats calculations using complete BlogPost interface
    const stats = {
        total: blogs.length,
        published: blogs.filter(blog => blog.status === 'published').length,
        drafts: blogs.filter(blog => blog.status === 'draft').length,
        scheduled: blogs.filter(blog => blog.status === 'scheduled').length,
        archived: blogs.filter(blog => blog.status === 'archived').length,
        featured: blogs.filter(blog => blog.featured).length,
        pinned: blogs.filter(blog => blog.pinned).length,
        premium: blogs.filter(blog => blog.premium).length,
        totalViews: blogs.reduce((sum, blog) => sum + (blog.views || 0), 0),
        totalLikes: blogs.reduce((sum, blog) => sum + (blog.likes || 0), 0),
        totalShares: blogs.reduce((sum, blog) => sum + (blog.shares || 0), 0),
        totalComments: blogs.reduce((sum, blog) => sum + (blog.commentsCount || 0), 0),
        avgReadTime: blogs.length > 0 ? Math.round(blogs.reduce((sum, blog) => sum + blog.readTime, 0) / blogs.length) : 0
    };

    return (
        <>
            <div className="p-6 container mx-auto space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">Blog Management</h1>
                        <p className="text-muted-foreground">Manage all blog posts, analytics, and content</p>
                    </div>
                    <Button onClick={() => router.push('/admin/blogs/create')}>
                        Create New Blog
                    </Button>
                </div>

                {/* ✅ Enhanced Stats Cards with BlogPost interface data */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                    <div className="bg-card p-4 rounded-lg border">
                        <div className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm font-medium">Total</span>
                        </div>
                        <p className="text-2xl font-bold text-primary">{stats.total}</p>
                    </div>
                    
                    <div className="bg-card p-4 rounded-lg border">
                        <div className="flex items-center gap-2">
                            <Globe className="w-4 h-4 text-green-600" />
                            <span className="text-sm font-medium">Published</span>
                        </div>
                        <p className="text-2xl font-bold text-green-600">{stats.published}</p>
                    </div>
                    
                    <div className="bg-card p-4 rounded-lg border">
                        <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-yellow-600" />
                            <span className="text-sm font-medium">Drafts</span>
                        </div>
                        <p className="text-2xl font-bold text-yellow-600">{stats.drafts}</p>
                    </div>
                    
                    <div className="bg-card p-4 rounded-lg border">
                        <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-purple-600" />
                            <span className="text-sm font-medium">Featured</span>
                        </div>
                        <p className="text-2xl font-bold text-purple-600">{stats.featured}</p>
                    </div>
                    
                    <div className="bg-card p-4 rounded-lg border">
                        <div className="flex items-center gap-2">
                            <Eye className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-medium">Views</span>
                        </div>
                        <p className="text-xl font-bold text-blue-600">{stats.totalViews.toLocaleString()}</p>
                    </div>
                    
                    <div className="bg-card p-4 rounded-lg border">
                        <div className="flex items-center gap-2">
                            <Heart className="w-4 h-4 text-red-600" />
                            <span className="text-sm font-medium">Likes</span>
                        </div>
                        <p className="text-xl font-bold text-red-600">{stats.totalLikes.toLocaleString()}</p>
                    </div>

                    <div className="bg-card p-4 rounded-lg border">
                        <div className="flex items-center gap-2">
                            <MessageCircle className="w-4 h-4 text-green-600" />
                            <span className="text-sm font-medium">Comments</span>
                        </div>
                        <p className="text-xl font-bold text-green-600">{stats.totalComments.toLocaleString()}</p>
                    </div>

                    <div className="bg-card p-4 rounded-lg border">
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-indigo-600" />
                            <span className="text-sm font-medium">Avg Read</span>
                        </div>
                        <p className="text-xl font-bold text-indigo-600">{stats.avgReadTime}m</p>
                    </div>
                </div>

                {/* Additional Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-card p-3 rounded-lg border">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Scheduled</span>
                            <Clock className="w-4 h-4 text-orange-600" />
                        </div>
                        <p className="text-lg font-semibold text-orange-600">{stats.scheduled}</p>
                    </div>
                    
                    <div className="bg-card p-3 rounded-lg border">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Pinned</span>
                            <Pin className="w-4 h-4 text-blue-600" />
                        </div>
                        <p className="text-lg font-semibold text-blue-600">{stats.pinned}</p>
                    </div>
                    
                    <div className="bg-card p-3 rounded-lg border">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Premium</span>
                            <Crown className="w-4 h-4 text-purple-600" />
                        </div>
                        <p className="text-lg font-semibold text-purple-600">{stats.premium}</p>
                    </div>
                    
                    <div className="bg-card p-3 rounded-lg border">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Shares</span>
                            <Share className="w-4 h-4 text-cyan-600" />
                        </div>
                        <p className="text-lg font-semibold text-cyan-600">{stats.totalShares.toLocaleString()}</p>
                    </div>
                </div>

                <DataTable
                    data={blogs}
                    columns={columns}
                    title="All Blog Posts"
                    subtitle={`${blogs.length} blog post${blogs.length !== 1 ? 's' : ''} with comprehensive analytics`}
                    loading={loading}
                    emptyMessage="No blogs found. Create your first blog post to get started!"
                    actions={actions}
                    className="shadow-sm"
                />
            </div>

            {/* ✅ Enhanced Delete Confirmation Dialog */}
            <AlertDialog open={deleteDialog.open} onOpenChange={handleDeleteCancel}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle className="flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-destructive" />
                            Delete Blog Post
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            Are you sure you want to delete <strong>"{deleteDialog.blog?.title}"</strong>?
                            <br />
                            <span className="text-muted-foreground text-sm">
                                Slug: /{deleteDialog.blog?.slug}
                            </span>
                            <br />
                            <span className="text-muted-foreground text-sm">
                                Author: {deleteDialog.blog?.author.name}
                            </span>
                            {deleteDialog.blog?.views && deleteDialog.blog.views > 0 && (
                                <>
                                    <br />
                                    <span className="text-muted-foreground text-sm">
                                        Views: {deleteDialog.blog.views.toLocaleString()} | 
                                        Likes: {deleteDialog.blog.likes || 0} | 
                                        Comments: {deleteDialog.blog.commentsCount || 0}
                                    </span>
                                </>
                            )}
                            <br />
                            <br />
                            <span className="text-destructive text-sm font-medium">
                                ⚠️ This action cannot be undone. The blog post will be permanently removed along with all comments, likes, analytics data, and any associated media files.
                            </span>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel 
                            onClick={handleDeleteCancel}
                            className="hover:bg-muted"
                        >
                            Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                            onClick={handleDeleteConfirm}
                            className="bg-destructive text-primary-foreground hover:bg-secondary hover:text-destructive"
                            disabled={loading}
                        >
                            {loading ? (
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    Deleting...
                                </div>
                            ) : (
                                <div className="flex items-center gap-2">
                                    <Trash2 className="w-4 h-4" />
                                    Delete Blog
                                </div>
                            )}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}

export default BlogsList;
