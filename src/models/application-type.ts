import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ApplicationType = {
  TerminalApi: "TERMINAL_API",
} as const;
export type ApplicationType = (typeof ApplicationType)[keyof typeof ApplicationType] | (string & {});

export const applicationTypeSchema: EnumSchema<ApplicationType> = s.enumOf<ApplicationType>(ApplicationType);
