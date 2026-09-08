import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates whether a CatalogModifierList supports multiple selections. */
export const CatalogModifierListSelectionType = {
  /** Indicates that a CatalogModifierList allows only a single CatalogModifier to be selected. */
  Single: "SINGLE",
  /** Indicates that a CatalogModifierList allows multiple CatalogModifier to be selected. */
  Multiple: "MULTIPLE",
} as const;
export type CatalogModifierListSelectionType =
  | (typeof CatalogModifierListSelectionType)[keyof typeof CatalogModifierListSelectionType]
  | (string & {});

export const catalogModifierListSelectionTypeSchema: EnumSchema<CatalogModifierListSelectionType> =
  s.enumOf<CatalogModifierListSelectionType>(CatalogModifierListSelectionType);
