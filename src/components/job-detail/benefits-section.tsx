// components/job-details/BenefitsSection.tsx
import React from 'react';
import { CheckCircle, Award } from 'lucide-react';

interface BenefitsSectionProps {
  benefits: string[];
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ benefits }) => {
    if (!benefits || !benefits.length) return null;

    return (
        <section className="bg-card rounded-2xl border border-border/50 p-6">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                    <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">
                    Benefits Package
                </h2>
            </div>

            <ul className="space-y-3">
                {benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">
                            {benefit}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default BenefitsSection;
