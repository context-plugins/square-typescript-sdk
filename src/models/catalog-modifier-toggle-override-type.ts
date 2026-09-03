import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CatalogModifierToggleOverrideType = {
  No: "NO",
  Yes: "YES",
  NotSet: "NOT_SET",
} as const;
export type CatalogModifierToggleOverrideType =
  | (typeof CatalogModifierToggleOverrideType)[keyof typeof CatalogModifierToggleOverrideType]
  | (string & {});

export const catalogModifierToggleOverrideTypeSchema: EnumSchema<CatalogModifierToggleOverrideType> =
  s.enumOf<CatalogModifierToggleOverrideType>(CatalogModifierToggleOverrideType);
