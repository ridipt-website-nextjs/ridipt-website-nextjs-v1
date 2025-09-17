'use client';
import React, { useState, useRef, useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { Markdown } from 'tiptap-markdown';

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

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Toggle } from '@/components/ui/toggle';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import {
    Bold, Italic, Underline, Strikethrough, Code, Code2,
    List, ListOrdered, Quote, Undo, Redo,
    Image as ImageIcon, Link as LinkIcon, Upload, Globe
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';

// Create lowlight instance
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

// TypeScript interface for Markdown storage - FIXED
interface MarkdownStorage {
    getMarkdown: () => string;
    options: any;
}

// Extend the Storage interface - FIXED
interface CustomEditorStorage {
    markdown?: MarkdownStorage;
}

interface RichTextEditorProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

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
    });

    // Clean content function
    const cleanContent = (content: string) => {
        return content.replace(/^\[html\]\s*|^\[md\]\s*/i, '').trim();
    };

    // Add prefix function
    const addPrefix = (content: string) => {
        const cleaned = cleanContent(content);
        if (!cleaned) return '';
        return mode === 'html' ? `[html] ${cleaned}` : `[md] ${cleaned}`;
    };

    // Safe markdown content getter - FIXED
    const getMarkdownContent = () => {
        if (!editor) return '';
        
        const storage = editor.storage as CustomEditorStorage;
        if (storage.markdown && typeof storage.markdown.getMarkdown === 'function') {
            return storage.markdown.getMarkdown();
        }
        
        // Fallback: try direct access with type assertion
        try {
            return (editor.storage as any).markdown?.getMarkdown?.() || '';
        } catch (error) {
            console.warn('Could not get markdown content:', error);
            return '';
        }
    };

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                bulletList: false,
                orderedList: false,
                listItem: false,
                codeBlock: false,
            }),
            BulletList.configure({
                HTMLAttributes: { class: 'tiptap-bullet-list' },
                keepMarks: true,
                keepAttributes: true,
            }),
            OrderedList.configure({
                HTMLAttributes: { class: 'tiptap-ordered-list' },
                keepMarks: true,
                keepAttributes: true,
            }),
            ListItem.configure({
                HTMLAttributes: { class: 'tiptap-list-item' },
            }),
            CodeBlockLowlight.configure({
                lowlight,
                defaultLanguage: 'plaintext',
                HTMLAttributes: {
                    class: 'tiptap-code-block',
                },
                languageClassPrefix: 'language-',
            }),
            Image.configure({
                HTMLAttributes: {
                    class: 'max-w-full h-auto rounded-lg',
                },
            }),
            Link.configure({
                openOnClick: false,
                HTMLAttributes: {
                    class: 'text-blue-600 underline cursor-pointer',
                },
                protocols: ['http', 'https', 'mailto'],
            }),
            Markdown.configure({
                html: true,
                tightLists: true,
                tightListClass: 'tight',
                bulletListMarker: '-',
                linkify: false,
                breaks: false,
                transformPastedText: true,
                transformCopiedText: true,
            }),
        ],
        content: cleanContent(value),
        immediatelyRender: false,
        autofocus: true,
        onUpdate: ({ editor }) => {
            updateFormatState();
            
            // Safe content retrieval - FIXED
            const content = mode === 'html' 
                ? editor.getHTML() 
                : getMarkdownContent();
            
            const prefixedContent = addPrefix(content);
            onChange(prefixedContent);
        },
        onSelectionUpdate: ({ editor }) => {
            updateFormatState();
        },
        editorProps: {
            attributes: {
                class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[300px] p-4 rich-text-content',
            },
        },
    });

    const updateFormatState = () => {
        if (editor) {
            setFormatState({
                bold: editor.isActive('bold'),
                italic: editor.isActive('italic'),
                strike: editor.isActive('strike'),
                code: editor.isActive('code'),
                bulletList: editor.isActive('bulletList'),
                orderedList: editor.isActive('orderedList'),
                blockquote: editor.isActive('blockquote'),
                codeBlock: editor.isActive('codeBlock'),
            });
        }
    };

    useEffect(() => {
        if (editor) {
            updateFormatState();
        }
    }, [editor]);

    useEffect(() => {
        if (editor && value) {
            const currentContent = mode === 'html' 
                ? editor.getHTML() 
                : getMarkdownContent();
            const prefixedContent = addPrefix(currentContent);
            onChange(prefixedContent);
        }
    }, [mode, editor]);

    if (!editor) return null;

    const handleModeChange = (newMode: 'html' | 'markdown') => {
        setMode(newMode);
    };

    const toggleFormat = (format: keyof typeof formatState) => {
        switch (format) {
            case 'bold':
                editor.chain().focus().toggleBold().run();
                setFormatState(prev => ({ ...prev, bold: !prev.bold }));
                break;
            case 'italic':
                editor.chain().focus().toggleItalic().run();
                setFormatState(prev => ({ ...prev, italic: !prev.italic }));
                break;
            case 'strike':
                editor.chain().focus().toggleStrike().run();
                setFormatState(prev => ({ ...prev, strike: !prev.strike }));
                break;
            case 'code':
                editor.chain().focus().toggleCode().run();
                setFormatState(prev => ({ ...prev, code: !prev.code }));
                break;
            case 'bulletList':
                editor.chain().focus().toggleBulletList().run();
                setFormatState(prev => ({ ...prev, bulletList: !prev.bulletList }));
                break;
            case 'orderedList':
                editor.chain().focus().toggleOrderedList().run();
                setFormatState(prev => ({ ...prev, orderedList: !prev.orderedList }));
                break;
            case 'blockquote':
                editor.chain().focus().toggleBlockquote().run();
                setFormatState(prev => ({ ...prev, blockquote: !prev.blockquote }));
                break;
        }
    };

    const handleInsertCodeBlock = () => {
        if (codeContent.trim()) {
            editor.chain()
                .focus()
                .insertContent({
                    type: 'codeBlock',
                    attrs: { language: selectedLanguage },
                    content: [{ type: 'text', text: codeContent }]
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

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const base64 = reader.result as string;
                editor.chain().focus().setImage({ 
                    src: base64, 
                    alt: imageAlt || file.name 
                }).run();
                setImageModalOpen(false);
                setImageUrl('');
                setImageAlt('');
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageUrl = () => {
        if (imageUrl) {
            editor.chain().focus().setImage({ 
                src: imageUrl, 
                alt: imageAlt || 'Image' 
            }).run();
            setImageModalOpen(false);
            setImageUrl('');
            setImageAlt('');
        }
    };

    const handleAddLink = () => {
        if (linkUrl) {
            const { from, to } = editor.state.selection;
            const hasSelection = from !== to;
            
            if (linkText) {
                editor.chain()
                    .focus()
                    .insertContent(`<a href="${linkUrl}">${linkText}</a>`)
                    .run();
            } else if (hasSelection) {
                editor.chain()
                    .focus()
                    .setLink({ href: linkUrl })
                    .run();
            } else {
                editor.chain()
                    .focus()
                    .insertContent(`<a href="${linkUrl}">${linkUrl}</a>`)
                    .run();
            }
            
            setLinkModalOpen(false);
            setLinkUrl('');
            setLinkText('');
        }
    };

    return (
        <div className="border border-border rounded-md">
            {/* Mode Toggle & Output Format */}
            <div className="border-b border-border p-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Label className="text-sm font-medium">Output Format:</Label>
                    <div className="flex gap-1">
                        <Button
                            type="button"
                            variant={mode === 'html' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => handleModeChange('html')}
                        >
                            HTML
                        </Button>
                        <Button
                            type="button"
                            variant={mode === 'markdown' ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => handleModeChange('markdown')}
                        >
                            Markdown
                        </Button>
                    </div>
                </div>
                
                <Badge variant="secondary" className="text-xs">
                    {mode === 'html' ? '[html] HTML Mode' : '[md] Markdown Mode'}
                </Badge>
            </div>

            {/* Toolbar with Toggle Buttons */}
            <div className="border-b border-border p-2 flex flex-wrap items-center gap-1">
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
                        
                        <Tabs defaultValue="upload" className="w-full">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="upload">Upload File</TabsTrigger>
                                <TabsTrigger value="url">Image URL</TabsTrigger>
                            </TabsList>
                            
                            <TabsContent value="upload" className="space-y-4">
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
                            </TabsContent>
                            
                            <TabsContent value="url" className="space-y-4">
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
                            </TabsContent>
                        </Tabs>
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
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={!editor.can().undo()}
                    aria-label="Undo"
                >
                    <Undo className="w-4 h-4" />
                </Button>

                <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={!editor.can().redo()}
                    aria-label="Redo"
                >
                    <Redo className="w-4 h-4" />
                </Button>
            </div>

            {/* Editor Content */}
            <EditorContent editor={editor} className="min-h-[300px]" />
        </div>
    );
};

export default RichTextEditor;
