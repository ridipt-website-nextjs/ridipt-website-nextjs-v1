// components/job-details/PerksSection.tsx
import React from 'react';
import { Star } from 'lucide-react';

interface PerksSectionProps {
  perks: string[];
}

const PerksSection: React.FC<PerksSectionProps> = ({ perks }) => {
    if (!perks || !perks.length) return null;

    return (
        <section className="bg-card rounded-2xl border border-border/50 p-6">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-orange-50 dark:bg-orange-900/20 rounded-xl flex items-center justify-center">
                    <Star className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">
                    Additional Perks
                </h2>
            </div>

            <ul className="space-y-3">
                {perks.map((perk: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                        <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">
                            {perk}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default PerksSection;
