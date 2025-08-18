'use client'
import React, { useState, ChangeEvent, FormEvent, JSX } from 'react'
import Header from './section-heading';

// Form data interface
interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  company: string;
  projectDetails: string;
  privacyAccepted: boolean;
}

// Form field interface
interface FormField {
  name: keyof FormData;
  placeholder: string;
  type: 'text' | 'email' | 'tel' | 'textarea';
  required: boolean;
  gridSpan: string;
  withCountryCode?: boolean;
}

// Component props interface
interface ContactSectionProps {
  className?: string;
  onSubmit?: (data: FormData) => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ 
  className = '',
  onSubmit 
}) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    company: '',
    projectDetails: '',
    privacyAccepted: false
  });

  // Form fields array with proper typing
  const formFields: FormField[] = [
    {
      name: 'firstName',
      placeholder: 'First Name',
      type: 'text',
      required: true,
      gridSpan: 'col-span-12 sm:col-span-6'
    },
    {
      name: 'lastName',
      placeholder: 'Last Name',
      type: 'text',
      required: true,
      gridSpan: 'col-span-12 sm:col-span-6'
    },
    {
      name: 'phone',
      placeholder: 'Phone Number',
      type: 'tel',
      required: true,
      withCountryCode: true,
      gridSpan: 'col-span-12'
    },
    {
      name: 'email',
      placeholder: 'Email',
      type: 'email',
      required: true,
      gridSpan: 'col-span-12'
    },
    {
      name: 'company',
      placeholder: 'Company (Optional)',
      type: 'text',
      required: false,
      gridSpan: 'col-span-12'
    },
    {
      name: 'projectDetails',
      placeholder: 'Project Details',
      type: 'textarea',
      required: true,
      gridSpan: 'col-span-12'
    }
  ];

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    if (onSubmit) {
      onSubmit(formData);
    } else {
      console.log('Form submitted:', formData);
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

    if (field.type === 'textarea') {
      return (
        <div className={field.gridSpan} key={field.name}>
          <textarea
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name] as string}
            onChange={handleInputChange}
            rows={4}
            required={field.required}
            className={`${baseInputStyles} resize-none min-h-[120px]`}
          />
        </div>
      );
    }

    if (field.withCountryCode) {
      return (
        <div className={field.gridSpan} key={field.name}>
          <div className="flex flex-col sm:flex-row gap-0">
            <div className="flex items-center px-4 py-3 bg-card border border-border rounded-xl sm:rounded-r-none sm:border-r-0 border-b-0 sm:border-b shadow-sm">
              <span className="text-lg mr-2">🇮🇳</span>
              <span className="text-muted-foreground font-medium">(+91)</span>
            </div>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name] as string}
              onChange={handleInputChange}
              required={field.required}
              className={`${baseInputStyles} flex-1 rounded-t-none sm:rounded-t-xl sm:rounded-l-none`}
            />
          </div>
        </div>
      );
    }

    return (
      <div className={field.gridSpan} key={field.name}>
        <input
          type={field.type}
          name={field.name}
          placeholder={field.placeholder}
          value={formData[field.name] as string}
          onChange={handleInputChange}
          required={field.required}
          className={baseInputStyles}
        />
      </div>
    );
  };

  return (
    <section className={`py-20 w-full relative overflow-hidden ${className}`}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 ease-in-out transition-all bg-blue-200/30 dark:bg-blue-800/30 rounded-full blur-xl animate-pulse"></div>
        {/* <div className="absolute bottom-20 right-10 w-48 h-48 ease-in-out transition-all bg-purple-200/30 dark:bg-purple-800/30 rounded-full blur-xl animate-pulse delay-1000"></div> */}
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 dark:from-blue-800/20 dark:to-purple-800/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <Header
            className='mb-12 '
            heading='Contact Us'
            subheading='Get in touch with us for any queries or concerns.'
            description={`Ready to transform your business? Let's discuss your project requirements and explore innovative solutions together.`}
          />

          {/* <div className="text-center flex flex-col gap-2 mb-12">
            <h4 className="text-pretty text-3xl  text-primary font-medium md:text-4xl">
              Get Free Consultation
            </h4>
            <p className="max-w-screen-md text-pretty text-lg font-light text-muted-foreground md:text-xl">
              Ready to transform your business? Let's discuss your project requirements and explore innovative solutions together.
            </p>
          </div> */}
          
          {/* Form Container */}
          <div className="bg-card backdrop-blur-xl border border-muted rounded-3xl p-1 shadow-2xl">
            <div className="bg-card backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Dynamic Form Fields */}
                <div className="grid grid-cols-12 gap-4">
                  {formFields.map((field: FormField) => renderField(field))}
                </div>

                {/* Privacy Policy Checkbox */}
                <div className="flex items-start space-x-3 pt-4">
                  <input
                    type="checkbox"
                    name="privacyAccepted"
                    checked={formData.privacyAccepted}
                    onChange={handleInputChange}
                    className="mt-1 w-5 h-5 text-primary-foreground bg-secondary border-border rounded-md focus:ring-primary focus:ring-2 transition-all flex-shrink-0"
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
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 flex items-center justify-center gap-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed mx-auto"
                    disabled={!formData.privacyAccepted}
                  >
                    Get Consultation
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
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
