'use client';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  CalendarIcon, ImageIcon, UserIcon, SettingsIcon, SaveIcon, XIcon,
  UploadIcon, LinkIcon, Trash2Icon, EyeIcon, PlusIcon
} from 'lucide-react';
import { adminApi, userApiForAdmin } from '@/lib/admin-api-client';
import dynamic from 'next/dynamic';
import { BlogPost } from '@/config/content/blogs';
import { useDropzone } from 'react-dropzone';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { getChangedFields,  } from '@/config/utils';
// import RichTextEditor from '@/components/ui/rich-text-editor';

// Rich Text Editor (dynamically imported to prevent SSR issues)
const RichTextEditor = dynamic(() => import('@/components/ui/rich-text-editor'), {
  ssr: false,
  loading: () => <div className="h-64 bg-muted animate-pulse rounded-md" />
});

// Types
interface BlogEditorProps {
  blogId?: string;
  initialData?: Partial<BlogPost>;
}

interface UploadResponse {
  success: boolean;
  url?: string;
  key?: string;
  error?: string;
}

interface ImageData {
  url: string;
  key?: string;
}

type ImageValue = string | ImageData | undefined;

// Blog Form Fields Configuration (same as before)
type BlogFormField = {
  section: string;
  card: string;
  name: string;
  label: string;
  type: string;
  required: boolean;
  placeholder?: string;
  gridCols?: string;
  className?: string;
  rows?: number;
  options?: { value: string; label: string }[] | string[];
  helper?: string;
};

const blogFormFields: readonly BlogFormField[] = [
  // Basic Information Section
  {
    section: 'content',
    card: 'basic',
    name: 'title',
    label: 'Title',
    type: 'text',
    required: true,
    placeholder: 'Enter blog title',
    gridCols: 'lg:col-span-1'
  },
  {
    section: 'content',
    card: 'basic',
    name: 'slug',
    label: 'Slug',
    type: 'text',
    required: true,
    placeholder: 'blog-post-slug',
    gridCols: 'lg:col-span-1',
    className: 'font-mono'
  },
  {
    section: 'content',
    card: 'basic',
    name: 'excerpt',
    label: 'Excerpt',
    type: 'textarea',
    required: true,
    placeholder: 'Brief description of your blog post',
    rows: 4,
    gridCols: 'lg:col-span-2'
  },
  {
    section: 'content',
    card: 'basic',
    name: 'content',
    label: 'Content',
    type: 'rich-text',
    required: true,
    placeholder: 'Write your blog content here...',
    gridCols: 'lg:col-span-2'
  },

  // Author Information Section
  {
    section: 'content',
    card: 'author',
    name: 'author.name',
    label: 'Author Name',
    type: 'text',
    required: true,
    placeholder: 'Author full name',
    gridCols: 'lg:col-span-1'
  },
  {
    section: 'content',
    card: 'author',
    name: 'author.email',
    label: 'Author Email',
    type: 'email',
    required: true,
    placeholder: 'author@example.com',
    gridCols: 'lg:col-span-1'
  },
  {
    section: 'content',
    card: 'author',
    name: 'author.bio',
    label: 'Author Bio',
    type: 'textarea',
    required: false,
    placeholder: 'Brief bio about the author',
    rows: 3,
    gridCols: 'lg:col-span-2'
  },
  {
    section: 'content',
    card: 'author',
    name: 'author.avatar',
    label: 'Avatar URL',
    type: 'text',
    required: false,
    placeholder: 'https://example.com/avatar.jpg',
    gridCols: 'lg:col-span-1'
  },
  {
    section: 'content',
    card: 'author',
    name: 'author.socialLinks.twitter',
    label: 'Twitter',
    type: 'text',
    required: false,
    placeholder: '@username',
    gridCols: 'lg:col-span-1'
  },
  {
    section: 'content',
    card: 'author',
    name: 'author.socialLinks.linkedin',
    label: 'LinkedIn',
    type: 'text',
    required: false,
    placeholder: 'linkedin.com/in/username',
    gridCols: 'lg:col-span-1'
  },

  // SEO Section
  {
    section: 'seo',
    card: 'seo',
    name: 'metaTitle',
    label: 'Meta Title',
    type: 'text',
    required: false,
    placeholder: 'SEO optimized title (auto-generated from title)',
    helper: 'Recommended: 50-60 characters',
    gridCols: 'lg:col-span-2'
  },
  {
    section: 'seo',
    card: 'seo',
    name: 'metaDescription',
    label: 'Meta Description',
    type: 'textarea',
    required: false,
    placeholder: 'SEO meta description',
    rows: 3,
    helper: 'Recommended: 150-160 characters',
    gridCols: 'lg:col-span-2'
  },
  {
    section: 'seo',
    card: 'seo',
    name: 'canonicalUrl',
    label: 'Canonical URL',
    type: 'text',
    required: false,
    placeholder: 'https://example.com/blog/post',
    gridCols: 'lg:col-span-1'
  },
  {
    section: 'seo',
    card: 'seo',
    name: 'twitterCard',
    label: 'Twitter Card Type',
    type: 'select',
    required: false,
    options: [
      { value: 'summary', label: 'Summary' },
      { value: 'summary_large_image', label: 'Summary Large Image' }
    ],
    gridCols: 'lg:col-span-1'
  },
  {
    section: 'seo',
    card: 'seo',
    name: 'ogImage',
    label: 'Open Graph Image',
    type: 'image-upload',
    required: false,
    gridCols: 'lg:col-span-2'
  },

  // Media Section
  {
    section: 'media',
    card: 'media',
    name: 'featuredImage.url',
    label: 'Featured Image',
    type: 'image-upload',
    required: false,
    gridCols: 'lg:col-span-2'
  },
  {
    section: 'media',
    card: 'media',
    name: 'featuredImage.alt',
    label: 'Alt Text',
    type: 'text',
    required: false,
    placeholder: 'Image description for accessibility',
    gridCols: 'lg:col-span-1'
  },
  {
    section: 'media',
    card: 'media',
    name: 'featuredImage.caption',
    label: 'Caption',
    type: 'text',
    required: false,
    placeholder: 'Image caption (optional)',
    gridCols: 'lg:col-span-1'
  },

  // Settings Section
  {
    section: 'settings',
    card: 'publishing',
    name: 'status',
    label: 'Status',
    type: 'select',
    required: true,
    options: [
      { value: 'draft', label: 'Draft' },
      { value: 'published', label: 'Published' },
      { value: 'scheduled', label: 'Scheduled' },
      { value: 'archived', label: 'Archived' }
    ],
    gridCols: 'lg:col-span-1'
  },
  {
    section: 'settings',
    card: 'publishing',
    name: 'visibility',
    label: 'Visibility',
    type: 'select',
    required: true,
    options: [
      { value: 'public', label: 'Public' },
      { value: 'private', label: 'Private' },
      { value: 'members-only', label: 'Members Only' }
    ],
    gridCols: 'lg:col-span-1'
  },
  {
    section: 'settings',
    card: 'publishing',
    name: 'readTime',
    label: 'Reading Time (minutes)',
    type: 'number',
    required: false,
    placeholder: '5',
    helper: 'Auto-calculated from content length',
    gridCols: 'lg:col-span-1'
  },
  {
    section: 'settings',
    card: 'publishing',
    name: 'publishedAt',
    label: 'Publish Date',
    type: 'datetime-local',
    required: false,
    helper: 'Auto-set when status changes to published',
    gridCols: 'lg:col-span-2'
  }
] as const;

// Blog Array Fields Configuration
const blogArrayFields = [
  {
    section: 'content',
    card: 'taxonomy',
    name: 'tags',
    label: 'Tags',
    placeholder: 'Add tag',
    badgeVariant: 'secondary' as const
  },
  {
    section: 'content',
    card: 'taxonomy',
    name: 'categories',
    label: 'Categories',
    placeholder: 'Add category',
    badgeVariant: 'outline' as const
  },
  {
    section: 'seo',
    card: 'seo',
    name: 'keywords',
    label: 'SEO Keywords',
    placeholder: 'Add keyword',
    badgeVariant: 'secondary' as const
  }
] as const;

// Blog Switch Fields Configuration
const blogSwitchFields = [
  {
    section: 'settings',
    card: 'features',
    name: 'featured',
    label: 'Featured Post',
    description: 'Mark this post as featured'
  },
  {
    section: 'settings',
    card: 'features',
    name: 'pinned',
    label: 'Pinned Post',
    description: 'Pin this post to the top'
  },
  {
    section: 'settings',
    card: 'features',
    name: 'commentsEnabled',
    label: 'Enable Comments',
    description: 'Allow readers to comment'
  },
  {
    section: 'settings',
    card: 'features',
    name: 'newsletter',
    label: 'Newsletter',
    description: 'Include in newsletter'
  },
  {
    section: 'settings',
    card: 'features',
    name: 'premium',
    label: 'Premium Content',
    description: 'Restrict to premium members'
  }
] as const;

// Blog Tabs Configuration
const blogTabs = [
  {
    value: 'content' as const,
    label: 'Content',
    cards: ['basic', 'taxonomy', 'author'] as const
  },
  {
    value: 'seo' as const,
    label: 'SEO & Meta',
    cards: ['seo'] as const
  },
  {
    value: 'media' as const,
    label: 'Media',
    cards: ['media'] as const
  },
  {
    value: 'settings' as const,
    label: 'Settings',
    cards: ['publishing', 'features'] as const
  }
] as const;

// Blog Card Configuration
const blogCards = {
  basic: {
    title: 'Basic Information',
    description: 'Essential information about your blog post',
    icon: UserIcon
  },
  taxonomy: {
    title: 'Tags & Categories',
    description: 'Organize your content for better discovery'
  },
  author: {
    title: 'Author Information',
    description: 'Information about the blog post author'
  },
  seo: {
    title: 'SEO Optimization',
    description: 'Optimize your content for search engines and social media'
  },
  media: {
    title: 'Featured Image',
    description: 'Main image for your blog post',
    icon: ImageIcon
  },
  publishing: {
    title: 'Publishing Settings',
    description: 'Control how and when your blog post is published',
    icon: SettingsIcon
  },
  features: {
    title: 'Features & Options',
    description: 'Additional features and settings for your blog post'
  }
} as const;

// Debounce utility function
function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// **FIXED LocalStorage Functions with SSR Safety**
const BLOG_STORAGE_KEY = 'blog-draft-data';

const saveToLocalStorage = (data: any, blogId?: string) => {
  if (typeof window === 'undefined') return;
  
  try {
    const key = blogId ? `${BLOG_STORAGE_KEY}-${blogId}` : BLOG_STORAGE_KEY;
    localStorage.setItem(key, JSON.stringify({
      ...data,
      lastSaved: new Date().toISOString()
    }));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

const loadFromLocalStorage = (blogId?: string): any => {
  if (typeof window === 'undefined') return null;
  
  try {
    const key = blogId ? `${BLOG_STORAGE_KEY}-${blogId}` : BLOG_STORAGE_KEY;
    const savedData = localStorage.getItem(key);
    if (savedData) {
      return JSON.parse(savedData);
    }
  } catch (error) {
    console.error('Error loading from localStorage:', error);
  }
  return null;
};

const clearFromLocalStorage = (blogId?: string) => {
  if (typeof window === 'undefined') return;
  
  try {
    const key = blogId ? `${BLOG_STORAGE_KEY}-${blogId}` : BLOG_STORAGE_KEY;
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
};

// Helper functions
const getImageUrl = (value: ImageValue): string => {
  if (!value) return '';
  if (typeof value === 'string') return value;
  return value.url;
};

const getImageKey = (value: ImageValue): string | undefined => {
  if (!value) return undefined;
  if (typeof value === 'string') return undefined;
  return value.key;
};

// **FIXED ImageUpload Component**
const ImageUpload: React.FC<{
  value?: ImageValue;
  onChange: (data: ImageValue) => void;
  onRemove: () => void;
  disabled?: boolean;
  onFileDelete?: (url: string, key?: string) => Promise<void>;
  fileKey?: string;
}> = ({ value, onChange, onRemove, disabled, onFileDelete, fileKey }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadMethod, setUploadMethod] = useState<'upload' | 'url'>('upload');
  const [uploadError, setUploadError] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState(false);

  const imageUrl = getImageUrl(value);
  const [urlInput, setUrlInput] = useState(imageUrl || '');

  useEffect(() => {
    setUrlInput(imageUrl || '');
  }, [imageUrl]);

  const handleFileUpload = async (file: File): Promise<void> => {
    const maxSizeMB = 5;
    if (file && file.size > maxSizeMB * 1024 * 1024) {
      setUploadError(`File size should not exceed ${maxSizeMB}MB`);
      return;
    }

    if (file) {
      setIsUploading(true);
      setUploadError('');
      try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('path', 'blog-images');

        const res = await fetch('/api/files/upload', {
          method: 'POST',
          body: formData,
        });

        const data: UploadResponse = await res.json();

        if (data.success && data.url) {
          onChange({ url: data.url, key: data.key });
          setUploadError('');
        } else {
          throw new Error(data.error || 'Upload failed');
        }
      } catch (error: any) {
        console.error('Upload error:', error);
        setUploadError(error.message || 'Upload failed. Please try again.');
      } finally {
        setIsUploading(false);
      }
    }
  };

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      await handleFileUpload(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp']
    },
    maxFiles: 1,
    disabled: disabled || isUploading,
  });

  const handleUrlSubmit = () => {
    if (urlInput.trim()) {
      onChange(urlInput.trim());
      setUploadError('');
    }
  };

  const handleRemove = async () => {
    if (imageUrl && onFileDelete) {
      setIsDeleting(true);
      try {
        const key = fileKey || getImageKey(value);
        await onFileDelete(imageUrl, key);
      } catch (error) {
        console.error('Error deleting file:', error);
      } finally {
        setIsDeleting(false);
      }
    }

    onRemove();
    setUploadError('');
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button
          type="button"
          variant={uploadMethod === 'upload' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setUploadMethod('upload')}
        >
          <UploadIcon className="w-4 h-4 mr-2" />
          Upload File
        </Button>
        <Button
          type="button"
          variant={uploadMethod === 'url' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setUploadMethod('url')}
        >
          <LinkIcon className="w-4 h-4 mr-2" />
          Image URL
        </Button>
      </div>

      {uploadError && (
        <p className="text-sm text-destructive">{uploadError}</p>
      )}

      {imageUrl && (
        <div className="relative group">
          <img
            src={imageUrl}
            alt="Preview"
            className="w-full h-48 object-cover rounded-lg border"
          />
          <Button
            type="button"
            variant="destructive"
            size="sm"
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={handleRemove}
            disabled={isDeleting}
          >
            {isDeleting ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <Trash2Icon className="w-4 h-4" />
            )}
          </Button>
        </div>
      )}

      {!imageUrl && uploadMethod === 'upload' && (
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
            ${isDragActive ? 'border-primary bg-primary/10' : 'border-muted-foreground/25'}
            ${isUploading ? 'opacity-50 cursor-not-allowed' : 'hover:border-primary hover:bg-primary/5'}
          `}
        >
          <input {...getInputProps()} />
          {isUploading ? (
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              <p className="text-sm text-muted-foreground">Uploading...</p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <ImageIcon className="w-12 h-12 text-muted-foreground" />
              <p className="text-sm font-medium">
                {isDragActive ? 'Drop the image here' : 'Drag & drop an image here, or click to select'}
              </p>
              <p className="text-xs text-muted-foreground">
                Supports JPG, PNG, GIF, WebP (max 5MB)
              </p>
            </div>
          )}
        </div>
      )}

      {!imageUrl && uploadMethod === 'url' && (
        <div className="flex gap-2">
          <Input
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            placeholder="https://example.com/image.jpg"
            disabled={disabled}
          />
          <Button
            type="button"
            onClick={handleUrlSubmit}
            disabled={!urlInput.trim() || disabled}
          >
            Add
          </Button>
        </div>
      )}
    </div>
  );
};

// **CLIENT-ONLY BLOG EDITOR WRAPPER**
const BlogEditorWrapper: React.FC = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const searchParams = useSearchParams();
  
  // Get blogId from search params instead of props
  const blogId = searchParams.get('blogId'); 

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="container mx-auto p-6 max-w-7xl">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 bg-gray-200 rounded mb-8"></div>
          <div className="space-y-4">
            <div className="h-32 bg-gray-200 rounded"></div>
            <div className="h-32 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return <BlogEditor blogId={blogId!} initialData={{}} />;
};

// **MAIN BLOG EDITOR COMPONENT**
const BlogEditor: React.FC<BlogEditorProps> = ({ blogId, initialData }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [fetchingData, setFetchingData] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [lastSaved, setLastSaved] = useState<string>('');
  const [uploadedFiles, setUploadedFiles] = useState<Record<string, ImageData>>({});
  const [existingBlogData, setExistingBlogData] = useState<any>(null);
  
  // **NEW: Add retry tracking**
  const [retryCount, setRetryCount] = useState(0);
  const [maxRetries] = useState(3);
  const [fetchAttempted, setFetchAttempted] = useState(false);

  // **FIXED: Fetch existing blog data with retry logic**
  const fetchExistingBlog = useCallback(async (id: string, retryAttempt: number = 0) => {
    try {
      setFetchingData(true);
      setFetchError(null);
      
      console.log(`Fetching blog with ID: ${id} (Attempt ${retryAttempt + 1}/${maxRetries})`);
      
      // Try fetching by ID first, then by slug if needed
      let response;
      try {
        response = await userApiForAdmin.get(`/blogs/${id}`);
      } catch (error: any) {
        // If ID fetch fails, try as slug
        if (error.response?.status === 404) {
          console.log(`Blog not found by ID, trying as slug: ${id}`);
          response = await adminApi.get(`/blogs/slug/${id}`);
        } else {
          throw error;
        }
      }

      if (response && (response.success !== false)) {
        const blogData = response.data || response;
        console.log('Fetched blog data:', blogData);
        
        setExistingBlogData(blogData);
        setRetryCount(0); // Reset retry count on success
        setFetchAttempted(true);
        return blogData;
      } else {
        throw new Error('Blog not found');
      }
      
    } catch (err: any) {
      console.error('Error fetching blog:', err);
      
      const errorMessage = err.response?.data?.message || err.message || 'Failed to fetch blog data';
      
      // **NEW: Retry logic**
      if (retryAttempt < maxRetries - 1) {
        console.log(`Retrying in 2 seconds... (${retryAttempt + 1}/${maxRetries})`);
        setRetryCount(retryAttempt + 1);
        
        // Wait 2 seconds before retry
        setTimeout(() => {
          fetchExistingBlog(id, retryAttempt + 1);
        }, 2000);
        
        return null;
      } else {
        // Max retries reached
        console.error(`Max retries (${maxRetries}) reached. Giving up.`);
        setFetchError(`${errorMessage} (Failed after ${maxRetries} attempts)`);
        setFetchAttempted(true);
        setRetryCount(maxRetries);
        return null;
      }
    } finally {
      setFetchingData(false);
    }
  }, [maxRetries]);

  // **UPDATED: Default form data with proper RichTextEditor content handling**
  const defaultFormData = useMemo(() => {
    const savedData = typeof window !== 'undefined' ? loadFromLocalStorage(blogId) : null;

    // Base default values
    const baseDefaults = {
      title: '',
      slug: '',
      excerpt: '',
      content: '', // **IMPORTANT: This will be filled by existing blog data**
      metaTitle: '',
      metaDescription: '',
      keywords: [],
      tags: [],
      categories: [],
      author: {
        id: 'current-user',
        name: '',
        email: '',
        bio: '',
        avatar: '',
        socialLinks: {}
      },
      status: 'draft' as const,
      visibility: 'public' as const,
      featured: false,
      pinned: false,
      commentsEnabled: true,
      newsletter: false,
      premium: false,
      language: 'hi-en',
      readTime: 5,
      views: 0,
      likes: 0,
      shares: 0,
      impressions: 0,
      comments: [],
      commentsCount: 0,
      version: 1,
      publishedAt: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // **FIXED: Proper content handling for RichTextEditor**
    let formData = {
      ...baseDefaults,
      ...initialData,
      ...(savedData || {})
    };

    // If we have existing blog data, use it
    if (existingBlogData) {
      formData = {
        ...formData,
        ...existingBlogData,
        // **IMPORTANT: Ensure content is properly formatted for RichTextEditor**
        content: existingBlogData.content || '',
        // Handle dates properly for form inputs
        publishedAt: existingBlogData.publishedAt ? 
          new Date(existingBlogData.publishedAt).toISOString().slice(0, 16) : '',
        scheduledAt: existingBlogData.scheduledAt ? 
          new Date(existingBlogData.scheduledAt).toISOString().slice(0, 16) : '',
      };
    }

    return formData;
  }, [blogId, initialData, existingBlogData]);

  // Dynamic arrays initialization (same as before)
  const [dynamicArrays, setDynamicArrays] = useState<Record<string, string[]>>(() => {
    const initial: Record<string, string[]> = {};
    blogArrayFields.forEach(field => {
      initial[field.name] = [];
    });
    return initial;
  });

  const [newValues, setNewValues] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    blogArrayFields.forEach(field => {
      initial[field.name] = '';
    });
    return initial;
  });

  // **FIXED: Prevent infinite API calls with proper dependency management**
  useEffect(() => {
    if (blogId && !existingBlogData && !fetchingData && !fetchAttempted && retryCount < maxRetries) {
      fetchExistingBlog(blogId, retryCount);
    }
  }, [blogId, existingBlogData, fetchingData, fetchAttempted, retryCount, fetchExistingBlog, maxRetries]);

  // Load saved data and existing blog data after hydration
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedData = loadFromLocalStorage(blogId);
      
      const updatedArrays: Record<string, string[]> = {};
      blogArrayFields.forEach(field => {
        updatedArrays[field.name] = 
          savedData?.[field.name] || 
          existingBlogData?.[field.name] || 
          (initialData as any)?.[field.name] || 
          [];
      });
      
      setDynamicArrays(updatedArrays);
      
      if (savedData?.lastSaved) {
        setLastSaved(savedData.lastSaved);
      }
      if (savedData?.uploadedFiles) {
        setUploadedFiles(savedData.uploadedFiles);
      }
    }
  }, [blogId, initialData, existingBlogData]);

  const { register, handleSubmit, control, watch, setValue, getValues, reset, formState: { errors } } = useForm<any>({
    defaultValues: defaultFormData
  });

  // **ENHANCED: Reset form when existing blog data is loaded with proper RichTextEditor handling**
  useEffect(() => {
    if (existingBlogData && Object.keys(existingBlogData).length > 0) {
      console.log('Resetting form with existing blog data:', existingBlogData);
      
      // **FIXED: Properly handle content for RichTextEditor**
      const formData = {
        ...defaultFormData,
        // **CRITICAL: Ensure content field is properly set**
        content: existingBlogData.content || '',
        title: existingBlogData.title || '',
        slug: existingBlogData.slug || '',
        excerpt: existingBlogData.excerpt || '',
        status: existingBlogData.status || 'draft',
        visibility: existingBlogData.visibility || 'public',
        featured: !!existingBlogData.featured,
        pinned: !!existingBlogData.pinned,
        commentsEnabled: existingBlogData.commentsEnabled !== false, // default true
        newsletter: !!existingBlogData.newsletter,
        premium: !!existingBlogData.premium,
        // Dates for datetime-local inputs
        publishedAt: existingBlogData.publishedAt ? 
          new Date(existingBlogData.publishedAt).toISOString().slice(0, 16) : '',
        scheduledAt: existingBlogData.scheduledAt ? 
          new Date(existingBlogData.scheduledAt).toISOString().slice(0, 16) : '',
        // Featured image
        'featuredImage.url': typeof existingBlogData.featuredImage === 'object' ? 
          existingBlogData.featuredImage?.url || '' : existingBlogData.featuredImage || '',
        'featuredImage.alt': existingBlogData.featuredImage?.alt || '',
        'featuredImage.caption': existingBlogData.featuredImage?.caption || '',
        // Author fields
        'author.name': existingBlogData.author?.name || '',
        'author.email': existingBlogData.author?.email || '',
        'author.bio': existingBlogData.author?.bio || '',
        'author.avatar': existingBlogData.author?.avatar || '',
        'author.socialLinks.twitter': existingBlogData.author?.socialLinks?.twitter || '',
        'author.socialLinks.linkedin': existingBlogData.author?.socialLinks?.linkedin || '',
        'author.socialLinks.github': existingBlogData.author?.socialLinks?.github || '',
        // SEO fields
        metaTitle: existingBlogData.metaTitle || '',
        metaDescription: existingBlogData.metaDescription || '',
        canonicalUrl: existingBlogData.canonicalUrl || '',
        twitterCard: existingBlogData.twitterCard || 'summary',
        ogImage: existingBlogData.ogImage || '',
        // Other fields
        readTime: existingBlogData.readTime || 5,
        language: existingBlogData.language || 'hi-en',
      };

      // **IMPORTANT: Reset the form with all data including content**
      reset(formData);

      // **CRITICAL: Also manually set the content field to ensure RichTextEditor gets it**
      setTimeout(() => {
        setValue('content', existingBlogData.content || '', { shouldDirty: false });
      }, 100);

      // Set dynamic arrays from existing data
      const updatedArrays: Record<string, string[]> = {};
      blogArrayFields.forEach(field => {
        updatedArrays[field.name] = existingBlogData[field.name] || [];
      });
      setDynamicArrays(updatedArrays);
    }
  }, [existingBlogData, reset, defaultFormData, setValue]);

  const watchTitle = watch('title');
  const watchContent = watch('content');
  const watchStatus = watch('status');

  // Handle file removal function (same as before)
  const handleFileRemove = async (url: string, key?: string) => {
    try {
      if (key) {
        try {
          await fetch(`/api/files/delete?key=${encodeURIComponent(key)}`, {
            method: 'DELETE'
          });
        } catch (error) {
          console.error('Error deleting file from server:', error);
        }
      }

      setUploadedFiles(prev => {
        const updated = { ...prev };
        Object.keys(updated).forEach(fieldKey => {
          if (updated[fieldKey].url === url) {
            delete updated[fieldKey];
          }
        });
        return updated;
      });

      const currentFormData = getValues();
      const dataToSave = {
        ...currentFormData,
        ...dynamicArrays,
        uploadedFiles: Object.keys(uploadedFiles).reduce((acc, fieldKey) => {
          if (uploadedFiles[fieldKey].url !== url) {
            acc[fieldKey] = uploadedFiles[fieldKey];
          }
          return acc;
        }, {} as Record<string, ImageData>)
      };
      saveToLocalStorage(dataToSave, blogId);

    } catch (error) {
      console.error('Error in handleFileRemove:', error);
    }
  };

  // Debounced auto-save function (same as before)
  const debouncedSave = useCallback(
    debounce((data: any) => {
      const dataWithFiles = {
        ...data,
        uploadedFiles
      };
      saveToLocalStorage(dataWithFiles, blogId);
      setLastSaved(new Date().toISOString());
    }, 1000),
    [blogId, uploadedFiles]
  );

  // Form watching with debounce
  useEffect(() => {
    const subscription = watch((value) => {
      const currentData = {
        ...value,
        ...dynamicArrays
      };
      debouncedSave(currentData);
    });

    return () => subscription.unsubscribe();
  }, [watch, dynamicArrays, debouncedSave]);

  // Auto-generation effects (only for new blogs)
  useEffect(() => {
    if (watchTitle && !blogId && watchTitle.length > 0) {
      const slug = watchTitle
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .trim();
      setValue('slug', slug, { shouldDirty: false });
    }
  }, [watchTitle, setValue, blogId]);

  useEffect(() => {
    if (watchContent && watchContent.length > 0) {
      const words = watchContent.replace(/<[^>]*>/g, '').split(/\s+/).filter(Boolean).length;
      const readTime = Math.max(1, Math.ceil(words / 200));
      setValue('readTime', readTime, { shouldDirty: false });
    }
  }, [watchContent, setValue]);

  useEffect(() => {
    if (watchTitle && !existingBlogData?.metaTitle && !initialData?.metaTitle && watchTitle.length > 0) {
      setValue('metaTitle', watchTitle, { shouldDirty: false });
    }
  }, [watchTitle, setValue, existingBlogData?.metaTitle, initialData?.metaTitle]);

  useEffect(() => {
    if (watchStatus === 'published' && !blogId && !existingBlogData?.publishedAt) {
      setValue('publishedAt', new Date().toISOString().slice(0, 16), { shouldDirty: false });
    }
  }, [watchStatus, setValue, blogId, existingBlogData?.publishedAt]);

  // Dynamic array functions (same as before)
  const addArrayValue = useCallback((fieldName: string) => {
    const newValue = newValues[fieldName]?.trim();

    if (newValue && !dynamicArrays[fieldName].includes(newValue)) {
      const updatedArray = [...dynamicArrays[fieldName], newValue];

      setDynamicArrays(prev => ({ ...prev, [fieldName]: updatedArray }));
      setValue(fieldName, updatedArray, { shouldDirty: true, shouldValidate: true });
      setNewValues(prev => ({ ...prev, [fieldName]: '' }));
    }
  }, [newValues, dynamicArrays, setValue]);

  const removeArrayValue = useCallback((fieldName: string, value: string) => {
    const updatedArray = dynamicArrays[fieldName].filter(item => item !== value);

    setDynamicArrays(prev => ({ ...prev, [fieldName]: updatedArray }));
    setValue(fieldName, updatedArray, { shouldDirty: true, shouldValidate: true });
  }, [dynamicArrays, setValue]);

  // **ENHANCED: RichTextEditor render with better value handling**
  const renderField = (field: any) => {
    const fieldError = errors[field.name];

    switch (field.type) {
      case 'rich-text':
        return (
          <Controller
            name={field.name}
            control={control}
            rules={{ required: field.required ? `${field.label} is required` : false }}
            render={({ field: controllerField }) => (
              <RichTextEditor
                key={`rich-text-${blogId || 'new'}-${existingBlogData?.updatedAt || 'default'}`} // **CRITICAL: Force re-render with key**
                value={controllerField.value || ''}
                onChange={(value) => {
                  console.log('RichTextEditor onChange:', value?.substring(0, 100) + '...');
                  controllerField.onChange(value);
                }}
                placeholder={field.placeholder}
              />
            )}
          />
        );

      // Other field types (same as before)
      case 'text':
      case 'email':
      case 'number':
      case 'datetime-local':
        return (
          <Input
            id={field.name}
            type={field.type}
            {...register(field.name, {
              required: field.required ? `${field.label} is required` : false,
              valueAsNumber: field.type === 'number'
            })}
            placeholder={field.placeholder}
            className={field.className}
          />
        );

      case 'textarea':
        return (
          <Textarea
            id={field.name}
            {...register(field.name, {
              required: field.required ? `${field.label} is required` : false
            })}
            placeholder={field.placeholder}
            rows={field.rows || 3}
          />
        );

      case 'select':
        return (
          <Controller
            name={field.name}
            control={control}
            rules={{ required: field.required ? `${field.label} is required` : false }}
            render={({ field: controllerField }) => (
              <Select value={controllerField.value} onValueChange={controllerField.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder={field.placeholder || `Select ${field.label}`} />
                </SelectTrigger>
                <SelectContent>
                  {field.options.map((option: any) => (
                    <SelectItem
                      key={typeof option === 'string' ? option : option.value}
                      value={typeof option === 'string' ? option : option.value}
                    >
                      {typeof option === 'string' ? option : option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        );

      case 'image-upload':
        return (
          <Controller
            name={field.name}
            control={control}
            render={({ field: controllerField }) => {
              const fileData = uploadedFiles[field.name];
              
              return (
                <ImageUpload
                  value={controllerField.value}
                  onChange={(data) => {
                    if (typeof data === 'string') {
                      controllerField.onChange(data);
                    } else if (data && typeof data === 'object' && 'url' in data) {
                      controllerField.onChange(data.url);
                      setUploadedFiles(prev => ({
                        ...prev,
                        [field.name]: data
                      }));
                    }
                  }}
                  onRemove={() => {
                    controllerField.onChange('');
                    setUploadedFiles(prev => {
                      const updated = { ...prev };
                      delete updated[field.name];
                      return updated;
                    });
                  }}
                  onFileDelete={(url, key) => {
                    const actualKey = key || fileData?.key;
                    return handleFileRemove(url, actualKey);
                  }}
                  fileKey={fileData?.key}
                />
              );
            }}
          />
        );

      default:
        return null;
    }
  };

  // Other render functions (same as before)
  const renderArrayField = (field: any) => {
    return (
      <div className="space-y-3">
        <Label>{field.label}</Label>
        <div className="flex gap-2">
          <Input
            value={newValues[field.name] || ''}
            onChange={(e) => setNewValues(prev => ({ ...prev, [field.name]: e.target.value }))}
            placeholder={field.placeholder}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                addArrayValue(field.name);
              }
            }}
          />
          <Button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              addArrayValue(field.name);
            }}
            variant="outline"
          >
            <PlusIcon className="w-4 h-4 mr-2" />
            Add
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {dynamicArrays[field.name]?.map((value: string, index: number) => (
            <div key={`${field.name}-${value}-${index}`} className="group">
              <Badge
                variant={field.badgeVariant}
                className="cursor-pointer px-3 py-1 flex items-center gap-1 group-hover:bg-destructive/10 transition-colors"
              >
                <span>{value}</span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    removeArrayValue(field.name, value);
                  }}
                  className="ml-1 hover:bg-destructive/20 rounded-full p-0.5 transition-colors"
                  aria-label={`Remove ${value}`}
                >
                  <XIcon className="w-3 h-3" />
                </button>
              </Badge>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderSwitchField = (field: any) => {
    return (
      <div className="flex items-center justify-between p-4 border rounded-lg">
        <div className="space-y-0.5">
          <Label>{field.label}</Label>
          <p className="text-sm text-muted-foreground">
            {field.description}
          </p>
        </div>
        <Controller
          name={field.name}
          control={control}
          render={({ field: controllerField }) => (
            <Switch
              checked={controllerField.value}
              onCheckedChange={controllerField.onChange}
            />
          )}
        />
      </div>
    );
  };

  // Group functions (same as before)
  const getFieldsByCard = (section: string, cardName: string) => {
    return blogFormFields.filter(field =>
      field.section === section && field.card === cardName
    );
  };

  const getArrayFieldsByCard = (section: string, cardName: string) => {
    return blogArrayFields.filter(field =>
      field.section === section && field.card === cardName
    );
  };

  const getSwitchFieldsByCard = (section: string, cardName: string) => {
    return blogSwitchFields.filter(field =>
      field.section === section && field.card === cardName
    );
  };

  // Form submit (same as before)
  const onSubmit = async (data: any) => {
    try {
      setLoading(true);

      const blogData = {
        ...data,
        ...dynamicArrays,
        author: {
          id: data['author.id'] || existingBlogData?.author?.id || 'current-user',
          name: data['author.name'] || '',
          email: data['author.email'] || '',
          bio: data['author.bio'] || '',
          avatar: data['author.avatar'] || '',
          socialLinks: {
            twitter: data['author.socialLinks.twitter'] || '',
            linkedin: data['author.socialLinks.linkedin'] || '',
            github: data['author.socialLinks.github'] || '',
          }
        },
        featuredImage: data['featuredImage.url'] ? {
          url: data['featuredImage.url'],
          alt: data['featuredImage.alt'] || '',
          caption: data['featuredImage.caption'] || ''
        } : null,
        // updatedAt: new Date(),
        ...(blogId ? {} : { createdAt: new Date() }),
        // ...(data.status === 'published' && !existingBlogData?.publishedAt ? 
        //   { publishedAt: new Date() } : {}),
        ...(blogId ? { version: (existingBlogData?.version || 1) + 1 } : { version: 1 })
      };

      // console.log('Submitting blog data:', blogData);

      let response;
      if (blogId) {
        // const existingData = userApiForAdmin.get(`/blogs/${blogId}`)
        // console.log(blogData,existingBlogData)
        const updatedData = getChangedFields<typeof existingBlogData>(existingBlogData,blogData)
        // console.log(blogData,updatedData,existingBlogData)
        response = updatedData && await adminApi.patch(`/blogs/${blogId}`, updatedData);
      } else {
        response = await adminApi.post('/blogs', blogData);
      }

      // console.log('API Response:', response);

      if (response.success !== false) {
        clearFromLocalStorage(blogId);
        
        const message = blogId ? 'Blog updated successfully!' : 'Blog created successfully!';
        alert(message);
        
        if (!blogId && response.data?.slug) {
          router.push(`/blogs/${response.data.slug}`);
        } else if (!blogId && response.slug) {
          router.push(`/blogs/${response.slug}`);
        } else {
          router.push('/blogs-manager');
        }
      } else {
        throw new Error(response.error || 'Failed to save blog');
      }

    } catch (error: any) {
      console.error('Error saving blog:', error);
      const errorMessage = error.response?.data?.message || error.message || 'Error saving blog. Please try again.';
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const clearDraft = () => {
    if (confirm('Are you sure you want to clear the draft? This will remove all unsaved changes.')) {
      clearFromLocalStorage(blogId);
      window.location.reload();
    }
  };

  const formatLastSaved = (isoString: string) => {
    if (!isoString) return '';
    try {
      const date = new Date(isoString);
      return date.toLocaleTimeString();
    } catch {
      return '';
    }
  };

  // **ENHANCED: Manual retry function**
  const handleManualRetry = () => {
    setRetryCount(0);
    setFetchAttempted(false);
    setFetchError(null);
    setExistingBlogData(null);
    fetchExistingBlog(blogId!, 0);
  };

  // **ENHANCED: Loading state with retry information**
  if (blogId && fetchingData) {
    return (
      <div className="container mx-auto p-6 max-w-7xl">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center space-y-4">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-muted-foreground">
              Loading blog data...
              {retryCount > 0 && (
                <span className="block text-sm mt-1">
                  Retry attempt {retryCount + 1} of {maxRetries}
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // **ENHANCED: Error state with retry count information**
  if (blogId && fetchError && retryCount >= maxRetries) {
    return (
      <div className="container mx-auto p-6 max-w-7xl">
        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
          <h2 className="text-lg font-semibold text-destructive mb-2">Error Loading Blog</h2>
          <p className="text-destructive/80 mb-2">{fetchError}</p>
          <p className="text-sm text-muted-foreground mb-4">
            Attempted {maxRetries} times without success.
          </p>
          <div className="flex gap-3">
            <Button 
              onClick={handleManualRetry} 
              variant="outline"
            >
              Try Again
            </Button>
            <Button 
              onClick={() => router.push('/admin/blogs')} 
              variant="outline"
            >
              Back to Blogs
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">
            {blogId ? `Edit Blog Post${existingBlogData?.title ? `: ${existingBlogData.title}` : ''}` : 'Create New Blog Post'}
          </h1>
          <p className="text-muted-foreground mt-2">
            {blogId ? 'Update your blog post content and settings' : 'Write and publish your new blog post'}
          </p>
          {existingBlogData && (
            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
              <span>Status: {existingBlogData.status}</span>
              <span>•</span>
              <span>Version: {existingBlogData.version || 1}</span>
              {existingBlogData.publishedAt && (
                <>
                  <span>•</span>
                  <span>Published: {new Date(existingBlogData.publishedAt).toLocaleDateString()}</span>
                </>
              )}
            </div>
          )}
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={() => router.back()}>
            <XIcon className="w-4 h-4 mr-2" />
            Cancel
          </Button>
          {existingBlogData && (
            <Button 
              onClick={() => window.open(`/blog/${existingBlogData.slug}`, '_blank')} 
              variant="outline"
            >
              <EyeIcon className="w-4 h-4 mr-2" />
              Preview
            </Button>
          )}
          {lastSaved && (
            <Button variant="outline" onClick={clearDraft}>
              <Trash2Icon className="w-4 h-4 mr-2" />
              Clear Draft
            </Button>
          )}
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Rest of the form JSX stays the same */}
        <Tabs defaultValue="content" className="w-full">
          <TabsList className="grid w-full grid-cols-4 h-12 rounded-lg bg-secondary">
            {blogTabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="text-sm data-[state=active]:bg-accent-foreground transition-all duration-300 ease-in-out data-[state=active]:text-accent m-1 rounded-lg font-medium"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {blogTabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="space-y-6 mt-6">
              {tab.cards.map((cardName) => {
                const cardConfig = blogCards[cardName];
                const fields = getFieldsByCard(tab.value, cardName);
                const arrayFields = getArrayFieldsByCard(tab.value, cardName);
                const switchFields = getSwitchFieldsByCard(tab.value, cardName);

                if (!fields.length && !arrayFields.length && !switchFields.length) {
                  return null;
                }

                const IconComponent = 'icon' in cardConfig ? cardConfig.icon : undefined;

                return (
                  <Card key={cardName}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        {IconComponent && <IconComponent className="w-5 h-5" />}
                        {cardConfig?.title}
                      </CardTitle>
                      {cardConfig?.description && (
                        <CardDescription>
                          {cardConfig.description}
                        </CardDescription>
                      )}
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {fields.length > 0 && (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          {fields.map((field) => {
                            const fieldError = errors[field.name];
                            return (
                              <div key={field.name} className={`space-y-2 ${field.gridCols || ''}`}>
                                <Label htmlFor={field.name}>
                                  {field.label} {field.required && '*'}
                                </Label>
                                {renderField(field)}
                                {fieldError && (
                                  <p className="text-sm text-destructive">
                                    {typeof fieldError?.message === 'string' ? fieldError.message : null}
                                  </p>
                                )}
                                {field.helper && (
                                  <p className="text-xs text-muted-foreground">
                                    {field.helper}
                                  </p>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {arrayFields.map((field) => (
                        <div key={field.name}>
                          {renderArrayField(field)}
                        </div>
                      ))}

                      {switchFields.length > 0 && (
                        <>
                          {fields.length > 0 && <Separator />}
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {switchFields.map((field) => (
                              <div key={field.name}>
                                {renderSwitchField(field)}
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </TabsContent>
          ))}
        </Tabs>

        {/* Submit Buttons */}
        <div className="flex items-center justify-between pt-8 border-t">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Auto-saved</span>
            <span>•</span>
            <span>Last saved: {lastSaved ? formatLastSaved(lastSaved) : 'Never'}</span>
            {existingBlogData && (
              <>
                <span>•</span>
                <span>Last updated: {new Date(existingBlogData.updatedAt).toLocaleDateString()}</span>
              </>
            )}
          </div>

          <div className="flex items-center gap-3">
            <Button type="button" variant="outline" onClick={() => router.back()}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading || fetchingData} size="lg">
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  {blogId ? 'Updating...' : 'Creating...'}
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <SaveIcon className="w-4 h-4" />
                  {blogId ? 'Update Blog' : 'Create Blog'}
                </div>
              )}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};


// **EXPORT CLIENT-ONLY WRAPPER**
export default BlogEditorWrapper;