import type { VariantsOptions } from "@/utilities/globals";

export interface NavLinkProps {
  url: string;
  title: string;
  variant?: VariantsOptions;
  disabled?: boolean;
  children?: React.ReactNode;
  direction?: "vertical" | "horizontal";
}
