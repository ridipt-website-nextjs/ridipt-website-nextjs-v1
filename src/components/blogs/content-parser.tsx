
'use client';
import React from 'react';
import { ContentParserProps, parseContent } from './blog-content.types';
import { HTMLContentRenderer } from './html-content-renderer';
import { MarkdownContentRenderer } from './md-content-renderer';

export const ContentParser: React.FC<ContentParserProps> = ({ content }) => {
  const { type, content: parsedContent } = parseContent(content);
  
  if (type === 'html') {
    return <HTMLContentRenderer content={parsedContent} />;
  }
  
  return <MarkdownContentRenderer content={parsedContent} />;
};
