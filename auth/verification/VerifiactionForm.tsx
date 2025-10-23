"use client";

import { Button } from "@/components/ui/button";
import { Form, FormItem, FormMessage } from "@/components/ui/form";
import { Controller, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { otpSchema } from "./OtpValidation";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import Link from "next/link";
import { Spinner } from "@/components/ui/spinner";
import { useRouter } from "next/navigation";
import Lottie from "lottie-react";
import OtpAnimation from "../../public/animation/otp.json";


export default function VerifiactionForm() {
    const router = useRouter();

    const form = useForm({
        resolver: zodResolver(otpSchema),
        defaultValues: { otp: "" },
        mode: "onChange",
    });

    const {
        formState: { isSubmitting },
    } = form;

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            console.log(data);
            await new Promise((resolve) => setTimeout(resolve, 1000));
        } catch (error) {
            console.error(error);
        }
        finally {
            router.push("/reset")
        }
    };


    return (
        <>
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
                                <form
                                    onSubmit={form.handleSubmit(onSubmit)}
                                    className="space-y-8 flex flex-col items-center"
                                >
                                    <Controller
                                        name="otp"
                                        control={form.control}
                                        render={({ field }) => (
                                            <FormItem className="flex flex-col items-center">
                                                <InputOTP
                                                    maxLength={4}
                                                    value={field.value || ""}
                                                    onChange={(val) => {
                                                        if (/^\d*$/.test(val)) field.onChange(val);
                                                    }}
                                                    className="gap-3"
                                                >
                                                    <InputOTPGroup className="flex gap-3">
                                                        {[0, 1, 2, 3].map((index) => (
                                                            <InputOTPSlot
                                                                key={index}
                                                                index={index}
                                                                className="w-14 h-10 text-lg font-semibold border border-[#E2E8F0] text-center  active:bg-[#635BFF]
                                                                shadow-sm shadow-[#635BFF]"
                                                            />
                                                        ))}
                                                    </InputOTPGroup>
                                                </InputOTP>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Resend code */}
                                    <div className="text-sm text-gray-700 text-center">
                                        Didn’t receive the code?
                                        <Link
                                            href="#"
                                            className="text-[#FF4D4F] font-semibold ml-1 hover:underline"
                                        >
                                            Resend Code
                                        </Link>
                                        <p className="mt-1">Resend code at 00:59</p>
                                    </div>

                                    {/* Submit Button */}
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full"
                                    >
                                        {isSubmitting ? <Spinner /> : "Continue"}
                                    </Button>
                                </form>
                            </Form>
                        </div>
                    </div>

                    {/* Right Section - Lottie Animation */}
                    <div className="flex justify-center items-center w-full lg:w-1/2 p-5">
                        <div className="w-full md:w-[60%] lg:w-[70%] xl:w-[70%]">
                            <Lottie
                                animationData={OtpAnimation}
                                loop={true}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
