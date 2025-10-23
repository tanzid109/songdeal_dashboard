import z from "zod";

export const step2Schema = z.object({
    tracks: z
        .array(
            z.object({
                title: z.string().min(1, "Track title is required"),
                duration: z
                    .string()
                    .regex(/^\d{2}:\d{2}$/, "Duration must be in MM:SS format"),
                isrc: z.string().optional(),
            })
        )
        .min(1, "Add at least one track"),
});
