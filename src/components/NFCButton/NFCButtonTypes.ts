import type { VariantsOptions } from "../../utilities/globals";

export interface ButtonProps {
    href: string;
    variant?: VariantsOptions;
    disabled?: boolean;
    classes?: string;
    children: React.ReactNode;
}
