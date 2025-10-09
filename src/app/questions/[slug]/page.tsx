// app/questions/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    ArrowLeft,
    CheckCircle2,
    AlertTriangle,
    Lightbulb,
    TrendingUp,
    XCircle,
    Code,
    ArrowRight,
    Sparkles
} from 'lucide-react';
import Link from 'next/link';
import Section from '@/components/section-structure';
import { Button } from '@/components/ui/button';
import { questionsData } from '@/config/content/security/question.content';

export function generateStaticParams() {
    return questionsData.map((q) => ({
        slug: q.slug,
    }));
}

export async function generateMetadata({ params }: any ) {
    const { slug } = await params;
    const question = questionsData.find((q) => q.slug === slug);

    if (!question) {
        return {
            title: 'Question Not Found',
        };
    }

    return {
        title: question.title,
        description: question.shortDescription,
    };
}

export default async function QuestionDetailPage({ params }: any ) {
    const { slug } = await params;
    const question = questionsData.find((q) => q.slug === slug);

    if (!question) {
        notFound();
    }

    const IconComponent = question.icon;

    return (
        <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
            <Section className="mt-8 sm:mt-12 !w-full !relative">
                <div className="container max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                    {/* Back Navigation */}
                    <Button
                        variant="ghost"
                        asChild
                        className="mb-8 group hover:bg-primary/10"
                    >
                        <Link href="/" className="inline-flex items-center gap-2">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Back to All Questions
                        </Link>
                    </Button>

                    {/* Header Section with improved design */}
                    <div className="mb-12 relative">
                        {/* Background decoration */}
                        <div className="absolute -top-10 -left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
                        <div className="absolute -bottom-10 hidden md:block -right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl -z-10" />

                        <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
                            <div className="p-5 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent shadow-xl shadow-primary/10 border border-primary/20">
                                <IconComponent className="w-12 h-12 text-primary" />
                            </div>

                            <div className="flex-1">
                                <Badge
                                    variant="secondary"
                                    className="mb-4 text-sm px-4 py-1.5 bg-primary/10 text-primary border-primary/20"
                                >
                                    {question.category}
                                </Badge>

                                <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
                                    {question.title}
                                </h1>

                                <p className="text-xl text-muted-foreground leading-relaxed">
                                    {question.shortDescription}
                                </p>
                            </div>
                        </div>
                    </div>

                    <Separator className="my-10" />

                    {/* Overview Section with better styling */}
                    <div className="prose prose-slate dark:prose-invert max-w-none">
                        <Card className="mb-10 border-primary/20 bg-gradient-to-br from-primary/5 via-background to-background shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <Sparkles className="w-6 h-6 text-primary" />
                                    </div>
                                    Overview
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    {question.content.overview}
                                </p>
                            </CardContent>
                        </Card>

                        {/* Key Points with improved design */}
                        {question.content.keyPoints && question.content.keyPoints.length > 0 && (
                            <Card className="mb-10 border-primary/20 shadow-lg overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 rounded-full via-primary to-primary/50" />
                                <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
                                    <CardTitle className="flex items-center gap-2">
                                        <Lightbulb className="w-6 h-6 text-primary" />
                                        Key Takeaways
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    <div className="grid gap-4">
                                        {question.content.keyPoints.map((point, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                                            >
                                                <div className="p-1.5 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                                </div>
                                                <span className="text-muted-foreground leading-relaxed flex-1">{point}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        )}

                        {/* Main Sections with improved spacing and design */}
                        {question.content.sections.map((section, index) => (
                            <div key={index} className="mb-16 scroll-mt-20" id={`section-${index}`}>
                                <div className="flex items-start gap-4 mb-6 group">
                                    <span className="text-5xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <h2 className="text-3xl font-bold mt-2 leading-tight">
                                        {section.heading}
                                    </h2>
                                </div>

                                <div className="pl-0 sm:pl-16 space-y-6">
                                    <p className="text-lg leading-relaxed text-muted-foreground">
                                        {section.content}
                                    </p>

                                    {/* Warning  */}
                                    {section.warning && (
                                        <Card className="border-destructive/30 bg-destructive/5 shadow-lg">
                                            <CardContent className="pt-6">
                                                <div className="flex items-start gap-4">
                                                    <div className="p-2 rounded-lg bg-destructive/10">
                                                        <AlertTriangle className="w-6 h-6 text-destructive" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <p className="font-semibold text-destructive mb-2 text-lg">⚠️ Warning</p>
                                                        <p className="text-muted-foreground leading-relaxed">{section.warning}</p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    )}

                                    {/* Tip  */}
                                    {section.tip && (
                                        <Card className="border-primary/30 bg-primary/5 shadow-lg">
                                            <CardContent className="pt-6">
                                                <div className="flex items-start gap-4">
                                                    <div className="p-2 rounded-lg bg-primary/10">
                                                        <Lightbulb className="w-6 h-6 text-primary" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <p className="font-semibold text-primary mb-2 text-lg">💡 Pro Tip</p>
                                                        <p className="text-muted-foreground leading-relaxed">{section.tip}</p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    )}

                                    {/* Points List  */}
                                    {section.points && section.points.length > 0 && (
                                        <div className="space-y-3">
                                            {section.points.map((point, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-r from-muted/50 to-transparent hover:from-muted hover:shadow-md transition-all group border border-transparent hover:border-primary/20"
                                                >
                                                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                                    <span className="text-muted-foreground leading-relaxed">{point}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Sub Sections - */}
                                    {section.subSections && section.subSections.length > 0 && (
                                        <div className="space-y-6">
                                            {section.subSections.map((subSection, subIdx) => (
                                                <Card key={subIdx} className="border-l-4 border-primary/40 hover:border-primary/40 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg ">
                                                    <CardHeader>
                                                        <CardTitle className="text-xl">{subSection.title}</CardTitle>
                                                    </CardHeader>
                                                    <CardContent>
                                                        <p className="text-muted-foreground mb-4 leading-relaxed">{subSection.description}</p>
                                                        {subSection.items && subSection.items.length > 0 && (
                                                            <ul className="space-y-3 !list-none">
                                                                {subSection.items.map((item, itemIdx) => (
                                                                    <li key={itemIdx} className="flex items-start gap-3 !flex-row text-sm group">
                                                                        <div className='flex items-center gap-3'>
                                                                            <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                                                                            <span className="text-muted-foreground leading-relaxed">{item}</span>
                                                                        </div>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </CardContent>
                                                </Card>
                                            ))}
                                        </div>
                                    )}

                                    {/* Code Block  */}
                                    {section.code && (
                                        <Card className="overflow-hidden border-primary/20 shadow-lg">
                                            {section.code.description && (
                                                <CardHeader className="bg-muted/50">
                                                    <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                                                        <Code className="w-4 h-4 text-primary" />
                                                        {section.code.description}
                                                    </div>
                                                </CardHeader>
                                            )}
                                            <CardContent className="p-0">
                                                <pre className="bg-slate-950 text-slate-50 p-6 overflow-x-auto m-0">
                                                    <code className={`language-${section.code.language} text-sm leading-relaxed`}>
                                                        {section.code.snippet}
                                                    </code>
                                                </pre>
                                            </CardContent>
                                        </Card>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Recommendations - improved grid layout */}
                        {question.content.recommendations && question.content.recommendations.length > 0 && (
                            <Card className="mb-10 border-primary/30 bg-gradient-to-br from-primary/5 via-background to-background shadow-xl overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 rounded-full via-primary/40 to-primary/40" />
                                <CardHeader className="pb-6">
                                    <CardTitle className="text-2xl font-bold flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-primary/10">
                                            <CheckCircle2 className="w-6 h-6 text-primary" />
                                        </div>
                                        Recommendations
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-8">
                                        {question.content.recommendations.map((recGroup, idx) => (
                                            <div key={idx}>
                                                <h3 className="text-lg font-bold mb-4 text-primary flex items-center gap-2">
                                                    <span className="w-2 h-2 rounded-full bg-primary" />
                                                    {recGroup.category}
                                                </h3>
                                                <ul className="space-y-3 !list-none">
                                                    {recGroup.items.map((item, itemIdx) => (
                                                        <li key={itemIdx} className="flex items-start gap-3 group">
                                                            <div className='flex items-start gap-3'>
                                                                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                                                <span className="text-muted-foreground leading-relaxed">{item}</span>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        )}

                        {/* Best Practices - improved card design */}
                        {question.content.bestPractices && question.content.bestPractices.length > 0 && (
                            <Card className="mb-10 border-green-500/30 bg-green-500/5 shadow-lg">
                                <CardHeader className="bg-green-500/5">
                                    <CardTitle className="flex items-center gap-3 text-green-700 dark:text-green-400">
                                        <CheckCircle2 className="w-6 h-6" />
                                        Best Practices
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    <div className="grid gap-3">
                                        {question.content.bestPractices.map((practice, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-start gap-4 p-4 rounded-lg bg-green-500/5 hover:bg-green-500/10 transition-colors group border border-green-500/10"
                                            >
                                                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                                <span className="text-muted-foreground leading-relaxed">{practice}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        )}

                        {/* Common Mistakes - improved card design */}
                        {question.content.commonMistakes && question.content.commonMistakes.length > 0 && (
                            <Card className="mb-10 border-destructive/30 bg-destructive/5 shadow-lg">
                                <CardHeader className="bg-destructive/5">
                                    <CardTitle className="flex items-center gap-3 text-destructive">
                                        <XCircle className="w-6 h-6" />
                                        Common Mistakes to Avoid
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    <div className="grid gap-3">
                                        {question.content.commonMistakes.map((mistake, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-start gap-4 p-4 rounded-lg bg-destructive/5 hover:bg-destructive/10 transition-colors group border border-destructive/10"
                                            >
                                                <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                                <span className="text-muted-foreground leading-relaxed">{mistake}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        )}

                        {/* Real World Examples - 2 column grid */}
                        {question.content.realWorldExamples && question.content.realWorldExamples.length > 0 && (
                            <div className="mb-10">
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-primary/10">
                                        <TrendingUp className="w-6 h-6 text-primary" />
                                    </div>
                                    Real-World Examples
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {question.content.realWorldExamples.map((example, idx) => (
                                        <Card
                                            key={idx}
                                            className="border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all group"
                                        >
                                            <CardHeader>
                                                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                                                    {example.title}
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                                    {example.description}
                                                </p>
                                                {example.techStack && example.techStack.length > 0 && (
                                                    <div className="flex flex-wrap gap-2">
                                                        {example.techStack.map((tech, techIdx) => (
                                                            <Badge
                                                                key={techIdx}
                                                                variant="outline"
                                                                className="text-xs hover:bg-primary/10 transition-colors"
                                                            >
                                                                {tech}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                )}
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Conclusion  */}
                        <Card className="mb-10 border-l-4 border-primary/40 shadow-xl bg-gradient-to-r from-primary/5 to-background">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold">Conclusion</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg leading-relaxed text-muted-foreground">
                                    {question.content.conclusion}
                                </p>
                            </CardContent>
                        </Card>

                        {/* Next Steps - improved numbered list */}
                        {question.content.nextSteps && question.content.nextSteps.length > 0 && (
                            <Card className="border-primary/20 shadow-xl">
                                <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
                                    <CardTitle className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-primary/10">
                                            <ArrowRight className="w-6 h-6 text-primary" />
                                        </div>
                                        Next Steps
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    <ol className="space-y-4 !list-none">
                                        {question.content.nextSteps.map((step, idx) => (
                                            <li key={idx} className="flex items-start gap-4 group">
                                                <div className='flex items-start gap-4'>

                                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/70 text-primary-foreground text-sm font-bold flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                                                        {idx + 1}
                                                    </span>
                                                    <span className="text-muted-foreground pt-1 leading-relaxed">{step}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ol>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </div>
            </Section>
        </div>
    );
}
