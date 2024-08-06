import { z } from "zod";

const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;

const NFCApplyFormData = z.object({
    first_name: z.string(),
    last_name: z.string(),
    email: z.string().email(),
    phone: z.string().regex(phoneNumberPattern),
    intro: z.string(),
    uncover_the_problem: z.string(),
    more_about_problems: z.string(),
    solutions_tried: z.string(),
    future_state: z.string(),
    beliefs: z.string(),
    commitment: z.string(),
    why_you: z.string(),
    thank_you: z.string().optional(),
})
export type NFCApplyFormData = z.infer<typeof NFCApplyFormData>;

// Validation function
export function validateFormData(data: NFCApplyFormData): { isValid: boolean; errors: Record<string, string> | null; data?: z.infer<typeof NFCApplyFormData> } {
    try {
        const parsedData = NFCApplyFormData.parse(data); // This will throw if data is invalid
        return { isValid: true, errors: null, data: parsedData };
    } catch (error) {
        if (error instanceof z.ZodError) {
            // Extracting and formatting error messages
            const errors = error.errors.reduce((acc: Record<string, string>, e) => {
                acc[e.path.join(".")] = e.message
                return acc;
            }, {} as Record<string, string>)
            return { isValid: false, errors }
        }
        // For unexpected errors, you might want to handle them differently
        console.error("Unexpected error during form data validation:", error);
        return { isValid: false, errors: { unexpected: "An unexpected error occurred." }};
    }
}