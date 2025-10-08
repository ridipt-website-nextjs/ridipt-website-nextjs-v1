'use client';

import { Share2 } from 'lucide-react';

export function ShareInteractive({ 
  postUrl, 
  title 
}: { 
  postUrl: string; 
  title: string; 
}) {
  const handleShare = () => {
    if (typeof window !== 'undefined' && 'navigator' in window && 'share' in navigator) {
      navigator.share({
        title: title,
        url: postUrl,
      }).catch(console.error);
    } else {
      // Fallback to copy URL
      if (typeof window !== 'undefined') {
        navigator.clipboard.writeText(postUrl).then(() => {
          alert('Link copied to clipboard!');
        }).catch(() => {
          alert('Unable to share. Please copy the URL manually.');
        });
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      className="w-9 h-9 bg-gray-50 hover:bg-blue-50 dark:bg-gray-900 dark:hover:bg-blue-950 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
    >
      <Share2 className="w-4 h-4" />
    </button>
  );
}


import { Copy } from 'lucide-react';
import { useState } from 'react';

export function CopyLinkInteractive({ postUrl }: { postUrl: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(postUrl).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }).catch(() => {
        alert('Unable to copy link');
      });
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="w-full flex items-center space-x-3 p-3 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-xl transition-colors group"
    >
      <Copy className="w-5 h-5" />
      <span className="font-medium">
        {copied ? 'Copied!' : 'Copy Link'}
      </span>
    </button>
  );
}
