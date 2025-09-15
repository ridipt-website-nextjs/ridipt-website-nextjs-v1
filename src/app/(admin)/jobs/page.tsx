// components/admin/jobs-list.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { DataTable, DataTableColumn } from '@/components/data-table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye, Edit, Trash2, MapPin, Building2, Clock, DollarSign, AlertTriangle } from 'lucide-react';
import { adminApi } from '@/lib/admin-api-client';
import { useRouter } from 'next/navigation';

// ✅ Import shadcn AlertDialog components
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";

// ✅ Job interface (same as before)
interface Job {
    _id: string;
    job_id: string;
    name: string;
    icon: string;
    title: string;
    description: string;
    detailedDescription: string;
    type: string;
    location: string;
    department: string;
    salary: {
        min: number;
        max: number;
        currency: string;
        period: string;
    };
    experience: {
        level: string;
        yearsRequired: string;
        specificExperience: string[];
    };
    education: {
        degree: string;
        fields: string[];
        alternatives: string;
    };
    responsibilities: string[];
    requiredSkills: string[];
    technicalSkills: string[];
    qualifications: string[];
    workEnvironment: {
        culture: string;
        teamSize: string;
        reportingTo: string;
        collaboratesWith: string[];
        workStyle: string;
    };
    growthOpportunities: string[];
    benefits: string[];
    perks: string[];
    challenges: string[];
    createdAt?: string;
    updatedAt?: string;
}

function JobsList() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    // ✅ State for delete confirmation dialog
    const [deleteDialog, setDeleteDialog] = useState<{
        open: boolean;
        job: Job | null;
    }>({
        open: false,
        job: null
    });

    // ✅ Fetch all jobs
    const fetchJobs = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await adminApi.get('/jobs');
            console.log(response);

            setJobs(response);
        } catch (err: any) {
            console.error('Error fetching jobs:', err);
            setError(err.message || 'Failed to fetch jobs');
        } finally {
            setLoading(false);
        }
    };

    // ✅ Load jobs on component mount
    useEffect(() => {
        fetchJobs();
    }, []);

    // ✅ Handle job actions
    const handleView = (job: Job) => {
        router.push(`/careers/${job.job_id}`);
    };

    const handleEdit = (job: Job) => {
        router.push(`/create-job?job_id=${job.job_id}`);
    };

    // ✅ Open delete confirmation dialog
    const handleDeleteClick = (job: Job) => {
        setDeleteDialog({
            open: true,
            job: job
        });
    };

    // ✅ Close delete confirmation dialog
    const handleDeleteCancel = () => {
        setDeleteDialog({
            open: false,
            job: null
        });
    };

    // ✅ Confirm delete job
    const handleDeleteConfirm = async () => {
        if (!deleteDialog.job) return;

        try {
            setLoading(true);
            const response = await adminApi.delete(`/jobs/${deleteDialog.job.job_id}`);
            
            // Close dialog
            setDeleteDialog({
                open: false,
                job: null
            });

            // Refresh jobs list
            await fetchJobs();
            
            // Show success message (optional)
            // You can add a toast notification here
            console.log('Job deleted successfully!');
            
        } catch (err: any) {
            console.error('Error deleting job:', err);
            alert('Failed to delete job. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // ✅ Define table columns (same as before)
    const columns: DataTableColumn<Job>[] = [
        {
            key: 'title',
            label: 'Job Title',
            width: '25%',
            render: (value, row) => (
                <div className="space-y-1">
                    <div className="font-semibold text-foreground">{value}</div>
                    <div className="text-sm text-muted-foreground">ID: {row.job_id}</div>
                </div>
            )
        },
        {
            key: 'department',
            label: 'Department',
            width: '15%',
            render: (value, row) => (
                <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-muted-foreground" />
                    <span>{value}</span>
                </div>
            )
        },
        {
            key: 'location',
            label: 'Location',
            width: '15%',
            render: (value) => (
                <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>{value}</span>
                </div>
            )
        },
        {
            key: 'type',
            label: 'Type',
            width: '10%',
            render: (value) => (
                <Badge
                    variant={
                        value === 'Full-time' ? 'default' :
                            value === 'Part-time' ? 'secondary' :
                                value === 'Contract' ? 'outline' : 'destructive'
                    }
                >
                    {value}
                </Badge>
            )
        },
        {
            key: 'salary',
            label: 'Salary',
            width: '15%',
            render: (value) => (
                <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">
                        {value.currency} {value.min.toLocaleString()} - {value.max.toLocaleString()}
                        <br />
                        <span className="text-muted-foreground">/{value.period}</span>
                    </span>
                </div>
            )
        },
        {
            key: 'experience',
            label: 'Experience',
            width: '10%',
            render: (value) => (
                <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">
                        {value.level}
                        <br />
                        <span className="text-muted-foreground">{value.yearsRequired}</span>
                    </span>
                </div>
            )
        },
        {
            key: 'createdAt',
            label: 'Created',
            width: '10%',
            render: (value) => value ? new Date(value).toLocaleDateString() : '-'
        }
    ];

    // ✅ Define table actions - Updated delete handler
    const actions = [
        {
            label: 'View',
            onClick: handleView,
            variant: 'outline' as const,
            className: 'text-blue-600 hover:text-blue-700'
        },
        {
            label: 'Edit',
            onClick: handleEdit,
            variant: 'outline' as const,
            className: 'text-green-600 hover:text-green-700'
        },
        {
            label: 'Delete',
            onClick: handleDeleteClick, // ✅ Updated to use dialog
            variant: 'outline' as const,
            className: 'text-red-600 hover:text-red-700'
        }
    ];

    // ✅ Error state
    if (error) {
        return (
            <div className="p-6">
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                    <p className="text-destructive font-medium">Error loading jobs</p>
                    <p className="text-destructive/80 text-sm mt-1">{error}</p>
                    <Button
                        onClick={fetchJobs}
                        className="mt-3"
                        size="sm"
                    >
                        Retry
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="p-6 container mx-auto space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">Jobs Management</h1>
                        <p className="text-muted-foreground">Manage all job postings and openings</p>
                    </div>
                    <Button onClick={() => window.location.href = '/create-job'}>
                        Create New Job
                    </Button>
                </div>

                <DataTable
                    data={jobs}
                    columns={columns}
                    title="All Jobs"
                    subtitle={`${jobs.length} job${jobs.length !== 1 ? 's' : ''} available`}
                    loading={loading}
                    emptyMessage="No jobs found. Create your first job posting!"
                    actions={actions}
                    className="shadow-sm"
                />
            </div>

            {/* ✅ Delete Confirmation Dialog */}
            <AlertDialog open={deleteDialog.open} onOpenChange={handleDeleteCancel}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle className="flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5 text-destructive" />
                            Delete Job Posting
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            Are you sure you want to delete <strong>"{deleteDialog.job?.title}"</strong>?
                            <br />
                            <span className="text-muted-foreground text-sm">
                                Job ID: {deleteDialog.job?.job_id}
                            </span>
                            <br />
                            <br />
                            <span className="text-destructive text-sm font-medium">
                                ⚠️ This action cannot be undone. The job posting will be permanently removed.
                            </span>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel 
                            onClick={handleDeleteCancel}
                            className="hover:bg-muted"
                        >
                            Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                            onClick={handleDeleteConfirm}
                            className="bg-destructive text-primary-foreground hover:bg-destructive/90"
                            disabled={loading}
                        >
                            {loading ? (
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    Deleting...
                                </div>
                            ) : (
                                <div className="flex items-center gap-2">
                                    <Trash2 className="w-4 h-4" />
                                    Delete Job
                                </div>
                            )}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}

export default JobsList;
