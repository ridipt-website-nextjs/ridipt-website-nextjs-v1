'use client';
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

// Types
interface BaseFormField {
    name: string;
    label: string;
    required: boolean;
}

interface TextFormField extends BaseFormField {
    type: 'text' | 'email';
}

interface SelectFormField extends BaseFormField {
    type: 'select';
    options: string[];
}

interface TextareaFormField extends BaseFormField {
    type: 'textarea';
}

interface FileFormField extends BaseFormField {
    type: 'file';
    accept: string;
    maxSizeMB: number;
}

interface CaptchaFormField extends BaseFormField {
    type: 'captcha';
}

type FormField = TextFormField | SelectFormField | TextareaFormField | FileFormField | CaptchaFormField;

interface ApplicationFormProps {
    applicationFormFields: FormField[];
    onSubmit: (formData: FormData) => Promise<void>;
}

interface FormErrors {
    [key: string]: string;
}

interface FormDataState {
    [key: string]: string | File | null;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({
    applicationFormFields,
    onSubmit
}) => {
    const [formData, setFormData] = useState<FormDataState>({});
    const [errors, setErrors] = useState<FormErrors>({});
    const [loading, setLoading] = useState<boolean>(false);
    const [captchaVerified, setCaptchaVerified] = useState<boolean>(false);

    const formatFileSize = (bytes: number): string => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const handleFileRemove = (name: string): void => {
        setFormData(prev => ({
            ...prev,
            [name]: null
        }));
    };

    const handleInputChange = (name: string, value: string): void => {
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleFileChange = (name: string, file: File | null): void => {
        const field = applicationFormFields.find(f => f.name === name) as FileFormField;
        const maxSize = field?.maxSizeMB || 1;

        if (file && file.size > maxSize * 1024 * 1024) {
            setErrors(prev => ({
                ...prev,
                [name]: `File size should not exceed ${maxSize}MB`
            }));
            return;
        }

        setFormData(prev => ({
            ...prev,
            [name]: file
        }));

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        applicationFormFields.forEach(field => {
            const fieldValue = formData[field.name];

            if (field.required && !fieldValue) {
                newErrors[field.name] = `${field.label} is required`;
            }

            if (field.type === 'email' && fieldValue && typeof fieldValue === 'string') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(fieldValue)) {
                    newErrors[field.name] = 'Please enter a valid email address';
                }
            }

            if (field.name === 'captcha' && field.required && !captchaVerified) {
                newErrors[field.name] = 'Please verify that you are human';
            }
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setLoading(true);
        try {
            const submitData = new FormData();

            Object.entries(formData).forEach(([key, value]) => {
                if (value instanceof File) {
                    submitData.append(key, value);
                } else if (typeof value === 'string' && value.trim()) {
                    submitData.append(key, value);
                }
            });

            await onSubmit(submitData);
        } catch (error) {
            console.error('Form submission error:', error);
        } finally {
            setLoading(false);
        }
    };

    const renderField = (field: FormField): React.ReactElement => {
        const { name, label, type, required } = field;
        const value = typeof formData[name] === 'string' ? formData[name] as string : '';
        const error = errors[name];

        switch (type) {
            case 'text':
            case 'email':
                return (
                    <div key={name} className="w-full min-w-0">
                        <Label
                            htmlFor={name}
                            className="block text-sm font-medium text-primary mb-2 truncate w-full"
                            title={label}
                        >
                            <span className="truncate max-w-[200px] inline-block">
                                {label}
                            </span>
                            {required && <span className="text-destructive ml-1">*</span>}
                        </Label>
                        <Input
                            id={name}
                            type={type}
                            value={value}
                            onChange={(e: { target: { value: string; }; }) => handleInputChange(name, e.target.value)}
                            placeholder={`Enter ${label.toLowerCase()}`}
                            className={`w-full text-foreground ${error ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                        />
                        {error && (
                            <p className="text-sm text-red-600 mt-1 truncate w-full" title={error}>
                                {error}
                            </p>
                        )}
                    </div>
                );

            case 'select':
                const selectField = field as SelectFormField;
                return (
                    <div key={name} className="w-full min-w-0">
                        <Label
                            className="block text-sm font-medium text-primary mb-2 truncate w-full"
                            title={label}
                        >
                            <span className="truncate max-w-[200px] inline-block">
                                {label}
                            </span>
                            {required && <span className="text-destructive ml-1">*</span>}
                        </Label>
                        <Select
                            value={value}
                            onValueChange={(selectedValue: string) => handleInputChange(name, selectedValue)}
                        >
                            <SelectTrigger
                                className={`w-full ${error ? 'border-destructive focus:ring-destructive' : ''}`}
                            >
                                <SelectValue
                                    placeholder={
                                        <span className="truncate max-w-[180px] inline-block">
                                            Select {label}
                                        </span>
                                    }
                                />
                            </SelectTrigger>
                            <SelectContent>
                                {selectField.options.map((option, index) => (
                                    <SelectItem key={index} value={option}>
                                        <span
                                            className="truncate text-foreground max-w-[250px] inline-block"
                                            title={option}
                                        >
                                            {option}
                                        </span>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {error && (
                            <p className="text-sm text-red-600 mt-1 truncate w-full" title={error}>
                                {error}
                            </p>
                        )}
                    </div>
                );

            case 'textarea':
                return (
                    <div key={name} className="w-full min-w-0">
                        <Label
                            htmlFor={name}
                            className="block text-sm font-medium text-primary mb-2 truncate w-full"
                            title={label}
                        >
                            <span className="truncate max-w-[300px] inline-block">
                                {label}
                            </span>
                            {required && <span className="text-destructive ml-1">*</span>}
                        </Label>
                        <Textarea
                            id={name}
                            value={value}
                            onChange={(e: { target: { value: string; }; }) => handleInputChange(name, e.target.value)}
                            placeholder={`Enter ${label.toLowerCase()}`}
                            className={`w-full text-foreground min-h-[100px] resize-y ${error ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                            rows={4}
                        />
                        {error && (
                            <p className="text-sm text-red-600 mt-1 truncate w-full" title={error}>
                                {error}
                            </p>
                        )}
                    </div>
                );

            case 'file':
                const fileField = field as FileFormField;
                const uploadedFile = formData[name] as File | null;

                return (
                    <div key={name} className="w-full min-w-0">
                        <Label
                            htmlFor={name}
                            className="block text-sm font-medium text-primary mb-2 truncate w-full"
                            title={label}
                        >
                            <span className="truncate max-w-[300px] inline-block">
                                {label}
                            </span>
                            {required && <span className="text-red-500 ml-1">*</span>}
                        </Label>

                        {!uploadedFile ? (
                            <Input
                                id={name}
                                type="file"
                                accept={fileField.accept}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleFileChange(name, e.target.files?.[0] || null)}
                                className={`w-full cursor-pointer ${error ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                            />
                        ) : (
                            <div className={`w-full p-3 border-2 border-dashed rounded-lg bg-green-50 border-green-200 ${error ? 'border-red-500' : ''}`}>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3 flex-1 min-w-0">
                                        <div className="flex-shrink-0">
                                            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-green-800 truncate" title={uploadedFile.name}>
                                                {uploadedFile.name}
                                            </p>
                                            <p className="text-xs text-green-600">
                                                {formatFileSize(uploadedFile.size)}
                                            </p>
                                        </div>
                                    </div>
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => handleFileRemove(name)}
                                        className="text-red-600 hover:text-red-800 hover:bg-red-100 flex-shrink-0"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </Button>
                                </div>
                            </div>
                        )}

                        <p className="text-xs text-gray-500 mt-1 truncate w-full">
                            <span title={`Accepted: ${fileField.accept}. Max: ${fileField.maxSizeMB}MB`}>
                                Accepted: {fileField.accept}. Max: {fileField.maxSizeMB}MB
                            </span>
                        </p>
                        {error && (
                            <p className="text-sm text-red-600 mt-1 truncate w-full" title={error}>
                                {error}
                            </p>
                        )}
                    </div>
                );


            case 'captcha':
                return (
                    <div key={name} className="w-full min-w-0">
                        <Label
                            className="block text-sm font-medium text-primary mb-3 truncate w-full"
                            title={label}
                        >
                            <span className="truncate max-w-[300px] inline-block">
                                {label}
                            </span>
                            {required && <span className="text-destructive ml-1">*</span>}
                        </Label>
                        <div
                            className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer transition-colors w-full max-w-[280px] ${captchaVerified
                                    ? 'bg-green-50 border-green-200'
                                    : error
                                        ? 'bg-red-50 border-destructive'
                                        : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                                }`}
                            onClick={() => setCaptchaVerified(!captchaVerified)}
                        >
                            <Checkbox
                                checked={captchaVerified}
                                onCheckedChange={(checked: boolean) => setCaptchaVerified(checked as boolean)}
                                className={`flex-shrink-0 ${error ? 'border-destructive' : ''}`}
                            />
                            <Label className="text-sm cursor-pointer truncate flex-1 min-w-0">
                                I'm not a robot
                            </Label>
                        </div>
                        {error && (
                            <p className="text-sm text-red-600 mt-1 truncate w-full" title={error}>
                                {error}
                            </p>
                        )}
                    </div>
                );

            default:
                return <div key={name} className="hidden"></div>;
        }
    };

    return (
        <div className="w-full  mx-auto p-6 bg-card rounded-xl shadow-lg">
            {/* <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2 truncate">
          Job Application Form
        </h2>
        <p className="text-sm text-gray-600 truncate px-4">
          Please fill out all required fields marked with an asterisk (*)
        </p>
      </div> */}

            <form onSubmit={handleSubmit} className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {applicationFormFields.map(field => {
                        const isFullWidth = ['message', 'cv', 'captcha'].includes(field.name);

                        return (
                            <div
                                key={field.name}
                                className={`w-full min-w-0 ${isFullWidth ? 'md:col-span-2' : ''}`}
                            >
                                {renderField(field)}
                            </div>
                        );
                    })}
                </div>

                <div className="flex justify-center pt-6 border-t border-border">
                    <Button
                        type="submit"
                        disabled={loading}
                        className="px-8 py-3 w-full max-w-[240px] font-medium"
                        size="lg"
                    >
                        {loading ? (
                            <div className="flex items-center justify-center space-x-2">
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin flex-shrink-0"></div>
                                <span className="truncate">Submitting...</span>
                            </div>
                        ) : (
                            <span className="truncate">Submit Application</span>
                        )}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default ApplicationForm;
