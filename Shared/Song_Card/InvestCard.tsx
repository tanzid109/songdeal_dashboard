"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "sonner";

type InvestFormValues = {
    Amount: string;
};

const InvestModal = () => {
    const [open, setOpen] = useState(false);

    const form = useForm<InvestFormValues>({
        defaultValues: {
            Amount: "500.00",
        },
    });

    const onSubmit = (data: InvestFormValues) => {
        console.log(data);
        setOpen(false)
        toast.success(`${data.Amount} $ Invested`)
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="w-full">Invest Now</Button>
            </DialogTrigger>

            <DialogContent className=" lg:py-10">
                <DialogHeader className="space-y-3">
                    <DialogTitle className="text-xl font-semibold">
                        Invest in &quot;Midnight City&quot;
                    </DialogTitle>
                    <DialogDescription className="text-base font-medium">
                        Make a simulated investment 
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6 mt-4"
                    >
                        <FormField
                            control={form.control}
                            name="Amount"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-sm font-bold text-gray-700">
                                        Investment Amount
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            step="0.01"
                                            {...field}
                                            placeholder="500.00"
                                            className="mt-1 shadow"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full">
                            Invest Now
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default InvestModal;
