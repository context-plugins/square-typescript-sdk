import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CatalogQuickAmountType = {
  QuickAmountTypeManual: "QUICK_AMOUNT_TYPE_MANUAL",
  QuickAmountTypeAuto: "QUICK_AMOUNT_TYPE_AUTO",
} as const;
export type CatalogQuickAmountType =
  | (typeof CatalogQuickAmountType)[keyof typeof CatalogQuickAmountType]
  | (string & {});

export const catalogQuickAmountTypeSchema: EnumSchema<CatalogQuickAmountType> =
  s.enumOf<CatalogQuickAmountType>(CatalogQuickAmountType);
