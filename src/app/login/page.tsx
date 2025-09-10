'use client';
import React, { useState } from 'react';
import Structure from '@/components/common/page-structure';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { setCookie } from '@/lib/helper-functions';

interface FormData {
    mobile: string;
    otp: string;
}

interface FormErrors {
    mobile?: string;
    otp?: string;
}

const Page = () => {
    const [formData, setFormData] = useState<FormData>({
        mobile: '',
        otp: ''
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [loading, setLoading] = useState(false);
    const [otpSent, setOtpSent] = useState(false);
    const [isVerified, setIsVerified] = useState(false);

    // Phone number formatting function
    const formatPhoneNumber = (value: string): string => {
        const phoneNumber = value.replace(/\D/g, '');
        const limitedPhoneNumber = phoneNumber.slice(0, 10);

        if (limitedPhoneNumber.length >= 6) {
            return `${limitedPhoneNumber.slice(0, 3)}-${limitedPhoneNumber.slice(3, 6)}-${limitedPhoneNumber.slice(6)}`;
        } else if (limitedPhoneNumber.length >= 3) {
            return `${limitedPhoneNumber.slice(0, 3)}-${limitedPhoneNumber.slice(3)}`;
        }
        return limitedPhoneNumber;
    };

    // Phone number validation
    const validatePhoneNumber = (phone: string): boolean => {
        const phoneRegex = /^[6-9]\d{9}$/;
        const cleanPhone = phone.replace(/\D/g, '');
        return phoneRegex.test(cleanPhone);
    };

    // Handle mobile input change
    const handleMobileChange = (value: string) => {
        const formattedValue = formatPhoneNumber(value);
        setFormData(prev => ({
            ...prev,
            mobile: formattedValue
        }));

        // Clear mobile error when user types
        if (errors.mobile) {
            setErrors(prev => ({
                ...prev,
                mobile: undefined
            }));
        }
    };

    // Handle OTP input change
    const handleOtpChange = (value: string) => {
        // Only allow digits and limit to 6 characters
        const otpValue = value.replace(/\D/g, '').slice(0, 6);
        setFormData(prev => ({
            ...prev,
            otp: otpValue
        }));

        // Clear OTP error when user types
        if (errors.otp) {
            setErrors(prev => ({
                ...prev,
                otp: undefined
            }));
        }
    };

    // Sample function to send OTP
    const sendOtpApi = async (mobile: string): Promise<boolean> => {
        try {
            const response = await fetch("/api/send-otp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", // Tells server we are sending JSON
                },
                body: JSON.stringify({ mobile }), // Sending only the mobile number
            });

            if (!response.ok) {
                throw new Error("Failed to send OTP"); // Throw error if response is not ok
            }

            const data = await response.json(); // Parse response body as JSON
            console.log("API Response:", data);

            return true; // Return true if request was successful
        } catch (error) {
            console.error("Error sending OTP:", error);
            return false; // Return false if request failed
        }
    };


    // Sample function to verify OTP
    const verifyOtpApi = async (mobile: string, otp: string): Promise<boolean> => {
        try {
            const response = await fetch("/api/verify-otp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", // Tell server we are sending JSON
                },
                body: JSON.stringify({ mobile, otp }), // Send both mobile number and OTP
            });

            if (!response.ok) {
                throw new Error("Failed to verify OTP"); // If response status is not OK
            }

            const data = await response.json(); // Parse response
            console.log("API Response:", data);
            await setCookie('adminToken', data?.token!)

            return data.success === true; // Assume API returns { success: true/false }
        } catch (error) {
            console.error("Error verifying OTP:", error);
            return false; // Return false if request failed
        }
    };


    // Handle Send OTP button click
    const handleSendOtp = async () => {
        // Validate mobile number
        if (!formData.mobile) {
            setErrors({ mobile: 'Mobile number is required' });
            return;
        }

        if (!validatePhoneNumber(formData.mobile)) {
            setErrors({ mobile: 'Please enter a valid 10-digit mobile number' });
            return;
        }

        setLoading(true);
        setErrors({});

        try {
            const cleanMobile = formData.mobile.replace(/\D/g, '');
            const success = await sendOtpApi(cleanMobile);

            if (success) {
                setOtpSent(true);
                console.log('OTP sent successfully!');
            } else {
                setErrors({ mobile: 'Failed to send OTP. Please try again.' });
            }
        } catch (error) {
            console.error('Error sending OTP:', error);
            setErrors({ mobile: 'Network error. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    // Handle Verify OTP button click
    const handleVerifyOtp = async () => {
        // Validate OTP
        if (!formData.otp) {
            setErrors({ otp: 'OTP is required' });
            return;
        }

        if (formData.otp.length !== 6) {
            setErrors({ otp: 'Please enter a valid 6-digit OTP' });
            return;
        }

        setLoading(true);
        setErrors({});

        try {
            const cleanMobile = formData.mobile.replace(/\D/g, '');
            const success = await verifyOtpApi(cleanMobile, formData.otp);

            if (success) {
                setIsVerified(true);
                console.log('OTP verified successfully!');
            } else {
                setErrors({ otp: 'Invalid OTP. Please try again.' });
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
            setErrors({ otp: 'Network error. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    // Reset form to initial state
    const handleReset = () => {
        setFormData({ mobile: '', otp: '' });
        setErrors({});
        setOtpSent(false);
        setIsVerified(false);
    };

    return (
        <Structure className='flex justify-center items-center h-[calc(100vh_-_var(--header-height))]'>
            <div className='flex max-w-5xl h-auto m-auto'>
                <div className="w-full max-w-4xl m-auto p-6 px-10 bg-card rounded-xl shadow-lg">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-bold text-foreground mb-2">
                            Mobile Verification
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            {!otpSent
                                ? "Enter your mobile number to receive OTP"
                                : "Enter the 6-digit OTP sent to your mobile"
                            }
                        </p>
                    </div>

                    <div className="space-y-4">
                        {/* Mobile Number Field */}
                        <div className="space-y-2">
                            <Label htmlFor="mobile" className="text-sm text-primary font-medium">
                                Mobile Number
                                <span className="text-destructive ml-1">*</span>
                            </Label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="text-muted-foreground text-sm">+91</span>
                                </div>
                                <Input
                                    id="mobile"
                                    type="tel"
                                    value={formData.mobile}
                                    onChange={(e) => handleMobileChange(e.target.value)}
                                    placeholder="XXX-XXX-XXXX"
                                    className={`pl-12 text-primary ${errors.mobile ? 'border-destructive' : ''}`}
                                    maxLength={12}
                                    disabled={otpSent}
                                />
                            </div>
                            {errors.mobile && (
                                <p className="text-sm text-destructive">{errors.mobile}</p>
                            )}
                            {!otpSent && (
                                <p className="text-xs text-muted-foreground">
                                    Enter 10-digit mobile number (starting with 6-9)
                                </p>
                            )}
                        </div>

                        {/* OTP Field - Show only after OTP is sent */}
                        {otpSent && !isVerified && (
                            <div className="space-y-2">
                                <Label htmlFor="otp" className="text-sm text-primary font-medium">
                                    Enter OTP
                                    <span className="text-destructive ml-1">*</span>
                                </Label>
                                <Input
                                    id="otp"
                                    type="text"
                                    value={formData.otp}
                                    onChange={(e) => handleOtpChange(e.target.value)}
                                    placeholder="000000"
                                    className={`text-center text-primary text-lg font-mono tracking-widest ${errors.otp ? 'border-destructive' : ''}`}
                                    maxLength={6}
                                />
                                {errors.otp && (
                                    <p className="text-sm text-destructive">{errors.otp}</p>
                                )}
                                <p className="text-xs text-muted-foreground text-center">
                                    Enter the 6-digit code sent to your mobile
                                </p>
                            </div>
                        )}

                        {/* Success Message */}
                        {isVerified && (
                            <div className="p-4 bg-green-50 border dark:bg-secondary border-green-200 dark:border-border rounded-lg">
                                <div className="flex items-center space-x-2">
                                    <div className="flex-shrink-0">
                                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-green-800">
                                            Mobile number verified successfully!
                                        </p>
                                        <p className="text-xs text-green-600 mt-1">
                                            {formData.mobile} has been verified
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="space-y-3 pt-4">
                            {!isVerified && (
                                <Button
                                    onClick={otpSent ? handleVerifyOtp : handleSendOtp}
                                    disabled={loading || (!formData.mobile && !otpSent) || (otpSent && !formData.otp)}
                                    className="w-full"
                                    size="lg"
                                >
                                    {loading ? (
                                        <div className="flex items-center space-x-2">
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            <span>
                                                {otpSent ? 'Verifying...' : 'Sending...'}
                                            </span>
                                        </div>
                                    ) : (
                                        otpSent ? 'Verify OTP' : 'Send OTP'
                                    )}
                                </Button>
                            )}

                            {/* Reset/Try Again Button */}
                            {(isVerified || otpSent) && (
                                <Button
                                    onClick={handleReset}
                                    variant="outline"
                                    className="w-full text-muted-foreground"
                                    disabled={loading}
                                >
                                    {isVerified ? 'Verify Another Number' : 'Try Again'}
                                </Button>
                            )}
                        </div>

                        {/* Resend OTP option */}
                        {otpSent && !isVerified && (
                            <div className="text-center pt-2">
                                <button
                                    onClick={handleSendOtp}
                                    disabled={loading}
                                    className="text-sm text-primary hover:underline disabled:opacity-50"
                                >
                                    Didn't receive OTP? Resend
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Debug Info (Remove in production)
                    {process.env.NODE_ENV === 'development' && (
                        <div className="mt-6 p-3 text-muted-foreground bg-secondary rounded text-xs">
                            <p><strong>Debug Info:</strong></p>
                            <p>Mobile: {formData.mobile}</p>
                            <p>OTP: {formData.otp}</p>
                            <p>OTP Sent: {otpSent.toString()}</p>
                            <p>Verified: {isVerified.toString()}</p>
                            <p className="text-green-600 mt-1">Use OTP: 123456 for testing</p>
                        </div>
                    )} */}
                </div>
            </div>
        </Structure>
    );
};

export default Page;
