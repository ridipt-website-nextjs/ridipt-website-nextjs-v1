'use client'
import React, { useState, ChangeEvent, FormEvent, JSX } from 'react'
import Header from './section-heading';

// Form data interface
interface FormData {
  name: string;
  email: string;
  country: string;
  attachment: File | { url: string; name: string; key: string; size: number; type: string } | null;
  phone: string;
  businessRequirement: string;
  privacyAccepted: boolean;
}

// Form field interface
interface FormField {
  name: keyof FormData;
  label: string;
  required: boolean;
  type: 'text' | 'email' | 'select' | 'file' | 'textarea';
  gridSpan?: string;
  options?: string[];
  accept?: string;
  maxSizeMB?: number;
  path?: string;
}

const formFields: FormField[] = [
  {
    name: "name",
    label: "Name",
    required: true,
    type: "text",
    gridSpan: 'col-span-12 sm:col-span-6'
  },
  {
    name: "email",
    label: "Email Address",
    required: true,
    type: "email",
    gridSpan: 'col-span-12 sm:col-span-6'
  },
  {
    name: "country",
    label: "Select a Country",
    required: true,
    type: "select",
    gridSpan: 'col-span-12 sm:col-span-6',
    options: ["United States", "India", "United Kingdom", "Canada"],
  },
  {
    name: "phone",
    label: "Phone Number",
    required: true,
    type: "text",
    gridSpan: 'col-span-12 sm:col-span-6'
  },
  {
    name: "attachment",
    label: "Attachment",
    required: false,
    type: "file",
    gridSpan: 'col-span-12',
    accept: ".pdf,.doc,.docx,.ppt,.pptx",
    maxSizeMB: 1,
    path: '/get-in-touch/attachments'
  },
  {
    name: "businessRequirement",
    label: "Business Requirement",
    required: true,
    type: "textarea",
    gridSpan: 'col-span-12'
  },
];

interface ContactSectionProps {
  className?: string;
  onSubmit?: (data: FormData) => void;
  formFields?: FormField[];
  showHeader?: boolean;
  cardStyling?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  className = '',
  onSubmit,
  formFields: customFormFields = formFields,
  showHeader = true,
  cardStyling
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    country: '',
    attachment: null,
    phone: '',
    businessRequirement: '',
    privacyAccepted: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // 🆕 Format file size helper
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // 🚀 Enhanced handleFileChange - Like ApplicationForm
  const handleFileChange = async (name: string, file: File | null, path: string): Promise<void> => {
    const field = customFormFields.find(f => f.name === name) as FormField;
    const maxSize = field?.maxSizeMB || 1;

    if (file && file.size > maxSize * 1024 * 1024) {
      alert(`File size should not exceed ${maxSize}MB`);
      return;
    }

    if (file) {
      try {
        // Create FormData to send file to S3/upload endpoint
        const uploadFormData = new FormData();
        uploadFormData.append('file', file);
        uploadFormData.append('path', path);

        // API call to upload file
        const res = await fetch('/api/files/upload', {
          method: 'POST',
          body: uploadFormData,
        });

        if (!res.ok) {
          throw new Error('Upload failed');
        }

        const data = await res.json();

        if (data.success && data.url) {
          // Store uploaded file metadata
          setFormData(prev => ({
            ...prev,
            [name]: {
              url: data.url,
              name: file.name,
              key: data.key,
              size: file.size,
              type: file.type,
            }
          }));

          console.log('File uploaded successfully:', data);
        } else {
          throw new Error(data.error || 'Upload failed');
        }
      } catch (error: any) {
        console.error('File upload error:', error);
        alert(error.message || 'Upload failed');
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  // 🗑️ Handle file remove
  const handleFileRemove = async (name: string) => {
    const uploaded = formData[name as keyof FormData] as { url?: string; key?: string; name?: string; size?: number; type?: string } | null;

    // Extract key from uploaded file metadata
    let key = uploaded?.key;
    if (!key && uploaded?.url) {
      // Extract key from URL if needed
      const parts = uploaded.url.split('/');
      key = parts.slice(-2).join('/'); // e.g., uploads/attachments/filename.pdf
    }

    if (key) {
      try {
        await fetch(`/api/files/delete?key=${encodeURIComponent(key)}`, { 
          method: 'DELETE' 
        });
      } catch (e) {
        console.error('Error deleting file:', e);
      }
    }

    // Remove from form data
    setFormData(prev => ({
      ...prev,
      [name]: null
    }));
  };

  // 🚀 Enhanced handleSubmit - Like ApplicationForm
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // If custom onSubmit provided, use it
      if (onSubmit) {
        await onSubmit(formData);
        return;
      }

      // Default API submission with smart format detection
      console.log('Submitting form data:', formData);
      
      // Check if we have file attachment
      const hasFileAttachment = formData.attachment && 
        (formData.attachment instanceof File || 
         (typeof formData.attachment === 'object' && formData.attachment.url));

      let requestBody: any;
      let headers: any = {};

      if (hasFileAttachment && formData.attachment instanceof File) {
        // 📁 File not uploaded yet - use FormData
        const submitFormData = new FormData();
        
        Object.keys(formData).forEach(key => {
          const value = formData[key as keyof FormData];
          if (key === 'attachment' && value instanceof File) {
            submitFormData.append(key, value);
          } else if (key !== 'attachment' && value !== null) {
            submitFormData.append(key, String(value));
          }
        });

        requestBody = submitFormData;
        // Don't set Content-Type for FormData

      } else {
        // 📄 Use JSON - file already uploaded or no file
        const jsonData = { ...formData };
        
        // If attachment is uploaded object, send just the URL/key
        if (
          jsonData.attachment &&
          typeof jsonData.attachment === 'object' &&
          !(jsonData.attachment instanceof File)
        ) {
          jsonData.attachment = (jsonData.attachment.url || jsonData.attachment.key) as any;
        }

        requestBody = JSON.stringify(jsonData);
        headers['Content-Type'] = 'application/json';
      }

      const res = await fetch("/api/leads", {
        method: "POST",
        headers,
        body: requestBody,
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert(`Error: ${errorData.message || "Failed to submit form"}`);
        return;
      }

      const result = await res.json();
      console.log("Form submitted successfully:", result);
      alert("Form submitted successfully!");
      
      // 🎉 Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        country: '',
        attachment: null,
        phone: '',
        businessRequirement: '',
        privacyAccepted: false
      });

    } catch (error: any) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderField = (field: FormField): JSX.Element => {
    const baseInputStyles: string = `
      w-full px-4 py-3 text-base
      bg-secondary 
      border border-border outline-muted-foreground
      rounded-xl text-base
      placeholder-gray-500 dark:placeholder-gray-400 focus:border-transparent
      focus:outline-none focus:ring-2 focus:ring-primary 
      focus:border-muted-foreground transition-all duration-200
    `;

    const gridSpan = field.gridSpan || 'col-span-12';

    // Handle SELECT fields
    if (field.type === 'select' && field.options) {
      return (
        <div className={gridSpan} key={field.name}>
          <label className="block text-sm font-medium text-muted-foreground mb-2">
            {field.label} {field.required && <span className="text-red-500">*</span>}
          </label>
          <select
            name={field.name}
            value={formData[field.name] as string}
            onChange={handleInputChange}
            required={field.required}
            disabled={isSubmitting}
            className={`${baseInputStyles} cursor-pointer disabled:opacity-50`}
          >
            <option value="">Select {field.label}</option>
            {field.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      );
    }

    // 🚀 Enhanced FILE field handling - Like ApplicationForm
    if (field.type === 'file') {
      const uploadedFile = formData[field.name] as File | { url: string; name: string; key: string; size: number; type: string } | null;
      const isFileObject = uploadedFile && typeof uploadedFile === 'object' && 'url' in uploadedFile;
      const isFile = uploadedFile instanceof File;

      return (
        <div className={gridSpan} key={field.name}>
          <label className="block text-sm font-medium text-muted-foreground mb-2">
            {field.label} {field.required && <span className="text-red-500">*</span>}
          </label>

          {!uploadedFile ? (
            // 📁 No file - show file input
            <input
              type="file"
              name={field.name}
              accept={field.accept}
              onChange={(e: ChangeEvent<HTMLInputElement>) => 
                handleFileChange(field.name, e.target.files?.[0] || null, field.path || '/uploads')
              }
              required={field.required}
              disabled={isSubmitting}
              className={`${baseInputStyles} cursor-pointer disabled:opacity-50 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90`}
            />
          ) : (
            // ✅ File uploaded - show file info with remove option
            <div className="w-full p-3 border-2 border-dashed rounded-lg bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-green-800 dark:text-green-200 truncate">
                      {isFile ? uploadedFile.name : uploadedFile?.name || 'Unknown file'}
                    </p>
                    <p className="text-xs text-green-600 dark:text-green-400">
                      {formatFileSize(isFile ? uploadedFile.size : uploadedFile?.size || 0)}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleFileRemove(field.name)}
                  disabled={isSubmitting}
                  className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 hover:bg-red-100 dark:hover:bg-red-900/20 p-1 rounded-md transition-colors disabled:opacity-50 flex-shrink-0"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          <p className="text-xs text-muted-foreground mt-1">
            Accepted: {field.accept}. Max: {field.maxSizeMB}MB
          </p>
        </div>
      );
    }

    // Handle TEXTAREA fields
    if (field.type === 'textarea') {
      return (
        <div className={gridSpan} key={field.name}>
          <label className="block text-sm font-medium text-muted-foreground mb-2">
            {field.label} {field.required && <span className="text-red-500">*</span>}
          </label>
          <textarea
            name={field.name}
            placeholder={`Enter ${field.label.toLowerCase()}`}
            value={formData[field.name] as string}
            onChange={handleInputChange}
            rows={4}
            required={field.required}
            disabled={isSubmitting}
            className={`${baseInputStyles} resize-none min-h-[120px] disabled:opacity-50`}
          />
        </div>
      );
    }

    // Handle PHONE field with country code
    if (field.name === 'phone') {
      return (
        <div className={gridSpan} key={field.name}>
          <label className="block text-sm font-medium text-muted-foreground mb-2">
            {field.label} {field.required && <span className="text-red-500">*</span>}
          </label>
          <div className="flex flex-col sm:flex-row gap-0">
            <div className="flex items-center px-4 py-3 bg-card border border-border rounded-xl sm:rounded-r-none sm:border-r-0 border-b-0 sm:border-b shadow-sm">
              <span className="text-lg mr-2">🇮🇳</span>
              <span className="text-muted-foreground font-medium">(+91)</span>
            </div>
            <input
              type="text"
              name={field.name}
              placeholder="Enter phone number"
              value={formData[field.name] as string}
              onChange={handleInputChange}
              required={field.required}
              disabled={isSubmitting}
              className={`${baseInputStyles} flex-1 rounded-t-none sm:rounded-t-xl sm:rounded-l-none disabled:opacity-50`}
            />
          </div>
        </div>
      );
    }

    // Handle regular INPUT fields (text, email)
    return (
      <div className={gridSpan} key={field.name}>
        <label className="block text-sm font-medium text-muted-foreground mb-2">
          {field.label} {field.required && <span className="text-red-500">*</span>}
        </label>
        <input
          type={field.type}
          name={field.name}
          placeholder={`Enter ${field.label.toLowerCase()}`}
          value={formData[field.name] as string}
          onChange={handleInputChange}
          required={field.required}
          disabled={isSubmitting}
          className={`${baseInputStyles} disabled:opacity-50`}
        />
      </div>
    );
  };

  return (
    <section className={`py-20 px-4 w-full relative overflow-hidden ${className}`}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 ease-in-out transition-all bg-blue-200/30 dark:bg-blue-800/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 dark:from-blue-800/20 dark:to-purple-800/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          {showHeader && <Header
            className='mb-12'
            heading='Get in Touch'
            subheading='Ready to transform your business?'
            description={`Let's discuss your project requirements and explore innovative solutions together.`}
          />}

          {/* Form Container */}
          <div className={`${cardStyling} bg-card backdrop-blur-xl border border-muted rounded-3xl p-1 shadow-2xl`}>
            <div className="bg-card backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Dynamic Form Fields */}
                <div className="grid grid-cols-12 gap-6">
                  {customFormFields.map((field: FormField) => renderField(field))}
                </div>

                {/* Privacy Policy Checkbox */}
                <div className="flex items-start space-x-3 pt-4">
                  <input
                    type="checkbox"
                    name="privacyAccepted"
                    checked={formData.privacyAccepted}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="mt-1 w-5 h-5 text-primary-foreground bg-secondary border-border rounded-md focus:ring-primary focus:ring-2 transition-all flex-shrink-0 disabled:opacity-50"
                    required
                  />
                  <label className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    By sending this form I confirm that I have read and accept the{' '}
                    <a
                      href="#"
                      className="text-primary hover:text-primary/80 font-medium underline decoration-primary/30 hover:decoration-primary/60 transition-all"
                    >
                      Privacy Policy
                    </a>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={!formData.privacyAccepted || isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 flex items-center justify-center gap-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed mx-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
