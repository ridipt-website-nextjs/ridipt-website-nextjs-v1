// components/job-details/SkillsSection.tsx
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Target, Code } from 'lucide-react';
import { JobData } from '@/config/interface';

interface SkillsSectionProps {
  data: JobData;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ data }) => {
    if (!data.requiredSkills && !data.technicalSkills) return null;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Required Skills */}
            {data.requiredSkills && (
                <section className="bg-card rounded-2xl border border-border/50 p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-purple-50 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                            <Target className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">
                            Core Skills
                        </h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                        {data.requiredSkills.map((skill: string, index: number) => (
                            <Badge key={index} variant="outline" className="text-xs">
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </section>
            )}

            {/* Technical Skills */}
            {data.technicalSkills && (
                <section className="bg-card rounded-2xl border border-border/50 p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl flex items-center justify-center">
                            <Code className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">
                            Technical Skills
                        </h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                        {data.technicalSkills.map((skill: string, index: number) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default SkillsSection;
