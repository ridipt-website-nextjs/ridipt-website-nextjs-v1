// types/blog-content.types.ts
export interface ContentParserProps {
  content: string;
}

export interface CodeBlockProps {
  language: string;
  code: string;
  showLineNumbers?: boolean;
}

export interface CopyButtonProps {
  code: string;
  className?: string;
}

// utils/language-helpers.ts
export const getLanguageIcon = (language: string): string => {
  const icons: Record<string, string> = {
    javascript: '🟨',
    typescript: '🔷',
    python: '🐍',
    java: '☕',
    cpp: '⚡',
    css: '🎨',
    html: '🌐',
    json: '📋',
    php: '🐘',
    sql: '🗃️',
    bash: '💻',
    shell: '💻',
    go: '🐹',
    rust: '🦀',
    swift: '🍎',
    kotlin: '🎯',
    default: '📝'
  };
  
  return icons[language] || icons.default;
};

export const getLanguageName = (language: string): string => {
  const names: Record<string, string> = {
    javascript: 'JavaScript',
    typescript: 'TypeScript',
    python: 'Python',
    java: 'Java',
    cpp: 'C++',
    css: 'CSS',
    html: 'HTML',
    json: 'JSON',
    php: 'PHP',
    sql: 'SQL',
    bash: 'Bash',
    shell: 'Shell',
    go: 'Go',
    rust: 'Rust',
    swift: 'Swift',
    kotlin: 'Kotlin'
  };
  
  return names[language] || language.toUpperCase();
};

// utils/content-parser.utils.ts
export interface ParsedContent {
  type: 'html' | 'markdown';
  content: string;
}

export const parseContent = (rawContent: string): ParsedContent => {
  if (!rawContent) return { type: 'html', content: '<p>Content not available</p>' };
  
  // Check if content starts with format indicator
  if (rawContent.startsWith('[html]')) {
    return {
      type: 'html',
      content: rawContent.replace(/^\[html\]\s*/, '').trim()
    };
  } else if (rawContent.startsWith('[md]')) {
    return {
      type: 'markdown',
      content: rawContent.replace(/^\[md\]\s*/, '').trim()
    };
  }
  
  // Default to HTML if no indicator
  return {
    type: 'html',
    content: rawContent
  };
};
