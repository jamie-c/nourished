import { z } from "zod";

const NFCSubscribeFormData = z.object({
    first_name: z.string().length(50, { message: "First name must be less than 50 characters" }),
    last_name: z.string().length(50, { message: "Last name must be less than 50 characters" }),
    email: z.string().email(),
})
export type NFCSubscribeFormData = z.infer<typeof NFCSubscribeFormData>;

// Validation function
export function validateFormData(data: NFCSubscribeFormData): { isValid: boolean; errors: string[] | null; data?: z.infer<typeof NFCSubscribeFormData> } {
    try {
        const parsedData = NFCSubscribeFormData.parse(data); // This will throw if data is invalid
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