// components/job-details/JobSidebar.tsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone } from 'lucide-react';
import { JobData } from '@/config/interface';

interface JobSidebarProps {
  data: JobData;
  onApplyNow: () => void;
}

const JobSidebar: React.FC<JobSidebarProps> = ({ data, onApplyNow }) => {
    const handleShare = (): void => {
        if (navigator.share) {
            navigator.share({
                title: data.title,
                text: data.description,
                url: window.location.href
            }).catch(() => {
                navigator.clipboard.writeText(window.location.href);
            });
        } else {
            navigator.clipboard.writeText(window.location.href);
        }
    };

    return (
        <div className="space-y-6">
            {/* Quick Apply Card */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/5 rounded-2xl border border-primary/20 p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                    Ready to Apply?
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                    Join our team and be part of something amazing. We're excited to hear from you!
                </p>

                <Button
                    onClick={onApplyNow}
                    className="w-full mb-4"
                    size="lg"
                >
                    Apply for this Position
                </Button>

                <div className="space-y-3 pt-4 border-t border-border/30">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Mail className="w-4 h-4" />
                        <span>hr@company.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Phone className="w-4 h-4" />
                        <span>+1 (555) 123-4567</span>
                    </div>
                </div>
            </div>

            {/* Job Stats */}
            <div className="bg-card rounded-2xl border border-border/50 p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                    Job Details
                </h3>

                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Job Type</span>
                        <Badge variant="outline">{data.type}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Location</span>
                        <Badge variant="outline">{data.location}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Department</span>
                        <Badge variant="outline">{data.department}</Badge>
                    </div>
                    {data.experience && (
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Experience</span>
                            <Badge variant="outline">{data.experience.yearsRequired}</Badge>
                        </div>
                    )}
                    {data.salary && (
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">Salary Range</span>
                            <span className="text-sm font-medium text-foreground">
                                ${data.salary.min}k - ${data.salary.max}k
                            </span>
                        </div>
                    )}
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Posted</span>
                        <span className="text-sm text-foreground">2 days ago</span>
                    </div>
                </div>
            </div>

            {/* Share Job */}
            <div className="bg-card rounded-2xl border border-border/50 p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                    Share this Job
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                    Know someone who'd be perfect for this role?
                </p>
                <Button
                    variant="outline"
                    className="w-full text-accent-foreground"
                    onClick={handleShare}
                >
                    Share Job
                </Button>
            </div>
        </div>
    );
};

export default JobSidebar;
