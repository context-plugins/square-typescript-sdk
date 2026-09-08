import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  catalogDiscountModifyTaxBasisSchema,
  type CatalogDiscountModifyTaxBasis,
} from "./catalog-discount-modify-tax-basis.js";
import { catalogDiscountTypeSchema, type CatalogDiscountType } from "./catalog-discount-type.js";
import { moneySchema, type Money } from "./money.js";

/** A discount applicable to items. */
export type CatalogDiscount = {
  /**
   * The discount name. This is a searchable attribute for use in applicable query filters, and its
   * value length is of Unicode code points.
   */
  name?: string | null;
  /** How to apply a CatalogDiscount to a CatalogItem. */
  discountType?: CatalogDiscountType;
  /**
   * The percentage of the discount as a string representation of a decimal number, using a `.` as
   * the decimal separator and without a `%` sign. A value of `7.5` corresponds to `7.5%`. Specify a
   * percentage of `0` if `discount_type` is `VARIABLE_PERCENTAGE`.
   *
   * Do not use this field for amount-based or variable discounts.
   */
  percentage?: string | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  amountMoney?: Money;
  /**
   * Indicates whether a mobile staff member needs to enter their PIN to apply the discount to a
   * payment in the Square Point of Sale app.
   */
  pinRequired?: boolean | null;
  /**
   * The color of the discount display label in the Square Point of Sale app. This must be a valid
   * hex color code.
   */
  labelColor?: string | null;
  modifyTaxBasis?: CatalogDiscountModifyTaxBasis;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
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
