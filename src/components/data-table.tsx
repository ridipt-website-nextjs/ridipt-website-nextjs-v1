// components/ui/data-table.tsx
'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// ✅ Generic column definition interface
export interface DataTableColumn<T> {
    key: keyof T;
    label: string;
    width?: string;
    render?: (value: any, row: T, index: number) => React.ReactNode;
}

// ✅ Table props interface
interface DataTableProps<T> {
    data: T[];
    columns: DataTableColumn<T>[];
    title?: string;
    subtitle?: string;
    loading?: boolean;
    emptyMessage?: string;
    className?: string;
    actions?: {
        label: string;
        onClick: (row: T, index: number) => void;
        variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
        className?: string;
    }[];
}

// ✅ Reusable DataTable component
export function DataTable<T extends Record<string, any>>({
    data,
    columns,
    title,
    subtitle,
    loading = false,
    emptyMessage = "No data available",
    className = "",
    actions = []
}: DataTableProps<T>) {
    
    if (loading) {
        return (
            <Card className={className}>
                {title && (
                    <CardHeader>
                        <CardTitle>{title}</CardTitle>
                        {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
                    </CardHeader>
                )}
                <CardContent>
                    <div className="flex items-center justify-center py-12">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                    </div>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className={className}>
            {title && (
                <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-bold">{title}</h2>
                            {subtitle && <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>}
                        </div>
                        <Badge variant="secondary" className="ml-4">
                            {data.length} {data.length === 1 ? 'item' : 'items'}
                        </Badge>
                    </CardTitle>
                </CardHeader>
            )}
            <CardContent>
                {data.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-muted-foreground text-lg">{emptyMessage}</p>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                            {/* ✅ Table Header */}
                            <thead>
                                <tr className="border-b border-border">
                                    {columns.map((column, index) => (
                                        <th
                                            key={String(column.key)}
                                            className="text-left py-3 px-4 font-semibold text-muted-foreground text-sm uppercase tracking-wider"
                                            style={{ width: column.width }}
                                        >
                                            {column.label}
                                        </th>
                                    ))}
                                    {actions.length > 0 && (
                                        <th className="text-left py-3 px-4 font-semibold text-muted-foreground text-sm uppercase tracking-wider">
                                            Actions
                                        </th>
                                    )}
                                </tr>
                            </thead>
                            
                            {/* ✅ Table Body */}
                            <tbody>
                                {data.map((row, rowIndex) => (
                                    <tr
                                        key={rowIndex}
                                        className="border-b border-border hover:bg-muted/50 transition-colors"
                                    >
                                        {columns.map((column) => (
                                            <td key={String(column.key)} className="py-4 px-4">
                                                {column.render
                                                    ? column.render(row[column.key], row, rowIndex)
                                                    : renderCellValue(row[column.key])
                                                }
                                            </td>
                                        ))}
                                        {actions.length > 0 && (
                                            <td className="py-4 px-4">
                                                <div className="flex gap-2">
                                                    {actions.map((action, actionIndex) => (
                                                        <Button
                                                            key={actionIndex}
                                                            size="sm"
                                                            variant={action.variant || 'outline'}
                                                            className={action.className}
                                                            onClick={() => action.onClick(row, rowIndex)}
                                                        >
                                                            {action.label}
                                                        </Button>
                                                    ))}
                                                </div>
                                            </td>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}

// ✅ Helper function to render cell values
function renderCellValue(value: any): React.ReactNode {
    if (value === null || value === undefined) {
        return <span className="text-muted-foreground">-</span>;
    }
    
    if (typeof value === 'boolean') {
        return (
            <Badge variant={value ? 'default' : 'secondary'}>
                {value ? 'Yes' : 'No'}
            </Badge>
        );
    }
    
    if (Array.isArray(value)) {
        return (
            <div className="flex flex-wrap gap-1">
                {value.slice(0, 3).map((item, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                        {String(item)}
                    </Badge>
                ))}
                {value.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                        +{value.length - 3} more
                    </Badge>
                )}
            </div>
        );
    }
    
    if (typeof value === 'object') {
        return <span className="text-muted-foreground">Object</span>;
    }
    
    return <span>{String(value)}</span>;
}
