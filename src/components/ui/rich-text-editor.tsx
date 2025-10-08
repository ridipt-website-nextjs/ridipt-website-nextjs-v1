'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useEditor, EditorContent, ReactNodeViewRenderer, Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { Markdown } from 'tiptap-markdown';
import { NodeViewWrapper } from '@tiptap/react';
import FontFamily from '@tiptap/extension-font-family';
import Color from '@tiptap/extension-color';
import Highlight from '@tiptap/extension-highlight';
import Heading from '@tiptap/extension-heading';
import Paragraph from '@tiptap/extension-paragraph';
import Blockquote from '@tiptap/extension-blockquote';
import { X, Palette, Type, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from 'lucide-react';
import { mergeAttributes, Node, Mark } from '@tiptap/core';
import { TextStyle } from '@tiptap/extension-text-style';

// Fixed lowlight imports
import { createLowlight } from 'lowlight';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import python from 'highlight.js/lib/languages/python';
import java from 'highlight.js/lib/languages/java';
import cpp from 'highlight.js/lib/languages/cpp';
import css from 'highlight.js/lib/languages/css';
import xml from 'highlight.js/lib/languages/xml';
import json from 'highlight.js/lib/languages/json';
import php from 'highlight.js/lib/languages/php';
import sql from 'highlight.js/lib/languages/sql';
import bash from 'highlight.js/lib/languages/bash';
import go from 'highlight.js/lib/languages/go';
import rust from 'highlight.js/lib/languages/rust';
import swift from 'highlight.js/lib/languages/swift';
import kotlin from 'highlight.js/lib/languages/kotlin';

// ✅ SHOWDOWN IMPORT - ONLY ONE PACKAGE NEEDED
import showdown from 'showdown';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Toggle } from '@/components/ui/toggle';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
    Bold, Italic, Underline, Strikethrough, Code, Code2,
    List, ListOrdered, Quote, Undo, Redo,
    Image as ImageIcon, Link as LinkIcon, Upload, Globe,
    Highlighter,
} from 'lucide-react';

// TypeScript interfaces (same as before)
interface MarkdownStorage {
    getMarkdown: () => string;
    options: any;
}

interface CustomEditorStorage {
    markdown?: MarkdownStorage;
}

interface RichTextEditorProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

interface CustomImageOptions {
    HTMLAttributes: Record<string, any>;
    allowBase64: boolean;
    inline: boolean;
}

interface HeadingOptions {
    levels: number[];
    HTMLAttributes: Record<string, any>;
}

interface InlineTextStyleOptions {
    types: string[];
}

interface TabsProps {
    defaultValue: string;
    children: React.ReactNode;
}

interface TabsListProps {
    children: React.ReactNode;
    activeTab?: string;
    setActiveTab?: (value: string) => void;
}

interface TabsTriggerProps {
    value: string;
    children: React.ReactNode;
    activeTab?: string;
    setActiveTab?: (value: string) => void;
}

interface TabsContentProps {
    value: string;
    children: React.ReactNode;
    activeTab?: string;
}

// ✅ SHOWDOWN CONFIGURATION - BIDIRECTIONAL CONVERSION
const showdownConverter = new showdown.Converter({
    tables: true,
    strikethrough: true,
    tasklists: true,
    ghCodeBlocks: true,
    simplifiedAutoLink: true,
    literalMidWordUnderscores: true,
    smartIndentationFix: true,
    disableForced4SpacesIndentedSublists: true,
    parseImgDimensions: true,
    excludeTrailingPunctuationFromURLs: true,
    openLinksInNewWindow: false,
    backslashEscapesHTMLTags: false
});

// ✅ SIMPLIFIED CONVERSION FUNCTIONS - ONLY SHOWDOWN
const htmlToMarkdown = (html: string): string => {
    try {
        // Clean up the HTML first to remove problematic content
        const cleanedHtml = html
            .replace(/<strong[^>]*>\s*\*?\*?\s*<\/strong>/gi, '') // Remove empty strong tags
            .replace(/<b[^>]*>\s*\*?\*?\s*<\/b>/gi, '') // Remove empty b tags
            .replace(/\*{3,}/g, '**') // Fix multiple asterisks
            .trim();

        // ✅ Use Showdown's bidirectional capability
        const markdown = showdownConverter.makeMarkdown(cleanedHtml);
        console.log('✅ HTML to Markdown converted using Showdown:', markdown.substring(0, 100) + '...');
        return markdown;
    } catch (error) {
        console.error('❌ HTML to Markdown conversion error:', error);
        return html; // Return original if conversion fails
    }
};

const markdownToHtml = (markdown: string): string => {
    try {
        // ✅ Use Showdown's standard HTML conversion
        let htmlContent = showdownConverter.makeHtml(markdown);

        // Add inline styles for better display in the editor
        htmlContent = htmlContent
            .replace(/<h1>/g, '<h1 style="font-size: 2rem; font-weight: 700; line-height: 1.2; margin: 1.5rem 0 1rem 0; color: inherit;">')
            .replace(/<h2>/g, '<h2 style="font-size: 1.5rem; font-weight: 600; line-height: 1.3; margin: 1.25rem 0 0.75rem 0; color: inherit;">')
            .replace(/<h3>/g, '<h3 style="font-size: 1.25rem; font-weight: 600; line-height: 1.4; margin: 1rem 0 0.5rem 0; color: inherit;">')
            .replace(/<h4>/g, '<h4 style="font-size: 1.125rem; font-weight: 500; line-height: 1.4; margin: 0.75rem 0 0.5rem 0; color: inherit;">')
            .replace(/<h5>/g, '<h5 style="font-size: 1rem; font-weight: 500; line-height: 1.5; margin: 0.5rem 0 0.25rem 0; color: inherit;">')
            .replace(/<h6>/g, '<h6 style="font-size: 0.875rem; font-weight: 500; line-height: 1.5; margin: 0.5rem 0 0.25rem 0; text-transform: uppercase; letter-spacing: 0.05em; color: inherit;">')
            .replace(/<p>/g, '<p style="font-size: 1rem; line-height: 1.7; margin: 1rem 0; color: inherit;">')
            .replace(/<ul>/g, '<ul style="margin: 1rem 0; padding-left: 1.5rem; list-style-type: disc;">')
            .replace(/<ol>/g, '<ol style="margin: 1rem 0; padding-left: 1.5rem; list-style-type: decimal;">')
            .replace(/<li>/g, '<li style="margin: 0.5rem 0; line-height: 1.6;">')
            .replace(/<blockquote>/g, '<blockquote style="margin: 1.5rem 0; padding: 1rem 1.5rem; border-left: 4px solid #0066cc; background-color: rgba(0, 102, 204, 0.05); font-style: italic;">')
            .replace(/<a /g, '<a style="color: #0066cc; text-decoration: none; border-bottom: 1px solid transparent; transition: border-color 0.2s;" ')
            .replace(/<code>/g, '<code style="background: #f1f5f9; color: #334155; padding: 0.125rem 0.25rem; border-radius: 0.25rem; font-family: ui-monospace, SF Mono, Monaco, Cascadia Code, Roboto Mono, Consolas, Courier New, monospace;">');

        console.log('✅ Markdown to HTML converted using Showdown:', htmlContent.substring(0, 100) + '...');
        return htmlContent;
    } catch (error) {
        console.error('❌ Markdown to HTML conversion error:', error);
        return markdown; // Return original if conversion fails
    }
};

// Custom Tabs Component with proper typing (same as before)
const TabsImplementation: React.FC<TabsProps> = ({ defaultValue, children }) => {
    const [activeTab, setActiveTab] = useState(defaultValue);

    return (
        <div className="w-full">
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as React.ReactElement<any>, {
                        activeTab,
                        setActiveTab
                    });
                }
                return child;
            })}
        </div>
    );
};

const TabsList: React.FC<TabsListProps> = ({ children, activeTab, setActiveTab }) => {
    return (
        <div className="flex border-b border-border mb-4">
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as React.ReactElement<any>, {
                        activeTab,
                        setActiveTab
                    });
                }
                return child;
            })}
        </div>
    );
};

const TabsTrigger: React.FC<TabsTriggerProps> = ({ value, children, activeTab, setActiveTab }) => {
    return (
        <button
            type="button"
            onClick={() => setActiveTab?.(value)}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${activeTab === value
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
        >
            {children}
        </button>
    );
};

const TabsContent: React.FC<TabsContentProps> = ({ value, children, activeTab }) => {
    if (activeTab !== value) return null;

    return (
        <div className="mt-4">
            {children}
        </div>
    );
};

// Create lowlight instance (same as before)
const lowlight = createLowlight();

// Register languages
lowlight.register({
    javascript,
    typescript,
    python,
    java,
    cpp,
    css,
    html: xml,
    json,
    php,
    sql,
    bash,
    go,
    rust,
    swift,
    kotlin
});

// Custom Extensions (same as before)
const InlineHeading = Heading.extend<HeadingOptions>({
    name: 'inlineHeading',

    addOptions() {
        return {
            ...this.parent?.(),
            levels: [1, 2, 3, 4, 5, 6],
            HTMLAttributes: {},
        };
    },

    addAttributes() {
        return {
            ...this.parent?.(),
            level: {
                default: 1,
                rendered: false,
            },
        };
    },

    renderHTML({ node, HTMLAttributes }) {
        const level = node.attrs.level as number;
        const tag = `h${level}` as keyof HTMLElementTagNameMap;

        const headingStyles: Record<number, string> = {
            1: 'font-size: 2rem; font-weight: 700; line-height: 1.2; margin: 1.5rem 0 1rem 0; color: inherit;',
            2: 'font-size: 1.5rem; font-weight: 600; line-height: 1.3; margin: 1.25rem 0 0.75rem 0; color: inherit;',
            3: 'font-size: 1.25rem; font-weight: 600; line-height: 1.4; margin: 1rem 0 0.5rem 0; color: inherit;',
            4: 'font-size: 1.125rem; font-weight: 500; line-height: 1.4; margin: 0.75rem 0 0.5rem 0; color: inherit;',
            5: 'font-size: 1rem; font-weight: 500; line-height: 1.5; margin: 0.5rem 0 0.25rem 0; color: inherit;',
            6: 'font-size: 0.875rem; font-weight: 500; line-height: 1.5; margin: 0.5rem 0 0.25rem 0; text-transform: uppercase; letter-spacing: 0.05em; color: inherit;'
        };

        return [
            tag,
            mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
                style: headingStyles[level] || headingStyles[1]
            }),
            0
        ];
    },

    addCommands() {
        return {
            ...this.parent?.(),
            setInlineHeading: (attributes: { level: number }) => ({ commands }: { commands: any }) => {
                return commands.setNode(this.name, attributes);
            },
            toggleInlineHeading: (attributes: { level: number }) => ({ commands }: { commands: any }) => {
                return commands.toggleNode(this.name, 'paragraph', attributes);
            },
        };
    },
});

// Enhanced TextStyle Extension for Inline Styles
const InlineTextStyle = TextStyle.extend<InlineTextStyleOptions>({
    name: 'inlineTextStyle',

    addOptions() {
        return {
            ...this.parent?.(),
            types: ['textStyle'],
        };
    },

    addAttributes() {
        return {
            ...this.parent?.(),
            fontSize: {
                default: null,
                parseHTML: (element: HTMLElement) => {
                    const style = element.getAttribute('style') || '';
                    const match = style.match(/font-size:\s*([^;]+)/);
                    return match ? match[1].trim() : null;
                },
                renderHTML: (attributes: Record<string, any>) => {
                    if (!attributes.fontSize) return {};
                    return {};
                },
            },
            fontFamily: {
                default: null,
                parseHTML: (element: HTMLElement) => {
                    const style = element.getAttribute('style') || '';
                    const match = style.match(/font-family:\s*([^;]+)/);
                    return match ? match[1].trim() : null;
                },
                renderHTML: (attributes: Record<string, any>) => {
                    if (!attributes.fontFamily) return {};
                    return {};
                },
            },
            color: {
                default: null,
                parseHTML: (element: HTMLElement) => {
                    const style = element.getAttribute('style') || '';
                    const match = style.match(/color:\s*([^;]+)/);
                    return match ? match[1].trim() : null;
                },
                renderHTML: (attributes: Record<string, any>) => {
                    if (!attributes.color) return {};
                    return {};
                },
            },
        };
    },

    renderHTML({ mark, HTMLAttributes }) {
        const styles: string[] = [];

        if (mark.attrs.fontSize) {
            styles.push(`font-size: ${mark.attrs.fontSize}`);
        }
        if (mark.attrs.fontFamily) {
            styles.push(`font-family: ${mark.attrs.fontFamily}`);
        }
        if (mark.attrs.color) {
            styles.push(`color: ${mark.attrs.color}`);
        }

        const combinedStyle = styles.length > 0 ? styles.join('; ') : '';

        return [
            'span',
            mergeAttributes(HTMLAttributes, {
                style: combinedStyle || undefined
            }),
            0
        ];
    },

    addCommands() {
        return {
            ...this.parent?.(),
            setInlineFontSize: (fontSize: string) => ({ commands }: { commands: any }) => {
                return commands.updateAttributes(this.name, { fontSize });
            },
            setInlineFontFamily: (fontFamily: string) => ({ commands }: { commands: any }) => {
                return commands.updateAttributes(this.name, { fontFamily });
            },
            setInlineColor: (color: string) => ({ commands }: { commands: any }) => {
                return commands.updateAttributes(this.name, { color });
            },
            unsetInlineTextStyle: () => ({ commands }: { commands: any }) => {
                return commands.unsetMark(this.name);
            },
        };
    },
});

// Enhanced Extensions with Inline Styles (same as before)
const InlineBulletList = BulletList.extend({
    renderHTML({ HTMLAttributes }) {
        return [
            'ul',
            mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
                style: 'margin: 1rem 0; padding-left: 1.5rem; list-style-type: disc;'
            }),
            0
        ];
    },
});

const InlineOrderedList = OrderedList.extend({
    renderHTML({ HTMLAttributes }) {
        return [
            'ol',
            mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
                style: 'margin: 1rem 0; padding-left: 1.5rem; list-style-type: decimal;'
            }),
            0
        ];
    },
});

const InlineListItem = ListItem.extend({
    renderHTML({ HTMLAttributes }) {
        return [
            'li',
            mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
                style: 'margin: 0.5rem 0; line-height: 1.6;'
            }),
            0
        ];
    },
});

const InlineParagraph = Paragraph.extend({
    renderHTML({ HTMLAttributes }) {
        return [
            'p',
            mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
                style: 'font-size: 1rem; line-height: 1.7; margin: 1rem 0; color: inherit;'
            }),
            0
        ];
    },
});

const InlineBlockquote = Blockquote.extend({
    renderHTML({ HTMLAttributes }) {
        return [
            'blockquote',
            mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
                style: 'margin: 1.5rem 0; padding: 1rem 1.5rem; border-left: 4px solid #0066cc; background-color: rgba(0, 102, 204, 0.05); font-style: italic;'
            }),
            0
        ];
    },
});

// Constants (same as before)
const PROGRAMMING_LANGUAGES = [
    { value: 'javascript', label: 'JavaScript', icon: '🟨' },
    { value: 'typescript', label: 'TypeScript', icon: '🔷' },
    { value: 'python', label: 'Python', icon: '🐍' },
    { value: 'java', label: 'Java', icon: '☕' },
    { value: 'cpp', label: 'C++', icon: '⚡' },
    { value: 'css', label: 'CSS', icon: '🎨' },
    { value: 'html', label: 'HTML', icon: '🌐' },
    { value: 'json', label: 'JSON', icon: '📋' },
    { value: 'php', label: 'PHP', icon: '🐘' },
    { value: 'sql', label: 'SQL', icon: '🗃️' },
    { value: 'bash', label: 'Bash/Shell', icon: '💻' },
    { value: 'go', label: 'Go', icon: '🐹' },
    { value: 'rust', label: 'Rust', icon: '🦀' },
    { value: 'swift', label: 'Swift', icon: '🍎' },
    { value: 'kotlin', label: 'Kotlin', icon: '🎯' },
    { value: 'plaintext', label: 'Plain Text', icon: '📝' },
];

const UNIVERSAL_FONTS = [
    { value: 'Default', label: 'Default (System)', category: 'System' },
    { value: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', label: 'System UI', category: 'System' },
    { value: '"Helvetica Neue", Helvetica, Arial, sans-serif', label: 'Helvetica Stack', category: 'Sans Serif' },
    { value: 'Arial, "Helvetica Neue", Helvetica, sans-serif', label: 'Arial Stack', category: 'Sans Serif' },
    { value: 'Verdana, Geneva, sans-serif', label: 'Verdana Stack', category: 'Sans Serif' },
    { value: 'Tahoma, Geneva, Verdana, sans-serif', label: 'Tahoma Stack', category: 'Sans Serif' },
    { value: '"Times New Roman", Times, serif', label: 'Times Stack', category: 'Serif' },
    { value: 'Georgia, "Times New Roman", Times, serif', label: 'Georgia Stack', category: 'Serif' },
    { value: '"Book Antiqua", Palatino, "Palatino Linotype", serif', label: 'Book Antiqua Stack', category: 'Serif' },
    { value: 'ui-monospace, "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace', label: 'Monospace Stack', category: 'Monospace' },
    { value: '"Courier New", Courier, monospace', label: 'Courier Stack', category: 'Monospace' },
    { value: 'Impact, "Arial Black", sans-serif', label: 'Impact Stack', category: 'Display' },
    { value: '"Comic Sans MS", cursive', label: 'Comic Sans Stack', category: 'Display' }
];

const UNIVERSAL_FONT_SIZES = [
    { value: '0.75rem', label: 'Small (12px)' },
    { value: '0.875rem', label: 'Normal (14px)' },
    { value: '1rem', label: 'Medium (16px)' },
    { value: '1.125rem', label: 'Large (18px)' },
    { value: '1.25rem', label: 'X-Large (20px)' },
    { value: '1.5rem', label: 'XX-Large (24px)' },
    { value: '1.75rem', label: 'Huge (28px)' },
    { value: '2rem', label: 'Giant (32px)' },
    { value: '2.25rem', label: 'Massive (36px)' },
    { value: '3rem', label: 'Enormous (48px)' }
];

const TEXT_COLORS = [
    '#000000', '#FFFFFF', '#FF0000', '#00FF00', '#0000FF',
    '#FFFF00', '#FF00FF', '#00FFFF', '#FFA500', '#800080',
    '#008000', '#FF69B4', '#4B0082', '#FF4500', '#2E8B57',
    '#DC143C', '#00CED1', '#FFD700', '#B22222', '#32CD32'
];

const HIGHLIGHT_COLORS = [
    '#FFFF00', '#00FF00', '#00FFFF', '#FF69B4', '#FFA500',
    '#FF0000', '#0000FF', '#800080', '#FFD700', '#98FB98',
    '#F0E68C', '#DDA0DD', '#87CEEB', '#F5DEB3', '#FFB6C1'
];

// Global variable to store the delete function reference
let globalDeleteImageFn: ((key: string) => Promise<void>) | null = null;

export const ImageView: React.FC<any> = ({ node, deleteNode }) => {
    const { src, alt, dataKey } = node.attrs;
    const key = dataKey || alt;

    const handleClick = async () => {
        if (key && globalDeleteImageFn) {
            await globalDeleteImageFn(key);
        }
        deleteNode();
    };

    return (
        <NodeViewWrapper className="relative inline-block img-wrap">
            <img src={src} alt={alt} style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '0.5rem',
                display: 'block',
                margin: '1rem auto'
            }} />
            <button
                type="button"
                onClick={handleClick}
                className="absolute -top-2 -right-2 bg-destructive text-white rounded-full p-1 opacity-0 hover:opacity-100 transition-opacity"
            >
                <X className="w-3 h-3" />
            </button>
        </NodeViewWrapper>
    );
};

// Custom Font Size Input Component (same as before)
const FontSizeSelector: React.FC<{
    value: string;
    onChange: (size: string) => void;
    className?: string;
}> = ({ value, onChange, className = "" }) => {
    const [isCustom, setIsCustom] = useState(false);
    const [customValue, setCustomValue] = useState('');

    useEffect(() => {
        const predefinedValue = UNIVERSAL_FONT_SIZES.find(size => size.value === value);
        if (!predefinedValue && value) {
            setIsCustom(true);
            setCustomValue(value);
        } else {
            setIsCustom(false);
            setCustomValue('');
        }
    }, [value]);

    const handleSelectChange = (newValue: string) => {
        if (newValue === 'custom') {
            setIsCustom(true);
            setCustomValue(value || '1rem');
        } else {
            setIsCustom(false);
            onChange(newValue);
        }
    };

    const handleCustomInput = (inputValue: string) => {
        setCustomValue(inputValue);

        if (inputValue.match(/^\d+$/)) {
            onChange(inputValue + 'px');
        } else if (inputValue.match(/^\d+(px|em|rem|%)$/)) {
            onChange(inputValue);
        }
    };

    const handleCustomBlur = () => {
        if (!customValue.match(/^\d+(px|em|rem|%)$/)) {
            setCustomValue('1rem');
            onChange('1rem');
        }
    };

    if (isCustom) {
        return (
            <div className="flex items-center gap-1">
                <Input
                    value={customValue}
                    onChange={(e) => handleCustomInput(e.target.value)}
                    onBlur={handleCustomBlur}
                    placeholder="1rem"
                    className="w-20 h-8 text-xs"
                />
                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsCustom(false)}
                    className="h-8 px-2 text-xs"
                >
                    ✓
                </Button>
            </div>
        );
    }

    return (
        <Select value={value || '1rem'} onValueChange={handleSelectChange}>
            <SelectTrigger className={`h-8 ${className}`}>
                <SelectValue placeholder="Font Size" />
            </SelectTrigger>
            <SelectContent>
                {UNIVERSAL_FONT_SIZES.map((size) => (
                    <SelectItem key={size.value} value={size.value}>
                        {size.label}
                    </SelectItem>
                ))}
                <SelectItem value="custom">
                    <span className="text-blue-600">Custom Size...</span>
                </SelectItem>
            </SelectContent>
        </Select>
    );
};

const RichTextEditor: React.FC<RichTextEditorProps> = ({
    value,
    onChange,
    placeholder = "Start writing..."
}) => {
    const [mode, setMode] = useState<'html' | 'markdown'>('html');
    const [imageModalOpen, setImageModalOpen] = useState(false);
    const [linkModalOpen, setLinkModalOpen] = useState(false);
    const [codeModalOpen, setCodeModalOpen] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const [imageAlt, setImageAlt] = useState('');
    const [linkUrl, setLinkUrl] = useState('');
    const [linkText, setLinkText] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('javascript');
    const [codeContent, setCodeContent] = useState('');
    const [selectedFontFamily, setSelectedFontFamily] = useState('Default');
    const [selectedFontSize, setSelectedFontSize] = useState('1rem');
    const [currentTextColor, setCurrentTextColor] = useState<string>('');
    const [currentHighlightColor, setCurrentHighlightColor] = useState<string>('');
    const fileInputRef = useRef<HTMLInputElement>(null);


    const [formatState, setFormatState] = useState({
        bold: false,
        italic: false,
        strike: false,
        code: false,
        bulletList: false,
        orderedList: false,
        blockquote: false,
        codeBlock: false,
        heading1: false,
        heading2: false,
        heading3: false,
        heading4: false,
        heading5: false,
        heading6: false,
    });

    // FIXED: Auto-detect mode from existing content
    const detectModeFromContent = (content: string): 'html' | 'markdown' => {
        if (content.startsWith('[md]') || content.includes('[md]')) {
            return 'markdown';
        } else if (content.startsWith('[html]') || content.includes('[html]')) {
            return 'html';
        }
        // Auto-detect based on content structure
        const cleaned = cleanContent(content);
        if (cleaned.includes('# ') || cleaned.includes('## ') || cleaned.includes('**') || cleaned.includes('_') && !cleaned.includes('<')) {
            return 'markdown';
        }
        return 'html'; // Default to HTML
    };

    // ✅ ENHANCED: Content conversion functions using ONLY SHOWDOWN
    const convertHtmlToMarkdown = (htmlContent: string): string => {
        try {
            const markdown = htmlToMarkdown(htmlContent);
            console.log('✅ Converted HTML to Markdown using Showdown:', markdown.substring(0, 100) + '...');
            return markdown;
        } catch (error) {
            console.error('❌ HTML to Markdown conversion error:', error);
            return htmlContent;
        }
    };

    const convertMarkdownToHtml = (markdownContent: string): string => {
        try {
            let htmlContent = markdownToHtml(markdownContent);

            // Wrap content in paragraphs if not already wrapped
            if (!htmlContent.startsWith('<h') && !htmlContent.startsWith('<ul') &&
                !htmlContent.startsWith('<ol') && !htmlContent.startsWith('<blockquote')) {
                htmlContent = `<p style="font-size: 1rem; line-height: 1.7; margin: 1rem 0; color: inherit;">${htmlContent}</p>`;
            }

            console.log('✅ Converted Markdown to HTML using Showdown:', htmlContent.substring(0, 100) + '...');
            return htmlContent;
        } catch (error) {
            console.error('❌ Markdown to HTML conversion error:', error);
            return markdownContent;
        }
    };

    // Clean content function
    const cleanContent = (content: string) => {
        return content?.replace(/^\[html\]\s*|^\[md\]\s*/i, '').trim();
    };

    // Add prefix function
    const addPrefix = (content: string) => {
        const cleaned = cleanContent(content);
        if (!cleaned) return '';
        return mode === 'html' ? `[html] ${cleaned}` : `[md] ${cleaned}`;
    };

    // Safe markdown content getter
    const getMarkdownContent = () => {
        if (!editor) return '';

        try {
            const storage = editor.storage as CustomEditorStorage;
            if (storage.markdown && typeof storage.markdown.getMarkdown === 'function') {
                return storage.markdown.getMarkdown();
            }

            // Fallback: convert current HTML to markdown using Showdown
            const currentHtml = editor.getHTML();
            return convertHtmlToMarkdown(currentHtml);
        } catch (error) {
            console.warn('Could not get markdown content:', error);
            return '';
        }
    };

    // Handle delete image
    const handleDeleteImage = async (key: string) => {
        if (key) {
            await fetch(`/api/files/delete?key=${encodeURIComponent(key)}`, { method: 'DELETE' });
        }
    };

    globalDeleteImageFn = handleDeleteImage;

    // Custom Image extension
    const CustomImage = Image.extend<CustomImageOptions>({
        name: 'customImage',

        addOptions() {
            return {
                ...this.parent?.(),
                HTMLAttributes: {},
                allowBase64: true,
                inline: false,
            };
        },

        addAttributes() {
            return {
                ...this.parent?.(),
                dataKey: {
                    default: null,
                    parseHTML: (element: HTMLElement) => element.getAttribute('data-key'),
                    renderHTML: (attributes: Record<string, any>) => attributes.dataKey ? { 'data-key': attributes.dataKey } : {},
                },
            };
        },

        addNodeView() {
            return ReactNodeViewRenderer(ImageView);
        },

        renderHTML({ HTMLAttributes }) {
            return [
                'img',
                mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
                    style: 'max-width: 100%; height: auto; border-radius: 0.5rem; display: block; margin: 1rem auto;'
                }),
            ];
        },
    });



    // ✅ ENHANCED: Mode change handler with Showdown conversions
    const handleModeChange = (newMode: 'html' | 'markdown') => {
        if (!editor || newMode === mode) return;

        console.log(`🔄 Switching mode from ${mode} to ${newMode} using Showdown`);

        try {
            if (newMode === 'markdown' && mode === 'html') {
                // Get current content and clean it before conversion
                const currentContent = editor.getHTML();

                // Remove existing prefixes and clean content
                const cleanedHtml = currentContent
                    .replace(/^\[html\]\s*/i, '')
                    .replace(/^\[md\]\s*/i, '')
                    .trim();

                if (cleanedHtml) {
                    // ✅ Use Showdown for HTML to Markdown conversion
                    const convertedMarkdown = htmlToMarkdown(cleanedHtml);

                    // Convert back to HTML for editor display
                    const displayHtml = markdownToHtml(convertedMarkdown);
                    editor.commands.setContent(displayHtml, {
                        emitUpdate: false,
                        // preserveWhitespace: 'full'
                    });
                }

            } else if (newMode === 'html' && mode === 'markdown') {
                // Similar cleaning for HTML mode
                const markdownContent = getMarkdownContent();
                const cleanedMarkdown = markdownContent
                    .replace(/^\[html\]\s*/i, '')
                    .replace(/^\[md\]\s*/i, '')
                    .trim();

                if (cleanedMarkdown) {
                    // ✅ Use Showdown for Markdown to HTML conversion
                    const convertedHtml = markdownToHtml(cleanedMarkdown);
                    editor.commands.setContent(convertedHtml, {
                        emitUpdate: false,
                        // preserveWhitespace: 'full'
                    });
                }
            }

            setMode(newMode);

            // Update parent component after a short delay
            setTimeout(() => {
                const finalContent = newMode === 'html' ? editor.getHTML() : getMarkdownContent();
                const prefixedContent = addPrefix(finalContent);
                onChange(prefixedContent);
            }, 100);

        } catch (error) {
            console.error('❌ Mode conversion error:', error);
            setMode(newMode);
        }
    };

    // FIXED: Initialize mode based on existing content
    useEffect(() => {
        if (value) {
            const detectedMode = detectModeFromContent(value);
            setMode(detectedMode);
            console.log('Detected mode from content:', detectedMode, 'Content preview:', value.substring(0, 50) + '...');
        }
    }, []); // Only run once on mount

    // Editor initialization
    const editor = useEditor({
        extensions: [
            CustomImage,
            StarterKit.configure({
                heading: false,
                paragraph: false,
                blockquote: false,
                bulletList: false,
                orderedList: false,
                listItem: false,
                codeBlock: false,
            }),

            // Custom Inline Extensions
            InlineHeading.configure({
                levels: [1, 2, 3, 4, 5, 6],
            }),
            InlineParagraph,
            InlineBlockquote,
            InlineBulletList,
            InlineOrderedList,
            InlineListItem,

            CodeBlockLowlight.configure({
                lowlight,
                defaultLanguage: 'plaintext',
                HTMLAttributes: {
                    class: 'tiptap-code-block',
                    // style: 'background: #1e1e1e; color: #e5e5e5; padding: 1rem; border-radius: 0.5rem; overflow-x: auto; font-family: ui-monospace, "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace; font-size: 0.875rem; line-height: 1.5; margin: 1.5rem 0;'
                    style: `
      background: #1e1e1e;
      color: #e5e5e5;
      padding: 1rem;
      border-radius: 0.5rem;
      overflow-x: auto;
      font-family: ui-monospace, SF Mono, Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
      font-size: 0.875rem;
      line-height: 1.5;
      margin: 1.5rem 0;
      white-space: pre;
      tab-size: 2;
    `
                },
                languageClassPrefix: 'language-',
                enableTabIndentation: true,
                tabSize: 2,
            }),

            Link.configure({
                openOnClick: false,
                HTMLAttributes: {
                    style: 'color: #0066cc; text-decoration: none; border-bottom: 1px solid transparent; transition: border-color 0.2s;'
                },
                protocols: ['http', 'https', 'mailto'],
            }),

            InlineTextStyle,
            FontFamily.configure({
                types: ['inlineTextStyle'],
            }),
            Color.configure({
                types: ['inlineTextStyle'],
            }),
            Highlight.configure({
                multicolor: true,
                HTMLAttributes: {
                    style: 'padding: 0.125rem 0.25rem; border-radius: 0.25rem;'
                }
            }),

            Markdown.configure({
                html: true,
                tightLists: true,
                tightListClass: 'tight',
                bulletListMarker: '-',
                linkify: false,
                breaks: false,
                transformPastedText: mode === 'markdown',
                transformCopiedText: mode === 'markdown',
            }),
        ],
        parseOptions: {
            preserveWhitespace: 'full',
        },
        content: '',
        immediatelyRender: false,
        autofocus: false,
        onUpdate: ({ editor }) => {
            updateFormatState();

            const content = mode === 'html'
                ? editor.getHTML()
                : getMarkdownContent();

            const prefixedContent = addPrefix(content);
            console.log(`📝 Editor updated in ${mode} mode using Showdown:`, prefixedContent.substring(0, 50) + '...');
            onChange(prefixedContent);
        },
        onSelectionUpdate: ({ editor }) => {
            updateFormatState();
        },
        editorProps: {
            attributes: {
                class: 'focus:outline-none min-h-[300px] p-4 rich-text-content',
                style: 'font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; font-size: 1rem; line-height: 1.6; color: #333;'
            },
            handlePaste: (view, event, slice) => {
                const text = event.clipboardData?.getData('text/plain');

                // Special handling for code blocks
                if (text && view.state.selection.$head.parent.type.name === 'codeBlock') {
                    event.preventDefault();
                    // ✅ Preserve exact text formatting in code blocks
                    view.dispatch(view.state.tr.insertText(text));
                    return true;
                }

                // ✅ For regular paste, preserve whitespace
                if (text && text.includes('\n')) {
                    event.preventDefault();
                    const htmlContent = text.replace(/\n/g, '<br>');
                    view.dispatch(view.state.tr.insertText(htmlContent));
                    return true;
                }

                return false; // Let default handle other cases
            },
        },
    });

    const preprocessContentForTipTap = (content: string): string => {
        // Replace multiple newlines with HTML breaks to prevent collapse
        return content
            .replace(/\n\n+/g, (match) => {
                // Convert multiple newlines to HTML breaks
                const count = match.length - 1;
                return '<br>'.repeat(count);
            })
            .replace(/\n/g, '<br>'); // Single newlines to breaks
    };

    // Content loading with proper mode handling
    useEffect(() => {
        if (editor && value) {
            console.log(value)
            const cleanedContent = cleanContent(value);
            const currentContent = editor.getHTML();


            if (cleanedContent !== currentContent && cleanedContent.trim()) {
                console.log(`📝 Setting editor content in ${mode} mode using Showdown:`, cleanedContent + '...');
                const preprocessedContent = preprocessContentForTipTap(cleanedContent);

                // If content is markdown but we're in HTML mode, convert it
                // if (mode === 'html' && value.startsWith('[md]')) {
                //     const htmlContent = convertMarkdownToHtml(cleanedContent);
                //     editor.commands.setContent(htmlContent, {
                //         emitUpdate: false,
                //         // preserveWhitespace: 'full'
                //     });
                // } else if (mode === 'markdown' && value.startsWith('[html]')) {
                //     // Keep HTML content as is for editing
                //     editor.commands.setContent(cleanedContent, {
                //         emitUpdate: false,
                //         // preserveWhitespace: 'full'
                //     });
                // } else {
                editor.commands.setContent(preprocessedContent, {
                    // emitUpdate: false,

                    parseOptions: {
                        preserveWhitespace: 'full',
                    }
                    // preserveWhitespace: 'full'
                });
                // }
            }
        }
    }, [editor, value]);

    useEffect(() => {
        if (!codeModalOpen) {
            setCodeContent('');
            setSelectedLanguage('javascript');
        }
    }, [codeModalOpen]);


    useEffect(() => {
        // Pre-fill with selected text when opening code modal
        if (codeModalOpen && editor) {
            const { from, to } = editor.state.selection;
            if (from !== to) {
                const selectedText = editor.state.doc.textBetween(from, to, '\n');
                if (selectedText.trim()) {
                    setCodeContent(selectedText);
                }
            }
        }
    }, [codeModalOpen, editor]);


    const updateFormatState = useCallback(() => {
        if (!editor) return;

        setFormatState({
            bold: editor.isActive('bold'),
            italic: editor.isActive('italic'),
            strike: editor.isActive('strike'),
            code: editor.isActive('code'),
            bulletList: editor.isActive('bulletList'),
            orderedList: editor.isActive('orderedList'),
            blockquote: editor.isActive('blockquote'),
            codeBlock: editor.isActive('codeBlock'),
            heading1: editor.isActive('inlineHeading', { level: 1 }),
            heading2: editor.isActive('inlineHeading', { level: 2 }),
            heading3: editor.isActive('inlineHeading', { level: 3 }),
            heading4: editor.isActive('inlineHeading', { level: 4 }),
            heading5: editor.isActive('inlineHeading', { level: 5 }),
            heading6: editor.isActive('inlineHeading', { level: 6 }),
        });

        const textStyleAttrs = editor.getAttributes('inlineTextStyle');
        setCurrentTextColor(textStyleAttrs.color || '');

        let highlightColor = '';
        for (const color of HIGHLIGHT_COLORS) {
            if (editor.isActive('highlight', { color })) {
                highlightColor = color;
                break;
            }
        }
        setCurrentHighlightColor(highlightColor);
    }, [editor]);

    useEffect(() => {
        if (editor) {
            updateFormatState();
        }
    }, [editor, updateFormatState]);

    if (!editor) return null;

    // All the handler functions remain the same...
    const toggleFormat = (format: keyof typeof formatState) => {
        if (!editor) return;

        switch (format) {
            case 'bold':
                editor.chain().focus().toggleBold().run();
                break;
            case 'italic':
                editor.chain().focus().toggleItalic().run();
                break;
            case 'strike':
                editor.chain().focus().toggleStrike().run();
                break;
            case 'code':
                editor.chain().focus().toggleCode().run();
                break;
            case 'bulletList':
                editor.chain().focus().toggleBulletList().run();
                break;
            case 'orderedList':
                editor.chain().focus().toggleOrderedList().run();
                break;
            case 'blockquote':
                editor.chain().focus().toggleBlockquote().run();
                break;
            case 'heading1':
                editor.chain().focus().toggleHeading({ level: 1 }).run();
                break;
            case 'heading2':
                editor.chain().focus().toggleHeading({ level: 2 }).run();
                break;
            case 'heading3':
                editor.chain().focus().toggleHeading({ level: 3 }).run();
                break;
            case 'heading4':
                editor.chain().focus().toggleHeading({ level: 4 }).run();
                break;
            case 'heading5':
                editor.chain().focus().toggleHeading({ level: 5 }).run();
                break;
            case 'heading6':
                editor.chain().focus().toggleHeading({ level: 6 }).run();
                break;
        }
        updateFormatState();
    };

    const handleFontFamilyChange = (fontFamily: string) => {
        if (!editor) return;

        setSelectedFontFamily(fontFamily);
        if (fontFamily === 'Default') {
            const currentAttrs = editor.getAttributes('inlineTextStyle');
            editor.chain().focus().setMark('inlineTextStyle', {
                ...currentAttrs,
                fontFamily: null
            }).run();
        } else {
            const currentAttrs = editor.getAttributes('inlineTextStyle');
            editor.chain().focus().setMark('inlineTextStyle', {
                ...currentAttrs,
                fontFamily
            }).run();
        }
    };

    const handleFontSizeChange = (fontSize: string) => {
        if (!editor) return;

        setSelectedFontSize(fontSize);
        const currentAttrs = editor.getAttributes('inlineTextStyle');
        editor.chain().focus().setMark('inlineTextStyle', {
            ...currentAttrs,
            fontSize
        }).run();
    };

    const handleTextColorChange = (color: string) => {
        if (!editor) return;

        const currentAttrs = editor.getAttributes('inlineTextStyle');
        editor.chain().focus().setMark('inlineTextStyle', {
            ...currentAttrs,
            color
        }).run();
        setCurrentTextColor(color);
    };

    const handleHighlightColorChange = (color: string) => {
        if (!editor) return;
        editor.chain().focus().toggleHighlight({ color }).run();
    };

    const handleInsertCodeBlock = () => {
        if (!editor) return;

        // ✅ Preserve newlines and whitespace properly
        if (codeContent) {
            editor.chain()
                .focus()
                .insertContent({
                    type: 'codeBlock',
                    attrs: { language: selectedLanguage },
                    content: [
                        {
                            type: 'text',
                            // ✅ Keep original formatting
                            text: codeContent
                        }
                    ]
                })
                .run();
        } else {
            editor.chain()
                .focus()
                .insertContent({
                    type: 'codeBlock',
                    attrs: { language: selectedLanguage }
                })
                .run();
        }

        setCodeModalOpen(false);
        setCodeContent('');
        setSelectedLanguage('javascript');
    };


    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!editor) return;

        const file = e.target.files?.[0];
        if (!file) return;

        const fd = new FormData();
        fd.append('file', file);

        try {
            const res = await fetch('/api/files/upload', { method: 'POST', body: fd });
            const { url, key, success } = await res.json();

            if (!success) return;

            if (mode === 'markdown') {
                editor.chain().focus().setImage({ src: url, alt: key }).run();
            } else {
                editor
                    .chain()
                    .focus()
                    .insertContent({
                        type: 'customImage',
                        attrs: { src: url, alt: file.name, dataKey: key }
                    })
                    .run();
            }
        } catch (error) {
            console.error('File upload error:', error);
        }
    };

    const handleImageUrl = () => {
        if (!editor) return;

        if (imageUrl) {
            if (mode === 'markdown') {
                editor.chain().focus().setImage({
                    src: imageUrl,
                    alt: imageAlt || 'Image'
                }).run();
            } else {
                editor.chain().focus().insertContent({
                    type: 'customImage',
                    attrs: { src: imageUrl, alt: imageAlt || 'Image', dataKey: null }
                }).run();
            }
            setImageModalOpen(false);
            setImageUrl('');
            setImageAlt('');
        }
    };

    const handleAddLink = () => {
        if (!editor) return;

        if (linkUrl) {
            const { from, to } = editor.state.selection;
            const hasSelection = from !== to;

            if (linkText) {
                editor.chain()
                    .focus()
                    .insertContent(`<a href="${linkUrl}" style="color: #0066cc; text-decoration: none; border-bottom: 1px solid transparent; transition: border-color 0.2s;">${linkText}</a>`)
                    .run();
            } else if (hasSelection) {
                editor.chain()
                    .focus()
                    .setLink({ href: linkUrl })
                    .run();
            } else {
                editor.chain()
                    .focus()
                    .insertContent(`<a href="${linkUrl}" style="color: #0066cc; text-decoration: none; border-bottom: 1px solid transparent; transition: border-color 0.2s;">${linkUrl}</a>`)
                    .run();
            }

            setLinkModalOpen(false);
            setLinkUrl('');
            setLinkText('');
        }
    };

    return (
        <div className="border relative border-border rounded-md">
            {/* ✅ ENHANCED: Mode Toggle with Showdown Status */}
            <div className="border-b border-border p-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Label className="text-sm font-medium">Output Format:</Label>
                    <div className="flex gap-1">
                        <Button
                            type="button"
                            variant={mode === 'html' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => handleModeChange('html')}
                            className={mode === 'html' ? 'bg-primary text-primary-foreground' : ''}
                        >
                            HTML
                        </Button>
                        {/* <Button
                            type="button"
                            variant={mode === 'markdown' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => handleModeChange('markdown')}
                            className={mode === 'markdown' ? 'bg-primary text-primary-foreground' : ''}
                        >
                            Markdown
                        </Button> */}
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    {/* <Badge variant="secondary" className="text-xs">
                        {mode === 'html' ? '[html] HTML Mode' : '[md] Markdown Mode'}
                    </Badge> */}

                    {/* Show conversion engine */}
                    {/* <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                        ⚡ Showdown
                    </Badge> */}

                    {/* Show content type indicator */}
                    {value && (
                        <Badge variant="outline" className="text-xs">
                            {value.startsWith('[html]') ? 'HTML Content' :
                                value.startsWith('[md]') ? 'MD Content' :
                                    'Auto-Detected'}
                        </Badge>
                    )}
                </div>
            </div>

            {/* Advanced Toolbar */}
            <div className="border-b sticky top-19 bg-background z-10 border-border p-2 space-y-2">
                {/* First Row - Headings */}
                <div className="flex flex-wrap items-center gap-1">
                    <Label className="text-xs text-muted-foreground mr-2">Headings:</Label>
                    <Toggle
                        pressed={formatState.heading1}
                        onPressedChange={() => toggleFormat('heading1')}
                        size="sm"
                        aria-label="Heading 1"
                    >
                        <Heading1 className="w-4 h-4" />
                    </Toggle>
                    <Toggle
                        pressed={formatState.heading2}
                        onPressedChange={() => toggleFormat('heading2')}
                        size="sm"
                        aria-label="Heading 2"
                    >
                        <Heading2 className="w-4 h-4" />
                    </Toggle>
                    <Toggle
                        pressed={formatState.heading3}
                        onPressedChange={() => toggleFormat('heading3')}
                        size="sm"
                        aria-label="Heading 3"
                    >
                        <Heading3 className="w-4 h-4" />
                    </Toggle>
                    <Toggle
                        pressed={formatState.heading4}
                        onPressedChange={() => toggleFormat('heading4')}
                        size="sm"
                        aria-label="Heading 4"
                    >
                        <Heading4 className="w-4 h-4" />
                    </Toggle>
                    <Toggle
                        pressed={formatState.heading5}
                        onPressedChange={() => toggleFormat('heading5')}
                        size="sm"
                        aria-label="Heading 5"
                    >
                        <Heading5 className="w-4 h-4" />
                    </Toggle>
                    <Toggle
                        pressed={formatState.heading6}
                        onPressedChange={() => toggleFormat('heading6')}
                        size="sm"
                        aria-label="Heading 6"
                    >
                        <Heading6 className="w-4 h-4" />
                    </Toggle>
                </div>

                {/* Second Row - Font Controls */}
                <div className="flex flex-wrap items-center gap-2">
                    <Label className="text-xs text-muted-foreground">Font:</Label>

                    {/* Font Family with Categories */}
                    <Select value={selectedFontFamily} onValueChange={handleFontFamilyChange}>
                        <SelectTrigger className="w-40 h-8">
                            <SelectValue placeholder="Font Family" />
                        </SelectTrigger>
                        <SelectContent className="max-h-80">
                            <div className="space-y-1">
                                <div className="px-2 py-1 text-xs font-semibold text-muted-foreground">System Fonts</div>
                                {UNIVERSAL_FONTS.filter(font => font.category === 'System').map((font) => (
                                    <SelectItem key={font.value} value={font.value}>
                                        <span style={{ fontFamily: font.value === 'Default' ? 'inherit' : font.value }}>
                                            {font.label}
                                        </span>
                                    </SelectItem>
                                ))}

                                <div className="px-2 py-1 text-xs font-semibold text-muted-foreground">Sans Serif</div>
                                {UNIVERSAL_FONTS.filter(font => font.category === 'Sans Serif').map((font) => (
                                    <SelectItem key={font.value} value={font.value}>
                                        <span style={{ fontFamily: font.value }}>
                                            {font.label}
                                        </span>
                                    </SelectItem>
                                ))}

                                <div className="px-2 py-1 text-xs font-semibold text-muted-foreground">Serif</div>
                                {UNIVERSAL_FONTS.filter(font => font.category === 'Serif').map((font) => (
                                    <SelectItem key={font.value} value={font.value}>
                                        <span style={{ fontFamily: font.value }}>
                                            {font.label}
                                        </span>
                                    </SelectItem>
                                ))}

                                <div className="px-2 py-1 text-xs font-semibold text-muted-foreground">Monospace</div>
                                {UNIVERSAL_FONTS.filter(font => font.category === 'Monospace').map((font) => (
                                    <SelectItem key={font.value} value={font.value}>
                                        <span style={{ fontFamily: font.value }}>
                                            {font.label}
                                        </span>
                                    </SelectItem>
                                ))}

                                <div className="px-2 py-1 text-xs font-semibold text-muted-foreground">Display</div>
                                {UNIVERSAL_FONTS.filter(font => font.category === 'Display').map((font) => (
                                    <SelectItem key={font.value} value={font.value}>
                                        <span style={{ fontFamily: font.value }}>
                                            {font.label}
                                        </span>
                                    </SelectItem>
                                ))}
                            </div>
                        </SelectContent>
                    </Select>

                    {/* Enhanced Font Size Selector */}
                    <FontSizeSelector
                        value={selectedFontSize}
                        onChange={handleFontSizeChange}
                        className="w-28"
                    />

                    <Separator orientation="vertical" className="h-6" />

                    {/* Text Color with Active State */}
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                size="sm"
                                className="w-8 h-8 p-0 relative overflow-hidden"
                            >
                                <Type className="w-4 h-4" />
                                {currentTextColor && (
                                    <div
                                        className="absolute bottom-0 left-0 w-full h-1"
                                        style={{ backgroundColor: currentTextColor }}
                                    />
                                )}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-64">
                            <div className="space-y-2">
                                <Label className="text-sm font-medium">Text Color</Label>
                                <div className="grid grid-cols-10 gap-1">
                                    {TEXT_COLORS.map((color) => (
                                        <button
                                            key={color}
                                            type="button"
                                            className={`w-6 h-6 rounded border transition-all duration-200 ${currentTextColor === color
                                                ? 'ring-2 ring-blue-500 ring-offset-1 scale-110 border-blue-500'
                                                : 'border-gray-300 hover:scale-105 hover:border-gray-400'
                                                }`}
                                            style={{ backgroundColor: color }}
                                            onClick={() => handleTextColorChange(color)}
                                            title={`Text color: ${color}`}
                                        />
                                    ))}
                                </div>
                                <button
                                    type="button"
                                    className="w-full mt-2 px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded transition-colors"
                                    onClick={() => {
                                        if (editor) {
                                            editor.chain().focus().unsetMark('inlineTextStyle').run();
                                            setCurrentTextColor('');
                                        }
                                    }}
                                >
                                    Clear Color
                                </button>
                            </div>
                        </PopoverContent>
                    </Popover>

                    {/* Highlight Color with Active State */}
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                size="sm"
                                className="w-8 h-8 p-0 relative overflow-hidden"
                            >
                                <Highlighter className="w-4 h-4" />
                                {currentHighlightColor && (
                                    <div
                                        className="absolute bottom-0 left-0 w-full h-1 rounded-b"
                                        style={{ backgroundColor: currentHighlightColor }}
                                    />
                                )}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-64">
                            <div className="space-y-2">
                                <Label className="text-sm font-medium">Highlight Color</Label>
                                <div className="grid grid-cols-5 gap-2">
                                    {HIGHLIGHT_COLORS.map((color) => (
                                        <button
                                            key={color}
                                            type="button"
                                            className={`w-8 h-8 rounded-md border-2 transition-all duration-200 ${currentHighlightColor === color
                                                ? 'ring-2 ring-violet-500 ring-offset-1 scale-110 border-violet-500 shadow-lg'
                                                : 'border-gray-300 hover:scale-105 hover:border-gray-400 hover:shadow-md'
                                                }`}
                                            style={{ backgroundColor: color }}
                                            onClick={() => handleHighlightColorChange(color)}
                                            title={`Highlight with ${color}`}
                                        />
                                    ))}
                                </div>
                                <button
                                    type="button"
                                    className="w-full mt-2 px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded transition-colors"
                                    onClick={() => {
                                        if (editor) {
                                            editor.chain().focus().unsetHighlight().run();
                                            setCurrentHighlightColor('');
                                        }
                                    }}
                                >
                                    Clear Highlight
                                </button>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>

                {/* Third Row - Text Formatting */}
                <div className="flex flex-wrap items-center gap-1">
                    <Label className="text-xs text-muted-foreground mr-2">Format:</Label>
                    <Toggle
                        pressed={formatState.bold}
                        onPressedChange={() => toggleFormat('bold')}
                        size="sm"
                        aria-label="Bold"
                    >
                        <Bold className="w-4 h-4" />
                    </Toggle>

                    <Toggle
                        pressed={formatState.italic}
                        onPressedChange={() => toggleFormat('italic')}
                        size="sm"
                        aria-label="Italic"
                    >
                        <Italic className="w-4 h-4" />
                    </Toggle>

                    <Toggle
                        pressed={formatState.strike}
                        onPressedChange={() => toggleFormat('strike')}
                        size="sm"
                        aria-label="Strikethrough"
                    >
                        <Strikethrough className="w-4 h-4" />
                    </Toggle>

                    <Toggle
                        pressed={formatState.code}
                        onPressedChange={() => toggleFormat('code')}
                        size="sm"
                        aria-label="Inline Code"
                    >
                        <Code className="w-4 h-4" />
                    </Toggle>

                    <Separator orientation="vertical" className="h-6" />

                    <Toggle
                        pressed={formatState.bulletList}
                        onPressedChange={() => toggleFormat('bulletList')}
                        size="sm"
                        aria-label="Bullet List"
                    >
                        <List className="w-4 h-4" />
                    </Toggle>

                    <Toggle
                        pressed={formatState.orderedList}
                        onPressedChange={() => toggleFormat('orderedList')}
                        size="sm"
                        aria-label="Ordered List"
                    >
                        <ListOrdered className="w-4 h-4" />
                    </Toggle>

                    <Toggle
                        pressed={formatState.blockquote}
                        onPressedChange={() => toggleFormat('blockquote')}
                        size="sm"
                        aria-label="Blockquote"
                    >
                        <Quote className="w-4 h-4" />
                    </Toggle>

                    <Separator orientation="vertical" className="h-6" />

                    {/* Code Block Modal */}
                    <Dialog open={codeModalOpen} onOpenChange={setCodeModalOpen}>
                        <DialogTrigger asChild>
                            <Toggle
                                pressed={formatState.codeBlock}
                                size="sm"
                                aria-label="Code Block"
                            >
                                <Code2 className="w-4 h-4" />
                            </Toggle>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
                            <DialogHeader>
                                <DialogTitle>Insert Code Block</DialogTitle>
                                <DialogDescription>
                                    Add a code block with syntax highlighting
                                </DialogDescription>
                            </DialogHeader>

                            <div className="space-y-4 flex-1 overflow-hidden flex flex-col">
                                <div className="space-y-2">
                                    <Label htmlFor="language-select">Programming Language</Label>
                                    <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a language" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {PROGRAMMING_LANGUAGES.map((lang) => (
                                                <SelectItem key={lang.value} value={lang.value}>
                                                    <div className="flex items-center gap-2">
                                                        <span>{lang.icon}</span>
                                                        <span>{lang.label}</span>
                                                    </div>
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2 flex-1 flex flex-col">
                                    <Label htmlFor="code-content">Code (Optional)</Label>
                                    <textarea
                                        id="code-content"
                                        value={codeContent}
                                        onChange={(e) => setCodeContent(e.target.value)}
                                        placeholder={`// Write your ${PROGRAMMING_LANGUAGES.find(l => l.value === selectedLanguage)?.label} code here...\nconsole.log('Hello World!');`}
                                        className="flex-1 min-h-[200px] p-3 border border-border rounded-md font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                                        // ✅ ROBUST NEWLINE PRESERVATION
                                        wrap="off"
                                        spellCheck={false}
                                        autoComplete="off"
                                        rows={12}
                                        style={{
                                            whiteSpace: 'pre',
                                            fontFamily: 'ui-monospace, "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
                                            tabSize: 4,
                                            lineHeight: '1.6',
                                            // wordWrap: '',
                                            overflowWrap: 'normal'
                                        }}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Tab') {
                                                e.preventDefault();
                                                const textarea = e.currentTarget;
                                                const { selectionStart, selectionEnd } = textarea;
                                                const newValue = codeContent.substring(0, selectionStart) +
                                                    '    ' + // 4 spaces for proper indentation
                                                    codeContent.substring(selectionEnd);
                                                setCodeContent(newValue);
                                                // Set cursor position properly
                                                requestAnimationFrame(() => {
                                                    textarea.selectionStart = textarea.selectionEnd = selectionStart + 4;
                                                });
                                            }
                                        }}
                                    />
                                    <p className="text-xs text-muted-foreground">
                                        Leave empty to create an empty code block
                                    </p>
                                </div>

                                <Button
                                    type="button"
                                    onClick={handleInsertCodeBlock}
                                    className="w-full"
                                >
                                    <Code2 className="w-4 h-4 mr-2" />
                                    Insert Code Block
                                </Button>
                            </div>
                        </DialogContent>
                    </Dialog>

                    {/* Image Upload Modal */}
                    <Dialog open={imageModalOpen} onOpenChange={setImageModalOpen}>
                        <DialogTrigger asChild>
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                aria-label="Add Image"
                            >
                                <ImageIcon className="w-4 h-4" />
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                                <DialogTitle>Add Image</DialogTitle>
                                <DialogDescription>
                                    Upload an image file or provide an image URL
                                </DialogDescription>
                            </DialogHeader>

                            <TabsImplementation defaultValue="upload">
                                <TabsList>
                                    <TabsTrigger value="upload">Upload File</TabsTrigger>
                                    <TabsTrigger value="url">Image URL</TabsTrigger>
                                </TabsList>

                                <TabsContent value="upload">
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="image-upload">Select Image</Label>
                                            <input
                                                ref={fileInputRef}
                                                type="file"
                                                id="image-upload"
                                                accept="image/*"
                                                onChange={handleFileUpload}
                                                className="hidden"
                                            />
                                            <Button
                                                type="button"
                                                variant="outline"
                                                onClick={() => fileInputRef.current?.click()}
                                                className="w-full"
                                            >
                                                <Upload className="w-4 h-4 mr-2" />
                                                Choose File
                                            </Button>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="image-alt-upload">Alt Text (Optional)</Label>
                                            <Input
                                                id="image-alt-upload"
                                                value={imageAlt}
                                                onChange={(e) => setImageAlt(e.target.value)}
                                                placeholder="Image description"
                                            />
                                        </div>
                                    </div>
                                </TabsContent>

                                <TabsContent value="url">
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="image-url">Image URL</Label>
                                            <Input
                                                id="image-url"
                                                value={imageUrl}
                                                onChange={(e) => setImageUrl(e.target.value)}
                                                placeholder="https://example.com/image.jpg"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="image-alt-url">Alt Text (Optional)</Label>
                                            <Input
                                                id="image-alt-url"
                                                value={imageAlt}
                                                onChange={(e) => setImageAlt(e.target.value)}
                                                placeholder="Image description"
                                            />
                                        </div>

                                        <Button
                                            type="button"
                                            onClick={handleImageUrl}
                                            disabled={!imageUrl}
                                            className="w-full"
                                        >
                                            <Globe className="w-4 h-4 mr-2" />
                                            Add Image
                                        </Button>
                                    </div>
                                </TabsContent>
                            </TabsImplementation>
                        </DialogContent>
                    </Dialog>

                    {/* Link Modal */}
                    <Dialog open={linkModalOpen} onOpenChange={setLinkModalOpen}>
                        <DialogTrigger asChild>
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                aria-label="Add Link"
                            >
                                <LinkIcon className="w-4 h-4" />
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                                <DialogTitle>Add Link</DialogTitle>
                                <DialogDescription>
                                    Add a hyperlink to your content
                                </DialogDescription>
                            </DialogHeader>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="link-url">URL *</Label>
                                    <Input
                                        id="link-url"
                                        value={linkUrl}
                                        onChange={(e) => setLinkUrl(e.target.value)}
                                        placeholder="https://example.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="link-text">Link Text (Optional)</Label>
                                    <Input
                                        id="link-text"
                                        value={linkText}
                                        onChange={(e) => setLinkText(e.target.value)}
                                        placeholder="Click here"
                                    />
                                    <p className="text-xs text-muted-foreground">
                                        Leave empty to use URL as link text, or apply to selected text
                                    </p>
                                </div>

                                <Button
                                    type="button"
                                    onClick={handleAddLink}
                                    disabled={!linkUrl}
                                    className="w-full"
                                >
                                    <LinkIcon className="w-4 h-4 mr-2" />
                                    Add Link
                                </Button>
                            </div>
                        </DialogContent>
                    </Dialog>

                    <Separator orientation="vertical" className="h-6" />

                    <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => editor?.chain().focus().undo().run()}
                        disabled={!editor?.can().undo()}
                        aria-label="Undo"
                    >
                        <Undo className="w-4 h-4" />
                    </Button>

                    <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => editor?.chain().focus().redo().run()}
                        disabled={!editor?.can().redo()}
                        aria-label="Redo"
                    >
                        <Redo className="w-4 h-4" />
                    </Button>
                </div>

                {/* ✅ Show Showdown conversion status */}
                {/* <div className="flex items-center justify-between text-xs text-muted-foreground border-t pt-2">
                    <span>Current mode: <strong>{mode.toUpperCase()}</strong> • Engine: <strong>Showdown</strong></span>
                    <span>
                        Content will be saved as: <strong>{mode === 'html' ? '[html]' : '[md]'}</strong>
                    </span>
                </div> */}
            </div>

            {/* Editor Content */}
            <EditorContent editor={editor} className="min-h-[300px]" />
        </div>
    );
};

export default RichTextEditor;
