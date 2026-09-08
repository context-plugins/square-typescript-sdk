import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Determines the type of a specific Quick Amount. */
export const CatalogQuickAmountType = {
  /** Quick Amount is created manually by the seller. */
  QuickAmountTypeManual: "QUICK_AMOUNT_TYPE_MANUAL",
  /** Quick Amount is generated automatically by machine learning algorithms. */
  QuickAmountTypeAuto: "QUICK_AMOUNT_TYPE_AUTO",
} as const;
export type CatalogQuickAmountType =
  | (typeof CatalogQuickAmountType)[keyof typeof CatalogQuickAmountType]
  | (string & {});

export const catalogQuickAmountTypeSchema: EnumSchema<CatalogQuickAmountType> =
  s.enumOf<CatalogQuickAmountType>(CatalogQuickAmountType);
