import mongoose, { Schema, model, Document } from 'mongoose';

export interface IBlogPost extends Document {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords: string[];
  tags: string[];
  categories: string[];
  author: {
    id: string;
    name: string;
    email: string;
    bio?: string;
    avatar?: string;
    socialLinks?: {
      twitter?: string;
      linkedin?: string;
      github?: string;
      instagram?: string;
      youtube?: string;
    };
  };
  status: 'draft' | 'published' | 'archived' | 'scheduled';
  visibility: 'public' | 'private' | 'members-only';
  featured: boolean;
  pinned: boolean;
  publishedAt?: Date;
  scheduledAt?: Date;
  expiresAt?: Date;
  featuredImage?: {
    url: string;
    alt: string;
    caption?: string;
    dimensions?: { width: number; height: number };
  };
  gallery?: Array<{
    url: string;
    alt: string;
    caption?: string;
  }>;
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  canonicalUrl?: string;
  structuredData?: object;
  views: number;
  likes: number;
  shares: number;
  readTime: number;
  impressions: number;
  clickThroughRate?: number;
  comments: Schema.Types.ObjectId[]; // refs to Comment model
  commentsEnabled: boolean;
  commentsCount: number;
  tableOfContents?: Array<{
    id: string;
    title: string;
    level: number;
    anchor: string;
  }>;
  version: number;
  editHistory?: Array<{
    editedAt: Date;
    editedBy: string;
    changes: string;
  }>;
  language: string;
  translations?: Array<{
    language: string;
    slug: string;
    title: string;
  }>;
  createdAt: Date;
  updatedAt: Date;
  relatedPosts?: string[];
  series?: {
    id: string;
    name: string;
    order: number;
  };
  newsletter?: boolean;
  premium?: boolean;
  downloadableContent?: Array<{
    title: string;
    url: string;
    type: string;
  }>;
}

const BlogPostSchema = new Schema<IBlogPost>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    excerpt: { type: String },

    metaTitle: { type: String },
    metaDescription: { type: String },
    keywords: [{ type: String }],
    tags: [{ type: String }],
    categories: [{ type: String }],

    author: {
      id: { type: String, required: true },
      name: { type: String, required: true },
      email: { type: String, required: true },
      bio: { type: String },
      avatar: { type: String },
      socialLinks: {
        twitter: { type: String },
        linkedin: { type: String },
        github: { type: String },
        instagram: { type: String },
        youtube: { type: String },
      },
    },

    status: {
      type: String,
      enum: ['draft', 'published', 'archived', 'scheduled'],
      default: 'draft',
    },
    visibility: {
      type: String,
      enum: ['public', 'private', 'members-only'],
      default: 'public',
    },
    featured: { type: Boolean, default: false },
    pinned: { type: Boolean, default: false },
    publishedAt: { type: Date },
    scheduledAt: { type: Date },
    expiresAt: { type: Date },

    featuredImage: {
      url: { type: String },
      alt: { type: String },
      caption: { type: String },
      dimensions: {
        width: { type: Number },
        height: { type: Number },
      },
    },

    gallery: [
      {
        url: { type: String },
        alt: { type: String },
        caption: { type: String },
      },
    ],

    ogImage: { type: String },
    twitterCard: {
      type: String,
      enum: ['summary', 'summary_large_image'],
    },
    canonicalUrl: { type: String },
    structuredData: { type: Object },

    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    shares: { type: Number, default: 0 },
    readTime: { type: Number, default: 0 },
    impressions: { type: Number, default: 0 },
    clickThroughRate: { type: Number },

    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    commentsEnabled: { type: Boolean, default: true },
    commentsCount: { type: Number, default: 0 },

    tableOfContents: [
      {
        id: { type: String },
        title: { type: String },
        level: { type: Number },
        anchor: { type: String },
      },
    ],

    version: { type: Number, default: 1 },
    editHistory: [
      {
        editedAt: { type: Date },
        editedBy: { type: String },
        changes: { type: String },
      },
    ],

    language: { type: String, default: 'en' },
    translations: [
      {
        language: { type: String },
        slug: { type: String },
        title: { type: String },
      },
    ],

    relatedPosts: [{ type: String }],
    series: {
      id: { type: String },
      name: { type: String },
      order: { type: Number },
    },
    newsletter: { type: Boolean, default: false },
    premium: { type: Boolean, default: false },
    downloadableContent: [
      {
        title: { type: String },
        url: { type: String },
        type: { type: String },
      },
    ],
  },
  { timestamps: true }
);

export const BlogPost =  mongoose.models.BlogPost || model<IBlogPost>('BlogPost', BlogPostSchema);
