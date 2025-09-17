'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/navigation';
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
import { adminApi } from '@/lib/admin-api-client';
import dynamic from 'next/dynamic';
import { BlogPost } from '@/config/content/blogs';
import { useDropzone } from 'react-dropzone';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';

// Rich Text Editor (dynamically imported)
const RichTextEditor = dynamic(() => import('@/components/ui/rich-text-editor'), { 
  ssr: false,
  loading: () => <div className="h-64 bg-muted animate-pulse rounded-md" />
});

interface BlogEditorProps {
  blogId?: string;
  initialData?: Partial<BlogPost>;
}

// Image Upload Component
const ImageUpload: React.FC<{
  value?: string;
  onChange: (url: string) => void;
  onRemove: () => void;
  disabled?: boolean;
}> = ({ value, onChange, onRemove, disabled }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadMethod, setUploadMethod] = useState<'upload' | 'url'>('upload');
  const [urlInput, setUrlInput] = useState(value || '');

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setIsUploading(true);
      try {
        const file = acceptedFiles[0];
        const formData = new FormData();
        formData.append('file', file);
        
        // Replace with your actual upload endpoint
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });
        
        if (response.ok) {
          const data = await response.json();
          onChange(data.url);
        } else {
          alert('Upload failed. Please try again.');
        }
      } catch (error) {
        console.error('Upload error:', error);
        alert('Upload failed. Please try again.');
      } finally {
        setIsUploading(false);
      }
    }
  }, [onChange]);

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
    }
  };

  return (
    <div className="space-y-4">
      {/* Upload Method Toggle */}
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

      {/* Current Image Preview */}
      {value && (
        <div className="relative group">
          <img
            src={value}
            alt="Preview"
            className="w-full h-48 object-cover rounded-lg border"
          />
          <Button
            type="button"
            variant="destructive"
            size="sm"
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={onRemove}
          >
            <Trash2Icon className="w-4 h-4" />
          </Button>
        </div>
      )}

      {/* Upload Area */}
      {!value && uploadMethod === 'upload' && (
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

      {/* URL Input */}
      {!value && uploadMethod === 'url' && (
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

const BlogEditor: React.FC<BlogEditorProps> = ({ blogId, initialData }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState<string[]>(initialData?.tags || []);
  const [categories, setCategories] = useState<string[]>(initialData?.categories || []);
  const [keywords, setKeywords] = useState<string[]>(initialData?.keywords || []);
  const [newTag, setNewTag] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [newKeyword, setNewKeyword] = useState('');

  const { register, handleSubmit, control, watch, setValue, formState: { errors } } = useForm<BlogPost>({
    defaultValues: {
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      metaTitle: '',
      metaDescription: '',
      author: {
        id: 'current-user',
        name: '',
        email: '',
        bio: '',
        avatar: '',
        socialLinks: {}
      },
      status: 'draft',
      visibility: 'public',
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
      publishedAt: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      ...initialData
    }
  });

  const watchTitle = watch('title');
  const watchContent = watch('content');
  const watchStatus = watch('status');

  // Auto-generate slug from title
  useEffect(() => {
    if (watchTitle && !blogId) {
      const slug = watchTitle
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .trim();
      setValue('slug', slug);
    }
  }, [watchTitle, setValue, blogId]);

  // Auto-calculate reading time
  useEffect(() => {
    if (watchContent) {
      const words = watchContent.replace(/<[^>]*>/g, '').split(/\s+/).length;
      const readTime = Math.ceil(words / 200); // Average reading speed: 200 words per minute
      setValue('readTime', readTime);
    }
  }, [watchContent, setValue]);

  // Auto-generate meta title from title
  useEffect(() => {
    if (watchTitle && !initialData?.metaTitle) {
      setValue('metaTitle', watchTitle);
    }
  }, [watchTitle, setValue, initialData?.metaTitle]);

  // Auto-set publish date when status changes to published
  useEffect(() => {
    if (watchStatus === 'published' && !blogId) {
      setValue('publishedAt', new Date());
    }
  }, [watchStatus, setValue, blogId]);

  // Add functions for tags, categories, keywords
  const addTag = () => {
    if (newTag && !tags.includes(newTag)) {
      const updatedTags = [...tags, newTag];
      setTags(updatedTags);
      setValue('tags', updatedTags);
      setNewTag('');
    }
  };

  const removeTag = (tag: string) => {
    const updatedTags = tags.filter(t => t !== tag);
    setTags(updatedTags);
    setValue('tags', updatedTags);
  };

  const addCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      const updatedCategories = [...categories, newCategory];
      setCategories(updatedCategories);
      setValue('categories', updatedCategories);
      setNewCategory('');
    }
  };

  const removeCategory = (category: string) => {
    const updatedCategories = categories.filter(c => c !== category);
    setCategories(updatedCategories);
    setValue('categories', updatedCategories);
  };

  const addKeyword = () => {
    if (newKeyword && !keywords.includes(newKeyword)) {
      const updatedKeywords = [...keywords, newKeyword];
      setKeywords(updatedKeywords);
      setValue('keywords', updatedKeywords);
      setNewKeyword('');
    }
  };

  const removeKeyword = (keyword: string) => {
    const updatedKeywords = keywords.filter(k => k !== keyword);
    setKeywords(updatedKeywords);
    setValue('keywords', updatedKeywords);
  };

  // Form submit
  const onSubmit = async (data: BlogPost) => {
    try {
      setLoading(true);

      const blogData = {
        ...data,
        tags,
        categories,
        keywords,
        createdAt: blogId ? data.createdAt : new Date(),
        updatedAt: new Date(),
        _id: blogId || `blog_${Date.now()}`
      };
      console.log(blogData)
      if (blogId) {
        // await adminApi.patch(`/blogs/${blogId}`, blogData);

        alert('Blog updated successfully!');
      } else {
        // await adminApi.post('/blogs', blogData);
        alert('Blog created successfully!');
      }

    //   router.push('/admin/blogs');
    } catch (error) {
      console.error('Error saving blog:', error);
      alert('Error saving blog. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">
            {blogId ? 'Edit Blog Post' : 'Create New Blog Post'}
          </h1>
          <p className="text-muted-foreground mt-2">
            {blogId ? 'Update your blog post content and settings' : 'Write and publish your new blog post'}
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={() => router.back()}>
            <XIcon className="w-4 h-4 mr-2" />
            Cancel
          </Button>
          <Button onClick={() => window.open('/blog/preview', '_blank')} variant="outline">
            <EyeIcon className="w-4 h-4 mr-2" />
            Preview
          </Button>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <Tabs defaultValue="content" className="w-full">
          <TabsList className="grid w-full grid-cols-4 h-12 rounded-lg bg-secondary">
            <TabsTrigger value="content" className="text-sm data-[state=active]:bg-accent-foreground transition-all duration-300 ease-in-out data-[state=active]:text-accent  m-1 rounded-lg font-medium">
              Content
            </TabsTrigger>
            <TabsTrigger value="seo" className="text-sm data-[state=active]:bg-accent-foreground transition-all duration-300 ease-in-out data-[state=active]:text-accent  m-1 rounded-lg font-medium">
              SEO & Meta
            </TabsTrigger>
            <TabsTrigger value="media" className="text-sm data-[state=active]:bg-accent-foreground transition-all duration-300 ease-in-out data-[state=active]:text-accent  m-1 rounded-lg font-medium">
              Media
            </TabsTrigger>
            <TabsTrigger value="settings" className="text-sm data-[state=active]:bg-accent-foreground transition-all duration-300 ease-in-out data-[state=active]:text-accent  m-1 rounded-lg font-medium">
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Content Tab */}
          <TabsContent value="content" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserIcon className="w-5 h-5" />
                  Basic Information
                </CardTitle>
                <CardDescription>
                  Essential information about your blog post
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      {...register('title', { required: 'Title is required' })}
                      placeholder="Enter blog title"
                      className="text-base"
                    />
                    {errors.title && (
                      <p className="text-sm text-destructive">{errors.title.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="slug">Slug *</Label>
                    <Input
                      id="slug"
                      {...register('slug', { required: 'Slug is required' })}
                      placeholder="blog-post-slug"
                      className="text-base font-mono"
                    />
                    {errors.slug && (
                      <p className="text-sm text-destructive">{errors.slug.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="excerpt">Excerpt *</Label>
                  <Textarea
                    id="excerpt"
                    {...register('excerpt', { required: 'Excerpt is required' })}
                    placeholder="Brief description of your blog post"
                    rows={4}
                    className="text-base"
                  />
                  {errors.excerpt && (
                    <p className="text-sm text-destructive">{errors.excerpt.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label>Content *</Label>
                  <Controller
                    name="content"
                    control={control}
                    rules={{ required: 'Content is required' }}
                    render={({ field }) => (
                      <RichTextEditor
                        value={field.value}
                        onChange={field.onChange}
                        placeholder="Write your blog content here..."
                      />
                    )}
                  />
                  {errors.content && (
                    <p className="text-sm text-destructive">{errors.content.message}</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Tags and Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Tags & Categories</CardTitle>
                <CardDescription>
                  Organize your content for better discovery
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Tags */}
                <div className="space-y-3">
                  <Label>Tags</Label>
                  <div className="flex gap-2">
                    <Input
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      placeholder="Add tag"
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                    />
                    <Button type="button" onClick={addTag} variant="outline">
                      <PlusIcon className="w-4 h-4 mr-2" />
                      Add
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="cursor-pointer px-3 py-1">
                        {tag}
                        <XIcon
                          className="w-3 h-3 ml-2"
                          onClick={() => removeTag(tag)}
                        />
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div className="space-y-3">
                  <Label>Categories</Label>
                  <div className="flex gap-2">
                    <Input
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      placeholder="Add category"
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addCategory())}
                    />
                    <Button type="button" onClick={addCategory} variant="outline">
                      <PlusIcon className="w-4 h-4 mr-2" />
                      Add
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <Badge key={category} variant="outline" className="cursor-pointer px-3 py-1">
                        {category}
                        <XIcon
                          className="w-3 h-3 ml-2"
                          onClick={() => removeCategory(category)}
                        />
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Author Information */}
            <Card>
              <CardHeader>
                <CardTitle>Author Information</CardTitle>
                <CardDescription>
                  Information about the blog post author
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="authorName">Author Name *</Label>
                    <Input
                      id="authorName"
                      {...register('author.name', { required: 'Author name is required' })}
                      placeholder="Author full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="authorEmail">Author Email *</Label>
                    <Input
                      id="authorEmail"
                      type="email"
                      {...register('author.email', { required: 'Author email is required' })}
                      placeholder="author@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="authorBio">Author Bio</Label>
                  <Textarea
                    id="authorBio"
                    {...register('author.bio')}
                    placeholder="Brief bio about the author"
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="authorAvatar">Avatar URL</Label>
                    <Input
                      id="authorAvatar"
                      {...register('author.avatar')}
                      placeholder="https://example.com/avatar.jpg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="authorTwitter">Twitter</Label>
                    <Input
                      id="authorTwitter"
                      {...register('author.socialLinks.twitter')}
                      placeholder="@username"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="authorLinkedin">LinkedIn</Label>
                    <Input
                      id="authorLinkedin"
                      {...register('author.socialLinks.linkedin')}
                      placeholder="linkedin.com/in/username"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* SEO Tab */}
          <TabsContent value="seo" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>SEO Optimization</CardTitle>
                <CardDescription>
                  Optimize your content for search engines and social media
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="metaTitle">Meta Title</Label>
                  <Input
                    id="metaTitle"
                    {...register('metaTitle')}
                    placeholder="SEO optimized title (auto-generated from title)"
                  />
                  <p className="text-xs text-muted-foreground">
                    Recommended: 50-60 characters
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="metaDescription">Meta Description</Label>
                  <Textarea
                    id="metaDescription"
                    {...register('metaDescription')}
                    placeholder="SEO meta description"
                    rows={3}
                  />
                  <p className="text-xs text-muted-foreground">
                    Recommended: 150-160 characters
                  </p>
                </div>

                <div className="space-y-3">
                  <Label>SEO Keywords</Label>
                  <div className="flex gap-2">
                    <Input
                      value={newKeyword}
                      onChange={(e) => setNewKeyword(e.target.value)}
                      placeholder="Add keyword"
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addKeyword())}
                    />
                    <Button type="button" onClick={addKeyword} variant="outline">
                      <PlusIcon className="w-4 h-4 mr-2" />
                      Add
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {keywords.map((keyword) => (
                      <Badge key={keyword} variant="secondary" className="cursor-pointer px-3 py-1">
                        {keyword}
                        <XIcon
                          className="w-3 h-3 ml-2"
                          onClick={() => removeKeyword(keyword)}
                        />
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="canonicalUrl">Canonical URL</Label>
                    <Input
                      id="canonicalUrl"
                      {...register('canonicalUrl')}
                      placeholder="https://example.com/blog/post"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="twitterCard">Twitter Card Type</Label>
                    <Controller
                      name="twitterCard"
                      control={control}
                      render={({ field }) => (
                        <Select value={field.value} onValueChange={field.onChange}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Twitter card type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="summary">Summary</SelectItem>
                            <SelectItem value="summary_large_image">Summary Large Image</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ogImage">Open Graph Image</Label>
                  <Controller
                    name="ogImage"
                    control={control}
                    render={({ field }) => (
                      <ImageUpload
                        value={field.value}
                        onChange={field.onChange}
                        onRemove={() => field.onChange('')}
                      />
                    )}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Media Tab */}
          <TabsContent value="media" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ImageIcon className="w-5 h-5" />
                  Featured Image
                </CardTitle>
                <CardDescription>
                  Main image for your blog post
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Controller
                  name="featuredImage.url"
                  control={control}
                  render={({ field }) => (
                    <ImageUpload
                      value={field.value}
                      onChange={field.onChange}
                      onRemove={() => field.onChange('')}
                    />
                  )}
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="featuredImageAlt">Alt Text</Label>
                    <Input
                      id="featuredImageAlt"
                      {...register('featuredImage.alt')}
                      placeholder="Image description for accessibility"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="featuredImageCaption">Caption</Label>
                    <Input
                      id="featuredImageCaption"
                      {...register('featuredImage.caption')}
                      placeholder="Image caption (optional)"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <SettingsIcon className="w-5 h-5" />
                  Publishing Settings
                </CardTitle>
                <CardDescription>
                  Control how and when your blog post is published
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <Controller
                      name="status"
                      control={control}
                      render={({ field }) => (
                        <Select value={field.value} onValueChange={field.onChange}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="draft">Draft</SelectItem>
                            <SelectItem value="published">Published</SelectItem>
                            <SelectItem value="scheduled">Scheduled</SelectItem>
                            <SelectItem value="archived">Archived</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="visibility">Visibility</Label>
                    <Controller
                      name="visibility"
                      control={control}
                      render={({ field }) => (
                        <Select value={field.value} onValueChange={field.onChange}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="public">Public</SelectItem>
                            <SelectItem value="private">Private</SelectItem>
                            <SelectItem value="members-only">Members Only</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="readTime">Reading Time (minutes)</Label>
                    <Input
                      id="readTime"
                      type="number"
                      {...register('readTime', { valueAsNumber: true })}
                      placeholder="5"
                    />
                    <p className="text-xs text-muted-foreground">
                      Auto-calculated from content length
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="publishedAt">Publish Date</Label>
                  <Input
                    id="publishedAt"
                    type="datetime-local"
                    {...register('publishedAt')}
                  />
                  <p className="text-xs text-muted-foreground">
                    Auto-set when status changes to published
                  </p>
                </div>

                <Separator />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-0.5">
                        <Label>Featured Post</Label>
                        <p className="text-sm text-muted-foreground">
                          Mark this post as featured
                        </p>
                      </div>
                      <Controller
                        name="featured"
                        control={control}
                        render={({ field }) => (
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        )}
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-0.5">
                        <Label>Pinned Post</Label>
                        <p className="text-sm text-muted-foreground">
                          Pin this post to the top
                        </p>
                      </div>
                      <Controller
                        name="pinned"
                        control={control}
                        render={({ field }) => (
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        )}
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-0.5">
                        <Label>Enable Comments</Label>
                        <p className="text-sm text-muted-foreground">
                          Allow readers to comment
                        </p>
                      </div>
                      <Controller
                        name="commentsEnabled"
                        control={control}
                        render={({ field }) => (
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        )}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-0.5">
                        <Label>Newsletter</Label>
                        <p className="text-sm text-muted-foreground">
                          Include in newsletter
                        </p>
                      </div>
                      <Controller
                        name="newsletter"
                        control={control}
                        render={({ field }) => (
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        )}
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-0.5">
                        <Label>Premium Content</Label>
                        <p className="text-sm text-muted-foreground">
                          Restrict to premium members
                        </p>
                      </div>
                      <Controller
                        name="premium"
                        control={control}
                        render={({ field }) => (
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        )}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Submit Buttons */}
        <div className="flex items-center justify-between pt-8 border-t">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Auto-saved</span>
            <span>•</span>
            <span>Last updated: {new Date().toLocaleTimeString()}</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Button type="button" variant="outline" onClick={() => router.back()}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading} size="lg">
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Saving...
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

export default BlogEditor;
