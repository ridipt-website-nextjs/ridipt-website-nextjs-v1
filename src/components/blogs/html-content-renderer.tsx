// components/blog-content/HTMLContentRenderer.tsx
'use client';
import React, { useMemo } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

// Import only needed languages to reduce bundle size
import javascript from 'react-syntax-highlighter/dist/cjs/languages/hljs/javascript';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/hljs/typescript';
import python from 'react-syntax-highlighter/dist/cjs/languages/hljs/python';
import java from 'react-syntax-highlighter/dist/cjs/languages/hljs/java';
import cpp from 'react-syntax-highlighter/dist/cjs/languages/hljs/cpp';
import css from 'react-syntax-highlighter/dist/cjs/languages/hljs/css';
import json from 'react-syntax-highlighter/dist/cjs/languages/hljs/json';
import bash from 'react-syntax-highlighter/dist/cjs/languages/hljs/bash';
import sql from 'react-syntax-highlighter/dist/cjs/languages/hljs/sql';
import { CopyButton } from './blog-copy-btn';
import { getLanguageIcon, getLanguageName } from './blog-content.types';

// Register languages
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('js', javascript);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('ts', typescript);
SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('py', python);
SyntaxHighlighter.registerLanguage('java', java);
SyntaxHighlighter.registerLanguage('cpp', cpp);
SyntaxHighlighter.registerLanguage('c++', cpp);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('shell', bash);
SyntaxHighlighter.registerLanguage('sql', sql);

interface HTMLContentRendererProps {
  content: string;
}

interface CodeBlock {
  id: string;
  language: string;
  code: string;
}

// Custom Code Block Component
const CodeBlockRenderer: React.FC<CodeBlock> = ({ language, code }) => {
  return (
    <div className="code-block-wrapper relative mb-8 rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 shadow-2xl">
      <div className="code-block-header flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
        <div className="code-block-language flex items-center space-x-2">
          <span className="language-icon text-lg">{getLanguageIcon(language)}</span>
          <span className="language-name text-gray-200 font-medium text-sm">
            {getLanguageName(language)}
          </span>
        </div>
        <CopyButton code={code} />
      </div>
      <div className="code-content">
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          customStyle={{
            margin: 0,
            borderRadius: 0,
            background: 'rgb(17, 24, 39)', // gray-900
            fontSize: '14px',
            lineHeight: '1.6',
            padding: '24px',
            fontFamily: '"JetBrains Mono", "Fira Code", "SF Mono", Consolas, monospace'
          }}
          showLineNumbers={true}
          lineNumberStyle={{
            color: 'rgb(107, 114, 126)', // gray-500
            paddingRight: '16px',
            minWidth: '2.5em'
          }}
          wrapLines={true}
          wrapLongLines={true}
        >
          {code.trim()}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export const HTMLContentRenderer: React.FC<HTMLContentRendererProps> = ({ content }) => {
  // Parse and extract code blocks from HTML content
  const { processedContent, codeBlocks } = useMemo(() => {
    console.log('Original content:', content); // Debug log
    
    const blocks: CodeBlock[] = [];
    let index = 0;
    
    // Fix the regex pattern to properly match tiptap code blocks [web:59]
    const processed = content.replace(
      /<pre[^>]*class="[^"]*tiptap-code-block[^"]*"[^>]*><code[^>]*class="language-(\w+)"[^>]*>([\s\S]*?)<\/code><\/pre>/g,
      (match, language, code) => {
        console.log('Found code block:', { language, codePreview: code.substring(0, 100) }); // Debug log
        
        // Decode HTML entities properly [web:60]
        const decodedCode = code
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&amp;/g, '&')
          .replace(/&quot;/g, '"')
          .replace(/&#x27;/g, "'")
          .replace(/&#039;/g, "'")
          .replace(/&nbsp;/g, ' ')
          .trim();

        const blockId = `code-block-${index++}`;
        blocks.push({
          id: blockId,
          language: language.toLowerCase(),
          code: decodedCode
        });

        return `<div data-code-block="${blockId}" class="code-block-placeholder"></div>`;
      }
    );

    console.log('Found code blocks:', blocks.length); // Debug log
    console.log('Code blocks:', blocks); // Debug log

    return { processedContent: processed, codeBlocks: blocks };
  }, [content]);

  // Render content with React components
  const renderContentWithCodeBlocks = (htmlContent: string) => {
    // Split by code block placeholders
    const parts = htmlContent.split(/(<div data-code-block="[^"]+" class="code-block-placeholder"><\/div>)/g);
    
    return parts.map((part, index) => {
      const codeBlockMatch = part.match(/data-code-block="([^"]+)"/);
      
      if (codeBlockMatch) {
        const blockId = codeBlockMatch[1];
        const codeBlock = codeBlocks.find(block => block.id === blockId);
        
        if (codeBlock) {
          console.log('Rendering code block:', codeBlock.id); // Debug log
          return (
            <CodeBlockRenderer
              key={blockId}
              id={codeBlock.id}
              language={codeBlock.language}
              code={codeBlock.code}
            />
          );
        }
      }
      
      // Regular HTML content - clean it up
      if (part && !codeBlockMatch) {
        // Remove empty paragraphs and clean up
        const cleanPart = part
          .replace(/<p[^>]*>\s*<\/p>/g, '') // Remove empty paragraphs
          .replace(/\s+/g, ' ') // Normalize whitespace
          .trim();
        
        if (cleanPart) {
          return (
            <div
              key={index}
              dangerouslySetInnerHTML={{ __html: cleanPart }}
            />
          );
        }
      }
      
      return null;
    }).filter(Boolean); // Remove null/empty elements
  };

  return (
    <div className="html-content-wrapper">
      <div className="prose prose-2xl max-w-none dark:prose-invert 
        prose-headings:font-black prose-headings:text-black dark:prose-headings:text-white 
        prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-xl 
        prose-strong:text-black dark:prose-strong:text-white 
        prose-a:text-violet-600 dark:prose-a:text-violet-400 prose-a:no-underline hover:prose-a:underline 
        prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-violet-600 dark:prose-code:text-violet-400
        prose-ul:list-disc prose-ol:list-decimal prose-li:marker:text-gray-500 dark:prose-li:marker:text-gray-400
        prose-img:rounded-xl prose-img:shadow-lg prose-img:border prose-img:border-gray-200 dark:prose-img:border-gray-700">
        {renderContentWithCodeBlocks(processedContent)}
      </div>
    </div>
  );
};
