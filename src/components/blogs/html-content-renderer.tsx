// components/blog-content/HTMLContentRenderer.tsx
'use client';
import React, { useMemo } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

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
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyButton } from './blog-copy-btn';
import { getLanguageIcon, getLanguageName } from './blog-content.types';

// Register languages
SyntaxHighlighter.registerLanguage('javascript', javascript);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('python', python);
SyntaxHighlighter.registerLanguage('java', java);
SyntaxHighlighter.registerLanguage('cpp', cpp);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('bash', bash);
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
    <div className="code-block-wrapper">
      <div className="code-block-header">
        <div className="code-block-language">
          <span className="language-icon">{getLanguageIcon(language)}</span>
          <span className="language-name">{getLanguageName(language)}</span>
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
            background: 'transparent',
            fontSize: '14px',
            lineHeight: '1.6',
            padding: '20px',
            fontFamily: '"JetBrains Mono", "Fira Code", "SF Mono", Consolas, monospace'
          }}
          showLineNumbers={false}
          wrapLines={true}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export const HTMLContentRenderer: React.FC<HTMLContentRendererProps> = ({ content }) => {
  // Parse and extract code blocks from HTML content
  const { processedContent, codeBlocks } = useMemo(() => {
    const blocks: CodeBlock[] = [];
    let index = 0;
    
    const processed = content.replace(
      /<pre class="tiptap-code-block"><code class="language-(\w+)">(.*?)<\/code><\/pre>/gs,
      (match, language, code) => {
        // Decode HTML entities
        const decodedCode = code
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&amp;/g, '&')
          .replace(/&quot;/g, '"')
          .replace(/&#x27;/g, "'");

        const blockId = `code-block-${index++}`;
        blocks.push({
          id: blockId,
          language,
          code: decodedCode
        });

        return `<div data-code-block="${blockId}"></div>`;
      }
    )
    // Style other TipTap elements
    .replace(/class="tiptap-bullet-list"/g, 'class="enhanced-bullet-list"')
    .replace(/class="tiptap-ordered-list"/g, 'class="enhanced-ordered-list"')
    .replace(/class="tiptap-list-item"/g, 'class="enhanced-list-item"');

    return { processedContent: processed, codeBlocks: blocks };
  }, [content]);

  // Render content with React components
  const renderContentWithCodeBlocks = (htmlContent: string) => {
    const parts = htmlContent.split(/(<div data-code-block="[^"]+"><\/div>)/g);
    
    return parts.map((part, index) => {
      const codeBlockMatch = part.match(/data-code-block="([^"]+)"/);
      
      if (codeBlockMatch) {
        const blockId = codeBlockMatch[1];
        const codeBlock = codeBlocks.find(block => block.id === blockId);
        
        if (codeBlock) {
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
      
      // Regular HTML content
      return part ? (
        <div
          key={index}
          dangerouslySetInnerHTML={{ __html: part }}
        />
      ) : null;
    });
  };

  return (
    <div className="html-content-wrapper">
      <div className="prose prose-2xl max-w-none dark:prose-invert prose-headings:font-black prose-headings:text-black dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-xl prose-strong:text-black dark:prose-strong:text-white prose-a:text-violet-600 dark:prose-a:text-violet-400 prose-a:no-underline hover:prose-a:underline prose-code:bg-gray-100 dark:prose-code:bg-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-violet-600 dark:prose-code:text-violet-400">
        {renderContentWithCodeBlocks(processedContent)}
      </div>
    </div>
  );
};
