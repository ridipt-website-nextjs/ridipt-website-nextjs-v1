'use client';
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Structure from '@/components/common/page-structure';
import Header from '@/components/section-heading';
import InquiryForm, { FormField } from '@/components/careers/form';

const formFields: FormField[] = [
    {
        name: "name",
        label: "Name",
        required: true,
        type: "text",
    },
    {
        name: "email",
        label: "Email Address",
        required: true,
        type: "email",
    },
    {
        name: "country",
        label: "Select a Country",
        required: true,
        type: "select",
        options: ["United States", "India", "United Kingdom", "Canada"],
    },
    {
        name: "attachment",
        label: "Attachment",
        required: false,
        type: "file",
        accept: ".pdf,.doc,.docx,.ppt,.pptx",
        maxSizeMB: 1,
        path: '/get-in-touch/attachments'
    },
    {
        name: "phone",
        label: "Phone Number",
        required: true,
        type: "text",
    },
    {
        name: "businessRequirement",
        label: "Business Requirement",
        required: true,
        type: "textarea",
    },
];

const page = () => {
    const router = useRouter();

    const handleSubmit = async (data: any) => {
        try {
            console.log(data)
            const res = await fetch("/api/leads", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                const errorData = await res.json();
                alert(`Error: ${errorData.message || "Failed to submit form"}`);
                return;
            }

            const result = await res.json();
            console.log("Form submitted successfully:", result);
            alert("Form submitted successfully!");
        } catch (error: any) {
            console.error("Error submitting form:", error);
            alert("Something went wrong. Please try again.");
        }
    };


    const handleCareerClick = () => {
        router.push('/careers'); // Redirect to careers page
    }

    return (
        <Structure className='!pb-0 !mb-0 md:!px-0 !max-w-7xl'>
            <div className='flex flex-wrap !justify-start items-start pt-10 !container px-3 !flex-row !gap-20 !md:gap-60'>
                <div className='flex-10 relative basis-[500px] min-w-0'>
                    <Header
                        heading="Get in Touch"
                        subheading="We'd Love to Hear From You"
                        headingStyle="shadow"
                        descriptionComponent={
                            <>
                                <div className="flex-4 gap-5 w-full flex justify-start flex-col">
                                    <p className="text-pretty text-justify text-sm sm:text-base md:text-lg lg:text-xl font-light text-muted-foreground leading-relaxed space-y-4">
                                        Fill out the form below to connect with our team. Whether you have a
                                        question, a business requirement, or need more information about our
                                        services, we're here to help you.
                                    </p>

                                    {/* Tab Buttons */}
                                    <div className="flex items-center gap-1 w-fit bg-muted/50 p-1 rounded-lg border border-border/50">
                                        <button
                                            className="flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium bg-background text-foreground shadow-sm border border-border/50"
                                        >
                                            <svg
                                                className="w-4 h-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                                />
                                            </svg>
                                            Business inquiry
                                        </button>

                                        <button
                                            onClick={handleCareerClick}
                                            className="flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-all duration-200"
                                        >
                                            <svg
                                                className="w-4 h-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2M8 6v10a2 2 0 002 2h4a2 2 0 002-2V6"
                                                />
                                            </svg>
                                            Career
                                        </button>
                                    </div>

                                    <div>
                                        <InquiryForm
                                            applicationFormFields={formFields}
                                            onSubmit={handleSubmit}
                                            className="w-full !bg-background justify-baseline !p-0 !m-0 items-start shadow-none"
                                        />
                                        <p className="text-pretty text-justify text-xs sm:text-sm md:text-base font-light text-muted-foreground leading-relaxed space-y-4 mt-4">
                                            Note: Safety of your information is our top priority. We guarantee
                                            100% security of the data we receive and assure you we won't divulge
                                            the information you provide above to anyone. Your email address will
                                            not be used to send spam.
                                        </p>
                                    </div>
                                </div>
                            </>
                        }
                        className="items-start !max-w-none !mt-0 !pt-0 text-left"
                    />
                </div>

                <div className='flex-1 basis-[300px] min-w-0 h-auto w-auto overflow-hidden'>
                    <h3 className="text-lg font-semibold text-foreground mb-4">Our Locations</h3>

                    <div className="mb-4">
                        <p className="flex items-center text-muted-foreground gap-2 font-medium">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                                alt="India Flag"
                                className="w-5 h-3"
                            />
                            India-HQ
                        </p>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            123 Tech Street,<br />
                            Innovation Hub,<br />
                            City 12345
                        </p>
                    </div>

                    <hr className="my-4 w-[300px] border-primary/20" />
                </div>
            </div>
        </Structure>
    )
}

export default page
