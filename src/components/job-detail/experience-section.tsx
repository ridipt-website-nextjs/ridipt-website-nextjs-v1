
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Briefcase, BookOpen } from 'lucide-react';
import { JobData } from '@/config/interface';

interface ExperienceEducationSectionProps {
  data: JobData;
}

const ExperienceEducationSection: React.FC<ExperienceEducationSectionProps> = ({ data }) => {
    if (!data.experience && !data.education) return null;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Experience Requirements */}
            {data.experience && (
                <section className="bg-card rounded-2xl border border-border/50 p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-green-50 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
                            <Briefcase className="w-5 h-5 text-green-600 dark:text-green-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">
                            Experience Required
                        </h3>
                    </div>
                    
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Level</span>
                            <Badge variant="outline">{data.experience.level}</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Years</span>
                            <span className="text-sm text-muted-foreground font-medium">{data.experience.yearsRequired}</span>
                        </div>
                        
                        {data.experience.specificExperience && (
                            <div>
                                <p className="text-sm text-muted-foreground mb-2">Key Areas:</p>
                                <div className="flex flex-wrap gap-1">
                                    {data.experience.specificExperience.map((exp: string, index: number) => (
                                        <Badge key={index} variant="secondary" className="text-xs">
                                            {exp}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* Education Requirements */}
            {data.education && (
                <section className="bg-card rounded-2xl border border-border/50 p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                            <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">
                            Education
                        </h3>
                    </div>
                    
                    <div className="space-y-3">
                        <div>
                            <p className="text-sm font-medium text-foreground mb-1">{data.education.degree}</p>
                            <div className="flex flex-wrap gap-1">
                                {data.education.fields.map((field: string, index: number) => (
                                    <Badge key={index} variant="secondary" className="text-xs">
                                        {field}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                        
                        {data.education.alternatives && (
                            <div className="pt-2 border-t border-border/30">
                                <p className="text-xs text-muted-foreground">
                                    <span className="font-medium">Alternative:</span> {data.education.alternatives}
                                </p>
                            </div>
                        )}
                        
                        {data.education.preferred && (
                            <div className="pt-2">
                                <p className="text-xs text-green-600 dark:text-green-400">
                                    <span className="font-medium">Preferred:</span> {data.education.preferred}
                                </p>
                            </div>
                        )}
                    </div>
                </section>
            )}
        </div>
    );
};

export default ExperienceEducationSection;
