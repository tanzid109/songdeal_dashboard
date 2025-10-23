import z from "zod";

export const step3Schema = z.object({
    rightsOwner: z.string().min(1, "Rights owner is required"),
    royaltyHolders: z
        .array(
            z.object({
                name: z.string().min(1, "Name is required"),
                split: z.coerce.number().min(0).max(100),
            })
        )
        .refine(
            (holders) => holders.reduce((sum, h) => sum + h.split, 0) === 100,
            { message: "Total royalty split must equal 100%" }
        ),
});