"use client";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Eye, EyeOff, Info } from "lucide-react";
import Lottie from "lottie-react";
import { Spinner } from "@/components/ui/spinner";
import { resetSchema } from "./ResetValidation";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import CheckAnimation from "../../public/animation/Check.json";

export default function PasswordForm() {
    const [showSuccess, setShowSuccess] = useState(false);
    const router = useRouter();
    const form = useForm({
        resolver: zodResolver(resetSchema),
        defaultValues: {
            password: "",
            Cpassword: "",
        },
    });

    const password = form.watch("password");
    const passwordConfirm = form.watch("Cpassword");

    const {
        formState: { isSubmitting },
    } = form;

    const [showPassword, setShowPassword] = useState(false);
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            console.log(data);
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setShowSuccess(true);
        } catch (error) {
            console.error(error);
        }
    };

    // ✅ Auto close modal and redirect after 2 seconds
    useEffect(() => {
        if (showSuccess) {
            const timer = setTimeout(() => {
                setShowSuccess(false);
                router.push("/dashboard");
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [showSuccess, router]);

    return (
        <div className="w-full shadow-blue-400 shadow-md bg-white mt-5 rounded-2xl max-w-2xl p-8">
            <div className="flex items-center gap-3 md:mt-10 md:ml-2 md:mb-5">
                <h1 className="text-xl font-medium text-gray-700 ">Profile Information</h1>
                <Info className="w-5 h-5 text-gray-400" />
            </div>
            <div className="bg-white p-5 flex flex-col justify-center items-center text-black rounded-2xl w-full max-w-5xl">
                <div className="w-full">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                            {/*old Password Field */}
                            <FormField
                                control={form.control}
                                name="Opassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-gray-700">Old Password</FormLabel>
                                        <div className="relative">
                                            <FormControl>
                                                <Input
                                                    type={showOldPassword ? "text" : "password"}
                                                    {...field}
                                                    placeholder="Enter Password"
                                                />
                                            </FormControl>
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => setShowOldPassword((prev) => !prev)}
                                                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-600 hover:text-[#2489B0]"
                                            >
                                                {showOldPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                            </Button>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* new password */}
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-gray-700">Password</FormLabel>
                                        <div className="relative">
                                            <FormControl>
                                                <Input
                                                    type={showPassword ? "text" : "password"}
                                                    {...field}
                                                    placeholder="Enter Password"
                                                />
                                            </FormControl>
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => setShowPassword((prev) => !prev)}
                                                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-600 hover:text-[#2489B0]"
                                            >
                                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                            </Button>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Confirm Password Field */}
                            <FormField
                                control={form.control}
                                name="Cpassword"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-gray-700">Confirm Password</FormLabel>
                                        <div className="relative">
                                            <FormControl>
                                                <Input
                                                    type={showConfirmPassword ? "text" : "password"}
                                                    {...field}
                                                    placeholder="Confirm Password"
                                                />
                                            </FormControl>
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="icon"
                                                onClick={() => setShowConfirmPassword((prev) => !prev)}
                                                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-600 hover:text-[#2489B0]"
                                            >
                                                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                            </Button>
                                        </div>

                                        {/* Password Match Message */}
                                        {passwordConfirm && password !== passwordConfirm && (
                                            <p className="text-red-500 text-sm mt-1">
                                                Passwords do not match
                                            </p>
                                        )}

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                disabled={
                                    isSubmitting || Boolean(passwordConfirm && password !== passwordConfirm)
                                }
                                className="w-full flex justify-center items-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Spinner className="text-xl" />
                                        Processing ...
                                    </>
                                ) : (
                                    "Continue"
                                )}
                            </Button>
                        </form>
                    </Form>

                </div>
            </div>
            {/* ✅ Success Modal */}
            <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
                <DialogContent className="max-w-sm text-center rounded-2xl p-8 bg-white shadow-lg border border-[#E2E8F0]">
                    <DialogHeader>
                        <div className="flex flex-col items-center justify-center space-y-4">
                            <div className="w-24 h-24 rounded-full bg-[#635BFF] flex items-center justify-center">
                                <Image src="/assets/shield.png" alt="shield" height={40} width={40} />
                            </div>
                            <DialogTitle className="text-2xl font-semibold text-gray-800">
                                Successful!
                            </DialogTitle>
                            <p className="text-gray-600 w-2/3 mx-auto text-center">
                                Your registration was completed successfully
                            </p>
                            <div className="flex justify-center items-center w-full lg:w-1/2">
                                <div className="w-20">
                                    <Lottie
                                        animationData={CheckAnimation}
                                        loop={true}
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}