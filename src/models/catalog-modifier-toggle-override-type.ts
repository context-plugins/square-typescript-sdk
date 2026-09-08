import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Item level overrides for bool attributes */
export const CatalogModifierToggleOverrideType = {
  /** False override */
  No: "NO",
  /** True override */
  Yes: "YES",
  /** No override */
  NotSet: "NOT_SET",
} as const;
export type CatalogModifierToggleOverrideType =
  | (typeof CatalogModifierToggleOverrideType)[keyof typeof CatalogModifierToggleOverrideType]
  | (string & {});

export const catalogModifierToggleOverrideTypeSchema: EnumSchema<CatalogModifierToggleOverrideType> =
  s.enumOf<CatalogModifierToggleOverrideType>(CatalogModifierToggleOverrideType);
