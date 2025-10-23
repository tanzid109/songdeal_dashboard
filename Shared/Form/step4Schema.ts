import z from "zod";

export const step4Schema = z.object({
    catalogTitle: z.string().min(1, "Catalog title is required"),
    primaryArtist: z.string().min(1, "Primary artist is required"),
    masterRights: z.coerce.number().min(0).max(100),
    publishingRights: z.coerce.number().min(0).max(100),
    askingPrice: z.coerce.number().min(0),
    investmentGoal: z.coerce.number().min(0),
    listingDuration: z.coerce.number().min(1),
});
