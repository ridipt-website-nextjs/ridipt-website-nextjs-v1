export interface BlogPost {
  // Basic Information
  _id: string;
  title: string;
  slug: string;
  content: string; // HTML content instead of Markdown
  excerpt: string;
  // Meta Information
  metaTitle?: string;
  metaDescription?: string;
  keywords: string[];
  tags: string[];
  categories: string[];
  // Author Details
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
  // Publishing Details
  status: 'draft' | 'published' | 'archived' | 'scheduled';
  visibility: 'public' | 'private' | 'members-only';
  featured: boolean;
  pinned: boolean;
  publishedAt?: Date;
  scheduledAt?: Date;
  expiresAt?: Date;
  // Media
  featuredImage?: {
    url: string;
    alt: string;
    caption?: string;
    dimensions?: { width: number; height: number; };
  };
  gallery?: Array<{
    url: string;
    alt: string;
    caption?: string;
  }>;
  // SEO & Social
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  canonicalUrl?: string;
  schema?: object;
  // Analytics & Engagement
  views: number;
  likes: number;
  shares: number;
  readTime: number; // in minutes
  impressions: number;
  clickThroughRate?: number;
  // Comments System
  comments: Comment[];
  commentsEnabled: boolean;
  commentsCount: number;
  // Content Structure
  tableOfContents?: Array<{
    id: string;
    title: string;
    level: number;
    anchor: string;
  }>;
  // Versioning
  version: number;
  editHistory?: Array<{
    editedAt: Date;
    editedBy: string;
    changes: string;
  }>;
  // Localization
  language: string;
  translations?: Array<{
    language: string;
    slug: string;
    title: string;
  }>;
  // Timestamps
  createdAt: Date;
  updatedAt: Date;
  // Additional Features
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

interface Comment {
  _id: string;
  content: string;
  author: {
    name: string;
    email: string;
    avatar?: string;
    website?: string;
  };
  parentId?: string; // for nested comments
  replies?: Comment[];
  likes: number;
  status: 'approved' | 'pending' | 'spam' | 'rejected';
  createdAt: Date;
  updatedAt: Date;
  ipAddress?: string;
  userAgent?: string;
}

export const sampleBlogs: BlogPost[] = [
  // Tech Blog Post
  {
    _id: "66f8a1b2c3d4e5f6789abcde",
    title: "Next.js 15 की नई Features: App Router से Production तक",
    slug: "nextjs-15-new-features-app-router-production",
    content: `
      <h1>Next.js 15 की Complete Guide</h1>
      
      <p>Next.js 15 में कई revolutionary features आई हैं जो modern web development को और भी बेहतर बनाती हैं। इस comprehensive guide में हम सभी major updates को detail में explore करेंगे।</p>
      
      <h2>App Router की Enhanced Power</h2>
      <p>Next.js 15 में App Router को completely reimagined किया गया है। अब यह पहले से 40% faster है और development experience को significantly improve करता है।</p>
      
      <h3>Key Improvements in App Router</h3>
      <ul>
        <li><strong>Faster Rendering:</strong> Server Components में 40% performance boost</li>
        <li><strong>Better Caching:</strong> Intelligent caching mechanisms जो automatically optimize होती हैं</li>
        <li><strong>Improved DX:</strong> Developer experience के लिए better error messages और debugging tools</li>
        <li><strong>Enhanced Streaming:</strong> Progressive loading के लिए improved streaming support</li>
      </ul>
      
      <h2>Performance Optimizations</h2>
      <p>Next.js 15 में performance को लेकर major focus किया गया है:</p>
      
      <h3>Bundle Size Reduction</h3>
      <p>नई optimization techniques के साथ bundle size में 25% तक की कमी देखी गई है। यह خاص तौर पर mobile users के लिए beneficial है।</p>
      
      <pre><code class="language-javascript">
// Example: Automatic code splitting
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    &lt;Suspense fallback={&lt;div&gt;Loading...&lt;/div&gt;}&gt;
      &lt;HeavyComponent /&gt;
    &lt;/Suspense&gt;
  );
}
      </code></pre>
      
      <h3>Server Components Enhancement</h3>
      <p>React Server Components का integration और भी seamless हो गया है। अब आप easily server-side processing कर सकते हैं:</p>
      
      <pre><code class="language-tsx">
// Server Component example
async function BlogPost({ slug }: { slug: string }) {
  // This runs on the server
  const post = await fetchPost(slug);
  
  return (
    &lt;article&gt;
      &lt;h1&gt;{post.title}&lt;/h1&gt;
      &lt;p&gt;{post.content}&lt;/p&gt;
    &lt;/article&gt;
  );
}
      </code></pre>
      
      <h2>New Features और APIs</h2>
      
      <h3>Enhanced Image Optimization</h3>
      <p>Image component में नई features आई हैं जो loading performance को और भी बेहतर बनाती हैं।</p>
      
      <h3>Improved TypeScript Support</h3>
      <p>TypeScript integration को और भी robust बनाया गया है with better type inference और error reporting।</p>
      
      <h2>Migration Guide</h2>
      <p>अगर आप Next.js 14 से upgrade कर रहे हैं, तो यहां step-by-step migration process है:</p>
      
      <ol>
        <li>Dependencies को update करें</li>
        <li>Configuration files को check करें</li>
        <li>Deprecated APIs को replace करें</li>
        <li>Testing करें कि सब कुछ properly work कर रहा है</li>
      </ol>
      
      <blockquote>
        <p><strong>Pro Tip:</strong> Migration से पहले अपने application का complete backup ले लें और staging environment में पहले test करें।</p>
      </blockquote>
      
      <h2>Production Deployment Best Practices</h2>
      <p>Next.js 15 को production में deploy करते समय इन best practices को follow करें:</p>
      
      <ul>
        <li>Environment variables को properly configure करें</li>
        <li>Caching strategies को optimize करें</li>
        <li>Monitoring और analytics setup करें</li>
        <li>Performance metrics को track करें</li>
      </ul>
      
      <p>Next.js 15 एक game-changing release है जो modern web development को नई heights पर ले जाती है। इसकी advanced features और optimizations के साथ, आप faster, more efficient applications build कर सकते हैं।</p>
    `,
    excerpt: "Next.js 15 की latest features explore करें - App Router improvements से लेकर production optimizations तक। Complete guide with practical examples।",
    metaTitle: "Next.js 15 Features Guide | App Router & Performance Tips",
    metaDescription: "Complete guide to Next.js 15 new features, App Router improvements, and production optimization techniques for modern web apps.",
    keywords: ["nextjs", "react", "app-router", "web-development", "javascript"],
    tags: ["Next.js", "React", "Web Development", "JavaScript", "Tutorial"],
    categories: ["Technology", "Web Development", "Frontend"],
    author: {
      id: "author123",
      name: "Rahul Sharma",
      email: "rahul@example.com",
      bio: "Full-stack developer passionate about React and modern web technologies",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      socialLinks: {
        twitter: "@rahuldev",
        github: "rahuldev",
        linkedin: "rahul-sharma-dev"
      }
    },
    status: "published",
    visibility: "public",
    featured: true,
    pinned: false,
    publishedAt: new Date("2024-09-10T10:30:00Z"),
    featuredImage: {
      url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
      alt: "Next.js 15 Logo with modern web development icons",
      caption: "Next.js 15 brings exciting new features for developers",
      dimensions: { width: 800, height: 400 }
    },
    ogImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=630&fit=crop",
    twitterCard: "summary_large_image",
    views: 2450,
    likes: 156,
    shares: 34,
    readTime: 12,
    impressions: 12500,
    clickThroughRate: 19.6,
    comments: [
      {
        _id: "comment1",
        content: "Great article! App Router के बारे में detailed explanation बहुत helpful था।",
        author: {
          name: "Priya Singh",
          email: "priya@example.com",
          avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b002?w=150&h=150&fit=crop&crop=face"
        },
        likes: 12,
        status: "approved",
        createdAt: new Date("2024-09-11T14:20:00Z"),
        updatedAt: new Date("2024-09-11T14:20:00Z"),
        replies: [
          {
            _id: "reply1",
            content: "Agree! Especially the performance comparison section.",
            author: {
              name: "Amit Kumar",
              email: "amit@example.com",
              avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
            },
            likes: 3,
            status: "approved",
            createdAt: new Date("2024-09-11T15:45:00Z"),
            updatedAt: new Date("2024-09-11T15:45:00Z")
          }
        ]
      }
    ],
    commentsEnabled: true,
    commentsCount: 2,
    language: "hi-en",
    version: 1,
    createdAt: new Date("2024-09-10T09:00:00Z"),
    updatedAt: new Date("2024-09-10T10:30:00Z"),
    relatedPosts: ["66f8a1b2c3d4e5f6789abcdf", "66f8a1b2c3d4e5f6789abce0"],
    newsletter: true,
    premium: false
  },

  // Lifestyle Blog Post
  {
    _id: "66f8a1b2c3d4e5f6789abcdf",
    title: "Mumbai Street Food Guide: Hidden Gems You Must Try",
    slug: "mumbai-street-food-hidden-gems-guide",
    content: `
      <h1>Mumbai के Hidden Street Food Gems</h1>
      
      <p>Mumbai का street food culture विश्वभर में famous है, लेकिन कुछ hidden gems हैं जो सिर्फ locals ही जानते हैं। इस comprehensive guide में हम आपको उन secret spots के बारे में बताएंगे जहां authentic flavors और traditional recipes मिलती हैं।</p>
      
      <h2>Why Mumbai Street Food is Special</h2>
      <p>Mumbai की street food सिर्फ खाना नहीं है, यह एक cultural experience है। यहां different communities के flavors मिलते हैं और हर galli-nukkad पर कुछ नया taste करने को मिलता है।</p>
      
      <h2>Best Hidden Street Food Spots</h2>
      
      <h3>Dadar East - The Traditional Hub</h3>
      <p>Dadar East Mumbai की cultural heart माना जाता है और यहां के street food vendors generations से authentic recipes follow कर रहे हैं।</p>
      
      <h4>Mohammed Ali Road</h4>
      <ul>
        <li><strong>Famous Kebabs:</strong> Noor Mohammadi Hotel के mutton kebabs legendary हैं</li>
        <li><strong>Authentic Biryani:</strong> Minara Masjid के पास मिलने वाली biryani में real Hyderabadi flavors हैं</li>
        <li><strong>Sweet Treats:</strong> Ramzan के दौरान यहां की dates और sweets must-try हैं</li>
      </ul>
      
      <h4>Dadar Station Area</h4>
      <p>Station के बाहर मिलने वाला South Indian street food authentic है और prices भी reasonable हैं।</p>
      
      <h3>Bandra West - The Fusion Paradise</h3>
      <p>Bandra में traditional street food का modern twist मिलता है जो young crowd को बहुत पसंद आता है।</p>
      
      <h4>Hill Road</h4>
      <ul>
        <li><strong>Innovative Fusion Foods:</strong> Pizza dosa, cheese vada pav जैसे creative combinations</li>
        <li><strong>International Flavors:</strong> Mexican bhel, Chinese frankie जैसे fusion dishes</li>
        <li><strong>Health-Conscious Options:</strong> Grilled और baked versions भी available हैं</li>
      </ul>
      
      <h4>Linking Road</h4>
      <p>Shopping के साथ-साथ यहां street food का अलग ही maza है। Evening time में यहां की crowd और energy देखने layak है।</p>
      
      <h2>Seasonal Specialties</h2>
      
      <h3>Monsoon Delights</h3>
      <p>Mumbai में monsoon का season street food lovers के लिए सबसे best time है:</p>
      
      <ul>
        <li><strong>Bhutta (Corn):</strong> Marine Drive पर rain में भुना हुआ corn</li>
        <li><strong>Hot Pakodas:</strong> Juhu Beach के vendors के fresh pakodas</li>
        <li><strong>Kulfi:</strong> Chowpatty की traditional kulfi rain में भी popular है</li>
      </ul>
      
      <h3>Festival Foods</h3>
      <p>Different festivals के दौरान special street foods available होती हैं जो normal days में नहीं मिलतीं।</p>
      
      <h2>Local Tips for Food Enthusiasts</h2>
      
      <blockquote>
        <p><strong>Insider Secret:</strong> सबसे अच्छा taste evening 6-8 PM के बीच मिलता है जब सब कुछ fresh तैयार होता है।</p>
      </blockquote>
      
      <h3>Safety और Hygiene Tips</h3>
      <ol>
        <li>हमेशा busy stalls choose करें जहां turnover ज्यादा हो</li>
        <li>Fresh बना हुआ khana ही order करें</li>
        <li>पानी हमेशा sealed bottle का ही पिएं</li>
        <li>Local crowd को observe करें - जहां locals जाते हैं वहां quality अच्छी होती है</li>
      </ol>
      
      <h2>Price Guide</h2>
      <p>Mumbai street food की best बात यह है कि pocket-friendly prices में authentic flavors मिल जाते हैं:</p>
      
      <ul>
        <li><strong>Vada Pav:</strong> ₹15-25 per piece</li>
        <li><strong>Pav Bhaji:</strong> ₹60-100 per plate</li>
        <li><strong>Dosa:</strong> ₹40-80 depending on type</li>
        <li><strong>Bhel Puri:</strong> ₹30-50 per serving</li>
      </ul>
      
      <h2>Must-Try Combinations</h2>
      <p>कुछ classic combinations हैं जो आप miss नहीं कर सकते:</p>
      
      <ul>
        <li>Vada Pav + Cutting Chai</li>
        <li>Pav Bhaji + Butter Toast</li>
        <li>Dosa + Filter Coffee</li>
        <li>Bhel Puri + Fresh Lime Water</li>
      </ul>
      
      <p>Mumbai की street food culture एक ongoing journey है। हर visit में कुछ नया discover करने को मिलता है। इन hidden gems को explore करके आप real Mumbai का taste ले सकते हैं!</p>
    `,
    excerpt: "Discover Mumbai's best hidden street food spots with authentic flavors और local favorites जो tourists usually miss करते हैं। Complete guide with insider tips।",
    metaTitle: "Mumbai Street Food Guide | Hidden Gems & Local Favorites",
    metaDescription: "Explore Mumbai's hidden street food gems with our comprehensive guide to authentic local flavors and must-try dishes.",
    keywords: ["mumbai", "street-food", "food-guide", "travel", "local-cuisine"],
    tags: ["Food", "Mumbai", "Street Food", "Travel", "Local Guide"],
    categories: ["Food & Travel", "Lifestyle", "Local Guides"],
    author: {
      id: "author456",
      name: "Sneha Patel",
      email: "sneha@example.com",
      bio: "Food blogger and Mumbai local, exploring the city's culinary secrets",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      socialLinks: {
        instagram: "@mumbai_foodie_sneha",
        youtube: "SnehaEats"
      }
    },
    status: "published",
    visibility: "public",
    featured: false,
    pinned: true,
    publishedAt: new Date("2024-09-12T08:15:00Z"),
    featuredImage: {
      url: "https://images.unsplash.com/photo-1554978991-33ef7f31d658?w=800&h=400&fit=crop",
      alt: "Delicious Mumbai street food spread",
      caption: "Mumbai's vibrant street food culture",
      dimensions: { width: 800, height: 400 }
    },
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&h=400&fit=crop",
        alt: "Fresh Vada Pav",
        caption: "Classic Mumbai Vada Pav"
      },
      {
        url: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&h=400&fit=crop",
        alt: "Pav Bhaji plate",
        caption: "Authentic Pav Bhaji from street vendor"
      }
    ],
    ogImage: "https://images.unsplash.com/photo-1554978991-33ef7f31d658?w=1200&h=630&fit=crop",
    twitterCard: "summary_large_image",
    views: 1890,
    likes: 234,
    shares: 67,
    readTime: 10,
    impressions: 8900,
    clickThroughRate: 21.2,
    comments: [
      {
        _id: "comment2",
        content: "Yaar Mohammed Ali Road wali tip bilkul sahi hai! Thanks for sharing these hidden gems.",
        author: {
          name: "Arjun Mehta",
          email: "arjun@example.com",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
        },
        likes: 8,
        status: "approved",
        createdAt: new Date("2024-09-12T12:30:00Z"),
        updatedAt: new Date("2024-09-12T12:30:00Z")
      }
    ],
    commentsEnabled: true,
    commentsCount: 1,
    language: "hi-en",
    version: 2,
    editHistory: [
      {
        editedAt: new Date("2024-09-12T10:00:00Z"),
        editedBy: "author456",
        changes: "Added gallery images and updated Bandra section with more details"
      }
    ],
    createdAt: new Date("2024-09-11T16:30:00Z"),
    updatedAt: new Date("2024-09-12T10:00:00Z"),
    newsletter: false,
    premium: false
  },

  // Tutorial Blog Post
  {
    _id: "66f8a1b2c3d4e5f6789abce0",
    title: "TypeScript Generics: Advanced Patterns for Beginners",
    slug: "typescript-generics-advanced-patterns-beginners",
    content: `
      <h1>TypeScript Generics Mastery</h1>
      
      <p>Generics TypeScript का सबसे powerful feature है जो code को reusable और type-safe बनाता है। इस comprehensive tutorial में हम basic concepts से लेकर advanced patterns तक सब कुछ cover करेंगे।</p>
      
      <h2>What are Generics?</h2>
      <p>Generics आपको flexible और reusable code लिखने की सुविधा देते हैं जो different types के साथ काम कर सकता है, बिना type safety को compromise किए।</p>
      
      <h2>Basic Generic Syntax</h2>
      <p>सबसे पहले basic syntax को समझते हैं:</p>
      
      <pre><code class="language-typescript">
// Basic generic function
function identity&lt;T&gt;(arg: T): T {
  return arg;
}

// Usage examples
let output1 = identity&lt;string&gt;("Hello");
let output2 = identity&lt;number&gt;(42);
let output3 = identity("World"); // Type inference
      </code></pre>
      
      <h3>Generic Interfaces</h3>
      <p>Interfaces में भी generics का use कर सकते हैं:</p>
      
      <pre><code class="language-typescript">
interface GenericIdentityFn&lt;T&gt; {
  (arg: T): T;
}

function identity&lt;T&gt;(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn&lt;number&gt; = identity;
      </code></pre>
      
      <h2>Advanced Generic Patterns</h2>
      
      <h3>Generic Constraints</h3>
      <p>कभी-कभी आप generic type को constrain करना चाहते हैं:</p>
      
      <pre><code class="language-typescript">
interface Lengthwise {
  length: number;
}

function loggingIdentity&lt;T extends Lengthwise&gt;(arg: T): T {
  console.log(arg.length); // Now we can access .length
  return arg;
}

// Usage
loggingIdentity("Hello"); // ✓ Works
loggingIdentity([1, 2, 3]); // ✓ Works
loggingIdentity(42); // ✗ Error: number doesn't have length
      </code></pre>
      
      <h3>Using Type Parameters in Generic Constraints</h3>
      <p>एक type parameter को दूसरे type parameter से constrain कर सकते हैं:</p>
      
      <pre><code class="language-typescript">
function getProperty&lt;T, K extends keyof T&gt;(obj: T, key: K): T[K] {
  return obj[key];
}

let person = { name: "John", age: 30, city: "Mumbai" };

let name = getProperty(person, "name"); // Type: string
let age = getProperty(person, "age");   // Type: number
// let invalid = getProperty(person, "salary"); // ✗ Error
      </code></pre>
      
      <h2>Conditional Types</h2>
      <p>TypeScript 2.8 में conditional types introduce हुए जो बहुत powerful हैं:</p>
      
      <pre><code class="language-typescript">
type NonNullable&lt;T&gt; = T extends null | undefined ? never : T;

type Example1 = NonNullable&lt;string | null&gt;; // string
type Example2 = NonNullable&lt;number | undefined&gt;; // number
type Example3 = NonNullable&lt;string | null | undefined&gt;; // string
      </code></pre>
      
      <h3>Distributive Conditional Types</h3>
      <p>Union types के साथ conditional types distribute हो जाते हैं:</p>
      
      <pre><code class="language-typescript">
type ToArray&lt;T&gt; = T extends any ? T[] : never;

type StrArrOrNumArr = ToArray&lt;string | number&gt;; // string[] | number[]
      </code></pre>
      
      <h2>Mapped Types</h2>
      <p>Mapped types existing types को transform करने के लिए use होते हैं:</p>
      
      <pre><code class="language-typescript">
type Readonly&lt;T&gt; = {
  readonly [P in keyof T]: T[P];
};

type Partial&lt;T&gt; = {
  [P in keyof T]?: T[P];
};

interface User {
  id: number;
  name: string;
  email: string;
}

type ReadonlyUser = Readonly&lt;User&gt;;
type PartialUser = Partial&lt;User&gt;;
      </code></pre>
      
      <h2>Utility Types</h2>
      <p>TypeScript में built-in utility types हैं जो common patterns को simplify करते हैं:</p>
      
      <h3>Pick और Omit</h3>
      <pre><code class="language-typescript">
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type PublicUser = Pick&lt;User, 'id' | 'name' | 'email'&gt;;
type UserWithoutPassword = Omit&lt;User, 'password'&gt;;
      </code></pre>
      
      <h3>Record Type</h3>
      <pre><code class="language-typescript">
type Roles = 'admin' | 'user' | 'guest';
type Permissions = Record&lt;Roles, string[]&gt;;

const userPermissions: Permissions = {
  admin: ['read', 'write', 'delete'],
  user: ['read', 'write'],
  guest: ['read']
};
      </code></pre>
      
      <h2>Real-World Examples</h2>
      
      <h3>API Response Handler</h3>
      <pre><code class="language-typescript">
interface ApiResponse&lt;T&gt; {
  data: T;
  message: string;
  success: boolean;
  timestamp: number;
}

async function fetchUser(id: number): Promise&lt;ApiResponse&lt;User&gt;&gt; {
  const response = await fetch(\`/api/users/\${id}\`);
  return response.json();
}

async function fetchUsers(): Promise&lt;ApiResponse&lt;User[]&gt;&gt; {
  const response = await fetch('/api/users');
  return response.json();
}
      </code></pre>
      
      <h3>Generic Repository Pattern</h3>
      <pre><code class="language-typescript">
interface Repository&lt;T&gt; {
  findById(id: string): Promise&lt;T | null&gt;;
  findAll(): Promise&lt;T[]&gt;;
  create(item: Omit&lt;T, 'id'&gt;): Promise&lt;T&gt;;
  update(id: string, item: Partial&lt;T&gt;): Promise&lt;T&gt;;
  delete(id: string): Promise&lt;void&gt;;
}

class UserRepository implements Repository&lt;User&gt; {
  async findById(id: string): Promise&lt;User | null&gt; {
    // Implementation
  }
  
  // Other methods...
}
      </code></pre>
      
      <h2>Best Practices</h2>
      
      <h3>1. Use Meaningful Generic Names</h3>
      <p>Single letters (T, U, V) ठीक हैं, लेकिन descriptive names बेहतर हैं:</p>
      
      <pre><code class="language-typescript">
// Good
interface ApiClient&lt;TRequest, TResponse&gt; {
  send(request: TRequest): Promise&lt;TResponse&gt;;
}

// Better
interface ApiClient&lt;RequestType, ResponseType&gt; {
  send(request: RequestType): Promise&lt;ResponseType&gt;;
}
      </code></pre>
      
      <h3>2. Provide Default Types</h3>
      <pre><code class="language-typescript">
interface State&lt;T = any&gt; {
  data: T;
  loading: boolean;
  error: string | null;
}

// Usage
const userState: State&lt;User&gt; = { /* ... */ };
const defaultState: State = { /* ... */ }; // T defaults to any
      </code></pre>
      
      <h3>3. Use Generic Constraints Wisely</h3>
      <p>Over-constraining से बचें, but necessary constraints जरूर लगाएं।</p>
      
      <h2>Common Pitfalls</h2>
      
      <ul>
        <li><strong>Type Erasure:</strong> Runtime पर generic types available नहीं होते</li>
        <li><strong>Complex Constraints:</strong> Too complex constraints readability को harm करते हैं</li>
        <li><strong>Overuse:</strong> हर जगह generics use करना जरूरी नहीं है</li>
      </ul>
      
      <blockquote>
        <p><strong>Pro Tip:</strong> Generics powerful tool हैं, लेकिन इन्हें judiciously use करें। Simplicity और type safety के बीच balance maintain करें।</p>
      </blockquote>
      
      <p>TypeScript Generics master करना time लेता है, लेकिन एक बार समझ जाने के बाद आप much more flexible और robust code लिख सकते हैं।</p>
    `,
    excerpt: "Master TypeScript Generics with practical examples और advanced patterns explained in simple terms। Complete guide from basics to advanced concepts।",
    metaTitle: "TypeScript Generics Tutorial | Advanced Patterns Made Simple",
    metaDescription: "Learn TypeScript Generics from basics to advanced patterns with practical examples and real-world use cases.",
    keywords: ["typescript", "generics", "programming", "javascript", "tutorial"],
    tags: ["TypeScript", "Programming", "Tutorial", "JavaScript", "Development"],
    categories: ["Programming", "TypeScript", "Education"],
    author: {
      id: "author789",
      name: "Dev Kumar",
      email: "dev@example.com",
      bio: "Senior TypeScript developer and technical writer",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
      socialLinks: {
        github: "devkumar",
        twitter: "@devkumar_ts"
      }
    },
    status: "published",
    visibility: "members-only",
    featured: true,
    pinned: false,
    publishedAt: new Date("2024-09-13T14:00:00Z"),
    featuredImage: {
      url: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
      alt: "TypeScript code with generic syntax highlighting",
      caption: "TypeScript Generics in action",
      dimensions: { width: 800, height: 400 }
    },
    ogImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=630&fit=crop",
    twitterCard: "summary_large_image",
    canonicalUrl: "https://yourblog.com/blog/typescript-generics-advanced-patterns-beginners",
    views: 3200,
    likes: 187,
    shares: 45,
    readTime: 15,
    impressions: 15600,
    clickThroughRate: 20.5,
    tableOfContents: [
      {
        id: "basic-syntax",
        title: "Basic Generic Syntax",
        level: 2,
        anchor: "#basic-syntax"
      },
      {
        id: "advanced-patterns",
        title: "Advanced Patterns",
        level: 2,
        anchor: "#advanced-patterns"
      },
      {
        id: "conditional-types",
        title: "Conditional Types",
        level: 3,
        anchor: "#conditional-types"
      }
    ],
    comments: [],
    commentsEnabled: true,
    commentsCount: 0,
    premium: true,
    downloadableContent: [
      {
        title: "TypeScript Generics Cheat Sheet",
        url: "/downloads/ts-generics-cheat-sheet.pdf",
        type: "pdf"
      }
    ],
    language: "hi-en",
    version: 1,
    createdAt: new Date("2024-09-13T11:30:00Z"),
    updatedAt: new Date("2024-09-13T14:00:00Z"),
    newsletter: true
  }
];
