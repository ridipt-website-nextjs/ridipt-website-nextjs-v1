// components/job-details/GrowthOpportunitiesSection.tsx
import React from 'react';
import { TrendingUp } from 'lucide-react';

interface GrowthOpportunitiesSectionProps {
  growthOpportunities: string[];
}

const GrowthOpportunitiesSection: React.FC<GrowthOpportunitiesSectionProps> = ({ growthOpportunities }) => {
    if (!growthOpportunities || !growthOpportunities.length) return null;

    return (
        <section className="bg-card rounded-2xl border border-border/50 p-6">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-50 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">
                    Growth Opportunities
                </h2>
            </div>

            <ul className="space-y-3">
                {growthOpportunities.map((opportunity: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">
                            {opportunity}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default GrowthOpportunitiesSection;
