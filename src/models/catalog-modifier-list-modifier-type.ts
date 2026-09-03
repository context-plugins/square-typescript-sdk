import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CatalogModifierListModifierType = {
  List: "LIST",
  Text: "TEXT",
} as const;
export type CatalogModifierListModifierType =
  | (typeof CatalogModifierListModifierType)[keyof typeof CatalogModifierListModifierType]
  | (string & {});

export const catalogModifierListModifierTypeSchema: EnumSchema<CatalogModifierListModifierType> =
  s.enumOf<CatalogModifierListModifierType>(CatalogModifierListModifierType);
