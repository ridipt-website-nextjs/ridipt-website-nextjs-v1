// components/job-details/ChallengesSection.tsx
import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface ChallengesSectionProps {
  challenges: string[];
}

const ChallengesSection: React.FC<ChallengesSectionProps> = ({ challenges }) => {
    if (!challenges || !challenges.length) return null;

    return (
        <section className="bg-card rounded-2xl border border-border/50 p-6">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-50 dark:bg-red-900/20 rounded-xl flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">
                    Role Challenges
                </h2>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
                Being transparent about the challenges helps set realistic expectations.
            </p>

            <ul className="space-y-3">
                {challenges.map((challenge: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">
                            {challenge}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ChallengesSection;
