
'use client'
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, Building2, Calendar, DollarSign, Briefcase } from 'lucide-react';
import { JobData } from '@/config/interface';
import { AVAILABLE_ICONS as ICON_COMPONENTS } from '@/config/constant';
import { isAdminUser } from '@/lib/helper-functions';


interface HeaderSectionProps {
    data: JobData;
    onApplyNow: () => void;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ data, onApplyNow, }) => {
    const [isAdmin, setIsAdmin] = useState(false)
    let IconComponent;
    if (typeof data.icon === 'string') {
        IconComponent = ICON_COMPONENTS[data.icon as keyof typeof ICON_COMPONENTS] || ICON_COMPONENTS.Briefcase;
    }

    useEffect(() => {
        const checkAdminStatus = async () => {
            const data = await isAdminUser();
            setIsAdmin(data);
        };
        checkAdminStatus();
    }, []);


    return (
        <div className="bg-card rounded-2xl border border-border/50 p-8 mb-8 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-50"></div>

            <div className="relative z-10">
                <div className="flex items-start flex-wrap gap-6 mb-6">
                    <div className='flex-6 flex gap-6'>
                        {/* Icon */}
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center border border-primary/20">
                            {data.icon ?
                                (typeof data.icon === 'string' && IconComponent) ?
                                    <IconComponent className="w-8 h-8 text-primary" />
                                    : <data.icon className="w-8 h-8 text-primary" /> :
                                <Briefcase className="w-8 h-8 text-primary" />}
                            {/* <data.icon className="w-8 h-8 text-primary" /> */}
                        </div>

                        {/* Title and Meta */}
                        <div className="flex-1">
                            <h1 className="text-3xl font-bold text-foreground mb-3">
                                {data.title}
                            </h1>

                            <div className="flex flex-wrap gap-3 mb-4">
                                <Badge variant="secondary" className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {data.type}
                                </Badge>
                                <Badge variant="secondary" className="flex items-center gap-1">
                                    <MapPin className="w-3 h-3" />
                                    {data.location}
                                </Badge>
                                <Badge variant="secondary" className="flex items-center gap-1">
                                    <Building2 className="w-3 h-3" />
                                    {data.department}
                                </Badge>
                                {data.experience && (
                                    <Badge variant="secondary" className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {data.experience.level}
                                    </Badge>
                                )}
                            </div>

                            {/* Salary Range */}
                            {data.salary && (
                                <div className="flex items-center gap-2 text-lg font-semibold text-primary">
                                    <DollarSign className="w-5 h-5" />
                                    <span>
                                        {data.salary.currency} {data.salary.min.toLocaleString()} - {data.salary.max.toLocaleString()} {data.salary.period}
                                        {data.salary.commission && (
                                            <span className="text-sm font-normal text-muted-foreground ml-2">
                                                + {data.salary.commission}
                                            </span>
                                        )}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Apply Button */}
                    <Button
                        onClick={onApplyNow}
                        className="px-8 py-3 flex-1 text-base font-medium"
                        size="lg"
                    >
                        Apply Now
                    </Button>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-base">
                    {data.detailedDescription}
                </p>
            </div>
        </div>
    );
};

export default HeaderSection;
