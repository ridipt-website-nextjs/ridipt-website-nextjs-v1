
import React from 'react';
import { CheckCircle, GraduationCap } from 'lucide-react';

interface QualificationsSectionProps {
  qualifications: string[];
}

const QualificationsSection: React.FC<QualificationsSectionProps> = ({ qualifications }) => {
    if (!qualifications || !qualifications.length) return null;

    return (
        <section className="bg-card rounded-2xl border border-border/50 p-6">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-50 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">
                    Qualifications Required
                </h2>
            </div>

            <ul className="space-y-3">
                {qualifications.map((qualification: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">
                            {qualification}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default QualificationsSection;
