// utils/iconUtils.ts
import { AVAILABLE_ICONS as ICON_COMPONENTS } from './constant';

export const getJobIcon = (iconName: string, className?: string) => {
    const IconComponent = ICON_COMPONENTS[iconName as keyof typeof ICON_COMPONENTS] || ICON_COMPONENTS.Briefcase;
    return <IconComponent className={className || "w-4 h-4"} />;
};

// Usage example:
// const jobIcon = getJobIcon(job.icon, "w-6 h-6 text-blue-500");
