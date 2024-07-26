import { z } from "zod";

const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;

const FormData = z.object({
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
export type FormData = z.infer<typeof FormData>;

// Validation function
export function validateFormData(data: FormData): { isValid: boolean; errors: string[] | null; data?: z.infer<typeof FormData> } {
    try {
        const parsedData = FormData.parse(data); // This will throw if data is invalid
        return { isValid: true, errors: null, data: parsedData };
    } catch (error) {
        if (error instanceof z.ZodError) {
            // Extracting and formatting error messages
            const errors = error.errors.map(e => `${e.path.join('.')}: ${e.message}`);
            return { isValid: false, errors };
        }
        // For unexpected errors, you might want to handle them differently
        console.error("Unexpected error during form data validation:", error);
        return { isValid: false, errors: ["An unexpected error occurred."] };
    }
}