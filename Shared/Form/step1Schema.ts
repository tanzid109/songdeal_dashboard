import z from "zod";

export const step1Schema = z.object({
    catalogTitle: z.string().min(1, "Catalog title is required"),
    primaryArtist: z.string().min(1, "Primary artist is required"),
    releaseYear: z
        .string()
        .min(4, "Release year must be 4 digits")
        .max(4, "Release year must be 4 digits")
        .regex(/^\d{4}$/, "Must be a valid year"),
    genre: z.array(z.string()).min(1, "Select at least one genre"),
    language: z.string().min(1, "Language is required"),
    shortDescription: z
        .string()
        .max(500, "Description must be 500 characters or less")
        .optional(),
});