// components/job-details/WorkEnvironmentSection.tsx
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Settings } from 'lucide-react';
import { JobWorkEnvironment } from '@/config/interface';

interface WorkEnvironmentSectionProps {
  workEnvironment: JobWorkEnvironment;
}

const WorkEnvironmentSection: React.FC<WorkEnvironmentSectionProps> = ({ workEnvironment }) => {
    if (!workEnvironment) return null;

    return (
        <section className="bg-card rounded-2xl border border-border/50 p-6">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-teal-50 dark:bg-teal-900/20 rounded-xl flex items-center justify-center">
                    <Settings className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">
                    Work Environment
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                    <div>
                        <span className="text-sm font-medium text-foreground">Culture:</span>
                        <p className="text-sm text-muted-foreground">{workEnvironment.culture}</p>
                    </div>
                    <div>
                        <span className="text-sm font-medium text-foreground">Team Size:</span>
                        <p className="text-sm text-muted-foreground">{workEnvironment.teamSize}</p>
                    </div>
                    <div>
                        <span className="text-sm font-medium text-foreground">Reports To:</span>
                        <p className="text-sm text-muted-foreground">{workEnvironment.reportingTo}</p>
                    </div>
                </div>
                <div className="space-y-3">
                    <div>
                        <span className="text-sm font-medium text-foreground">Work Style:</span>
                        <p className="text-sm text-muted-foreground">{workEnvironment.workStyle}</p>
                    </div>
                    <div>
                        <span className="text-sm font-medium text-foreground">Collaborates With:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                            {workEnvironment.collaboratesWith.map((team: string, index: number) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                    {team}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkEnvironmentSection;
