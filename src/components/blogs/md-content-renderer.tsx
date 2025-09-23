// components/blog-content/MarkdownContentRenderer.tsx
'use client';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import Link from 'next/link';
import { CodeBlockHeader, CustomImage } from './blog-copy-btn';


interface MarkdownContentRendererProps {
  content: string;
}

export const MarkdownContentRenderer: React.FC<MarkdownContentRendererProps> = ({ content }) => {
  // Custom markdown components
  const MarkdownComponents = {
    // Custom code block component
    code({ node, inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || '');
      const language = match ? match[1] : 'text';
      const codeString = String(children).replace(/\n$/, '');

      return !inline && match ? (
        <div className="markdown-code-block-wrapper">
          <CodeBlockHeader language={language} code={codeString} />
          <SyntaxHighlighter
            style={oneDark}
            language={language}
            PreTag="div"
            className="markdown-syntax-highlighter"
            showLineNumbers={false}
            wrapLines={true}
            customStyle={{
              margin: 0,
              borderRadius: 0,
              background: 'transparent'
            }}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      ) : (
        <code 
          className="inline-code" 
          {...props}
        >
          {children}
        </code>
      );
    },

    // Custom image component
    img({ src, alt, ...props }: any) {
      return (
        <CustomImage
          src={src}
          alt={alt}
          className="markdown-image-wrapper"
        />
      );
    },

    // Custom link component
    a({ href, children, ...props }: any) {
      return (
        <Link
          href={href || '#'}
          className="text-violet-600 dark:text-violet-400 hover:underline"
          target={href?.startsWith('http') ? '_blank' : undefined}
          rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
          {...props}
        >
          {children}
        </Link>
      );
    },

    // Enhanced list items
    ul({ children, ...props }: any) {
      return <ul className="enhanced-bullet-list" {...props}>{children}</ul>;
    },
    ol({ children, ...props }: any) {
      return <ol className="enhanced-ordered-list" {...props}>{children}</ol>;
    },
    li({ children, ...props }: any) {
      return <li className="enhanced-list-item" {...props}>{children}</li>;
    },

    // Enhanced blockquote
    blockquote({ children, ...props }: any) {
      return (
        <blockquote 
          className="border-l-4 border-violet-500 pl-4 py-2 italic text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900 rounded-r-md"
          {...props}
        >
          {children}
        </blockquote>
      );
    }
  };

  return (
    <div className="markdown-content-wrapper">
      <ReactMarkdown
        // className="prose prose-2xl max-w-none dark:prose-invert prose-headings:font-black prose-headings:text-black dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-xl prose-strong:text-black dark:prose-strong:text-white"
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={MarkdownComponents}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
