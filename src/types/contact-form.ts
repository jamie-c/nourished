import { z } from "zod";

const NFCContactFormData = z.object({
    first_name: z.string(),
    last_name: z.string(),
    email: z.string().email(),
    message: z.string(),
})
export type NFCContactFormData = z.infer<typeof NFCContactFormData>;

// Validation function
export function validateFormData(data: NFCContactFormData): { isValid: boolean; errors: string[] | null; data?: z.infer<typeof NFCContactFormData> } {
    try {
        const parsedData = NFCContactFormData.parse(data); // This will throw if data is invalid
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