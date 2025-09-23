// components/shared/CopyButton.tsx
'use client';
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export const CopyButton: React.FC<CopyButtonProps> = ({ code, className = "" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-300 hover:text-white bg-gray-700 hover:bg-gray-600 rounded-md transition-all duration-200 ${className}`}
    >
      {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
};

interface CodeBlockHeaderProps {
  language: string;
  code: string;
}

export const CodeBlockHeader: React.FC<CodeBlockHeaderProps> = ({ language, code }) => {
  return (
    <div className="code-block-header">
      <div className="code-block-language">
        <span className="language-icon">{getLanguageIcon(language)}</span>
        <span className="language-name">{getLanguageName(language)}</span>
      </div>
      <CopyButton code={code} />
    </div>
  );
};

// components/shared/CustomImage.tsx
import Image from 'next/image';
import { CopyButtonProps, getLanguageIcon, getLanguageName } from './blog-content.types';

interface CustomImageProps {
  src: string;
  alt?: string;
  caption?: string;
  className?: string;
}

export const CustomImage: React.FC<CustomImageProps> = ({ 
  src, 
  alt = 'Image', 
  caption,
  className = ""
}) => {
  return (
    <div className={`image-wrapper ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={800}
        height={400}
        className="rounded-lg shadow-lg"
        style={{ width: '100%', height: 'auto' }}
      />
      {(caption || alt) && (
        <p className="text-center text-muted-foreground text-sm mt-2 italic">
          {caption || alt}
        </p>
      )}
    </div>
  );
};
