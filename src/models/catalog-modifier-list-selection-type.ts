import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CatalogModifierListSelectionType = {
  Single: "SINGLE",
  Multiple: "MULTIPLE",
} as const;
export type CatalogModifierListSelectionType =
  | (typeof CatalogModifierListSelectionType)[keyof typeof CatalogModifierListSelectionType]
  | (string & {});

export const catalogModifierListSelectionTypeSchema: EnumSchema<CatalogModifierListSelectionType> =
  s.enumOf<CatalogModifierListSelectionType>(CatalogModifierListSelectionType);
