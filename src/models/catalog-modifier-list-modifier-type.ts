import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Defines the type of `CatalogModifierList`. */
export const CatalogModifierListModifierType = {
  /** The `CatalogModifierList` instance is a non-empty list of non text-based modifiers. */
  List: "LIST",
  /** The `CatalogModifierList` instance is a single text-based modifier. */
  Text: "TEXT",
} as const;
export type CatalogModifierListModifierType =
  | (typeof CatalogModifierListModifierType)[keyof typeof CatalogModifierListModifierType]
  | (string & {});

export const catalogModifierListModifierTypeSchema: EnumSchema<CatalogModifierListModifierType> =
  s.enumOf<CatalogModifierListModifierType>(CatalogModifierListModifierType);
