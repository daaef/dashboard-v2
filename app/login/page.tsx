"use client";

import imgLogo from "@/public/logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useState } from "react";


export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
        console.log("Login attempt:", { email, password });
    };

    return (
        <div className="min-h-screen w-full relative bg-[#0a0a0b] flex flex-col">

            {/* Main Content */}
            <div className="flex-1 flex items-center justify-center px-[150px] py-[80px]">
                <div className="w-full max-w-[1200px] grid grid-cols-2 gap-[80px] items-center">
                    {/* Left Side - Brand Info */}
                    <div className="flex flex-col gap-[32px]">
                        <div>
                            <h1 className="font-['Inter:Bold',sans-serif] font-bold leading-[64px] text-[56px] text-white mb-[16px]">
                                Welcome Back
                            </h1>
                            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[32px] text-[20px] text-[#c9c9c9]">
                                Sign in to access your Fainzy Technologies account and manage your autonomous delivery solutions.
                            </p>
                        </div>

                        <div className="flex flex-col gap-[24px]">
                            <div className="flex gap-[16px] items-start">
                                <div className="size-[48px] rounded-[12px] bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center flex-shrink-0">
                                    <svg className="size-[24px]" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] text-white mb-[8px]">
                                        Secure Access
                                    </h3>
                                    <p className="font-['Inter:Regular',sans-serif] text-[16px] leading-[24px] text-[#c9c9c9]">
                                        Your data is protected with enterprise-grade security and encryption.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-[16px] items-start">
                                <div className="size-[48px] rounded-[12px] bg-gradient-to-br from-[#ec4899] to-[#f43f5e] flex items-center justify-center flex-shrink-0">
                                    <svg className="size-[24px]" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] text-white mb-[8px]">
                                        Real-Time Monitoring
                                    </h3>
                                    <p className="font-['Inter:Regular',sans-serif] text-[16px] leading-[24px] text-[#c9c9c9]">
                                        Track your robot fleet and deliveries in real-time from anywhere.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-[16px] items-start">
                                <div className="size-[48px] rounded-[12px] bg-gradient-to-br from-[#06b6d4] to-[#3b82f6] flex items-center justify-center flex-shrink-0">
                                    <svg className="size-[24px]" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[18px] text-white mb-[8px]">
                                        Advanced Analytics
                                    </h3>
                                    <p className="font-['Inter:Regular',sans-serif] text-[16px] leading-[24px] text-[#c9c9c9]">
                                        Get detailed insights and reports on delivery performance and efficiency.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Login Form */}
                    <div className="bg-[#0e0e0f] rounded-[24px] p-[48px] border border-[#3a3a3a]">
                        <div className="flex flex-col gap-[32px]">
                            <div className="text-center">
                                <h2 className="font-['Inter:Bold',sans-serif] font-bold leading-[40px] text-[32px] text-white mb-[8px]">
                                    Sign In
                                </h2>
                                <p className="font-['Inter:Regular',sans-serif] text-[16px] text-[#c9c9c9]">
                                    Enter your credentials to continue
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
                                {/* Email Field */}
                                <div className="flex flex-col gap-[8px]">
                                    <Label htmlFor="email" className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#e5e5e5]">
                                        Email Address
                                    </Label>
                                    <div className="relative">
                                        <Mail className="absolute left-[16px] top-[50%] translate-y-[-50%] size-[18px] text-[#c9c9c9]" />
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="you@company.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="pl-[48px] h-[52px] bg-[rgba(255,255,255,0.05)] border-[#3a3a3a] text-white placeholder:text-[#c9c9c9] focus:border-[#6366f1] focus:ring-[#6366f1] rounded-[12px]"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Password Field */}
                                <div className="flex flex-col gap-[8px]">
                                    <Label htmlFor="password" className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#e5e5e5]">
                                        Password
                                    </Label>
                                    <div className="relative">
                                        <Lock className="absolute left-[16px] top-[50%] translate-y-[-50%] size-[18px] text-[#c9c9c9]" />
                                        <Input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="pl-[48px] pr-[48px] h-[52px] bg-[rgba(255,255,255,0.05)] border-[#3a3a3a] text-white placeholder:text-[#c9c9c9] focus:border-[#6366f1] focus:ring-[#6366f1] rounded-[12px]"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-[16px] top-[50%] translate-y-[-50%] text-[#c9c9c9] hover:text-white transition-colors"
                                        >
                                            {showPassword ? (
                                                <EyeOff className="size-[18px]" />
                                            ) : (
                                                <Eye className="size-[18px]" />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                {/* Remember Me & Forgot Password */}
                                <div className="flex items-center justify-between">
                                    <label className="flex items-center gap-[8px] cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="size-[18px] rounded-[4px] border-[#3a3a3a] bg-[rgba(255,255,255,0.05)] text-[#6366f1] focus:ring-[#6366f1] focus:ring-offset-0"
                                        />
                                        <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#c9c9c9]">
                      Remember me
                    </span>
                                    </label>
                                    <a href="#" className="font-['Inter:Medium',sans-serif] text-[14px] text-[#6366f1] hover:text-[#8b5cf6] transition-colors">
                                        Forgot Password?
                                    </a>
                                </div>

                                {/* Login Button */}
                                <Button
                                    type="submit"
                                    className="w-full h-[52px] bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#4f46e5] hover:to-[#7c3aed] text-white rounded-[12px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px]"
                                >
                                    Sign In
                                </Button>

                            </form>

                            {/* Sign Up Link */}
                            <div className="text-center">
                                <p className="font-['Inter:Regular',sans-serif] text-[14px] text-[#c9c9c9]">
                                    Don't have an account?{" "}
                                    <a href="#" className="font-['Inter:Semi_Bold',sans-serif] font-black text-[#f0f0f0] hover:text-[#8b5cf6] transition-colors">
                                        Create account now
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}