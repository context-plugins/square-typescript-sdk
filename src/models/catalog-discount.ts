import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  catalogDiscountModifyTaxBasisSchema,
  type CatalogDiscountModifyTaxBasis,
} from "./catalog-discount-modify-tax-basis.js";
import { catalogDiscountTypeSchema, type CatalogDiscountType } from "./catalog-discount-type.js";
import { moneySchema, type Money } from "./money.js";

export type CatalogDiscount = {
  name?: string | null;
  discountType?: CatalogDiscountType;
  percentage?: string | null;
  amountMoney?: Money;
  pinRequired?: boolean | null;
  labelColor?: string | null;
  modifyTaxBasis?: CatalogDiscountModifyTaxBasis;
  maximumAmountMoney?: Money;
};

export const catalogDiscountSchema: Schema<CatalogDiscount> = s.object<CatalogDiscount>({
  name: s.optionalNullable(s.string()),
  discountType: s.optional(s.lazy(() => catalogDiscountTypeSchema)),
  percentage: s.optionalNullable(s.string()),
  amountMoney: s.optional(s.lazy(() => moneySchema)),
  pinRequired: s.optionalNullable(s.boolean()),
  labelColor: s.optionalNullable(s.string()),
  modifyTaxBasis: s.optional(s.lazy(() => catalogDiscountModifyTaxBasisSchema)),
  maximumAmountMoney: s.optional(s.lazy(() => moneySchema)),
  _keysMap: {
    discountType: "discount_type",
    amountMoney: "amount_money",
    pinRequired: "pin_required",
    labelColor: "label_color",
    modifyTaxBasis: "modify_tax_basis",
    maximumAmountMoney: "maximum_amount_money",
  },
});
