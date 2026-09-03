import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EcomVisibility = {
  Unindexed: "UNINDEXED",
  Unavailable: "UNAVAILABLE",
  Hidden: "HIDDEN",
  Visible: "VISIBLE",
} as const;
export type EcomVisibility = (typeof EcomVisibility)[keyof typeof EcomVisibility] | (string & {});

export const ecomVisibilitySchema: EnumSchema<EcomVisibility> = s.enumOf<EcomVisibility>(EcomVisibility);
