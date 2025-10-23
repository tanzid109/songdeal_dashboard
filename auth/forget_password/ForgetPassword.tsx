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
import { forgetSchema } from "./ForgetValidation";
import { Spinner } from "@/components/ui/spinner";
import Lottie from "lottie-react";
import ForgetAnimation from "../../public/animation/forget.json";


export default function ForgetPasswordForm() {
    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(forgetSchema),
        defaultValues: {
            email: "",
        },
    });

    const {
        formState: { isSubmitting },
    } = form;

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            console.log(data);
            // simulate API request
            await new Promise((resolve) => setTimeout(resolve, 1000));
            router.push("/otp");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen bg-white flex justify-center items-center px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10 p-6 sm:p-8 mt-4 md:m-0 rounded-2xl shadow-xl bg-white w-full max-w-6xl mb-4 border-t-2 border-[#635BFF]">

                {/* Left Section - Form */}
                <div className="flex flex-col justify-center items-center text-black rounded-2xl w-full max-w-md">
                    <div className="w-full md:my-10">
                        <div className="text-left mb-6">
                            <h1 className="text-2xl font-semibold text-gray-800 mb-2">
                                Forgot Password
                            </h1>
                            <p className="text-gray-500 text-base w-4/5">Enter your email, we will send a verification code to your email.</p>
                        </div>

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                                {/* Email Field */}
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-gray-700">Email Address</FormLabel>
                                            <FormControl>
                                                <Input type="email" {...field} placeholder="Email Address" />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    disabled={
                                        isSubmitting
                                    }
                                    className="w-full flex justify-center items-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Spinner className="text-xl" />
                                        </>
                                    ) : (
                                        "Continue"
                                    )}
                                </Button>
                            </form>
                        </Form>
                    </div>
                </div>

                {/* Right Section - Lottie Animation */}
                <div className="flex justify-center items-center w-full lg:w-1/2 p-5">
                    <div className="w-full md:w-[60%] lg:w-[70%] xl:w-full">
                        <Lottie
                            animationData={ForgetAnimation}
                            loop={true}
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
