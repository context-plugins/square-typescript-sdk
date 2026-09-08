import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orderMoneyAmountsSchema, type OrderMoneyAmounts } from "./order-money-amounts.js";
import { orderReturnDiscountSchema, type OrderReturnDiscount } from "./order-return-discount.js";
import { orderReturnLineItemSchema, type OrderReturnLineItem } from "./order-return-line-item.js";
import {
  orderReturnServiceChargeSchema,
  type OrderReturnServiceCharge,
} from "./order-return-service-charge.js";
import { orderReturnTaxSchema, type OrderReturnTax } from "./order-return-tax.js";
import { orderReturnTipSchema, type OrderReturnTip } from "./order-return-tip.js";
import { orderRoundingAdjustmentSchema, type OrderRoundingAdjustment } from "./order-rounding-adjustment.js";

/**
 * The set of line items, service charges, taxes, discounts, tips, and other items being returned in
 * an order.
 */
export type OrderReturn = {
  /** A unique ID that identifies the return only within this order. */
  uid?: string | null;
  /**
   * An order that contains the original sale of these return line items. This is unset for unlinked
   * returns.
   */
  sourceOrderId?: string | null;
  /** A collection of line items that are being returned. */
  returnLineItems?: OrderReturnLineItem[] | null;
  /** A collection of service charges that are being returned. */
  returnServiceCharges?: OrderReturnServiceCharge[] | null;
  /**
   * A collection of references to taxes being returned for an order, including the total applied
   * tax amount to be returned. The taxes must reference a top-level tax ID from the source order.
   */
  returnTaxes?: OrderReturnTax[] | null;
  /**
   * A collection of references to discounts being returned for an order, including the total
   * applied discount amount to be returned. The discounts must reference a top-level discount ID
   * from the source order.
   */
  returnDiscounts?: OrderReturnDiscount[] | null;
  /** A collection of references to tips being returned for an order. */
  returnTips?: OrderReturnTip[] | null;
  /**
   * A rounding adjustment of the money being returned. Commonly used to apply cash rounding when
   * the minimum unit of the account is smaller than the lowest physical denomination of the
   * currency.
   */
  roundingAdjustment?: OrderRoundingAdjustment;
  /** A collection of various money amounts. */
  returnAmounts?: OrderMoneyAmounts;
};

export const orderReturnSchema: Schema<OrderReturn> = s.object<OrderReturn>({
  uid: s.optionalNullable(s.string()),
  sourceOrderId: s.optionalNullable(s.string()),
  returnLineItems: s.optionalNullable(s.array(s.lazy(() => orderReturnLineItemSchema))),
  returnServiceCharges: s.optionalNullable(s.array(s.lazy(() => orderReturnServiceChargeSchema))),
  returnTaxes: s.optionalNullable(s.array(s.lazy(() => orderReturnTaxSchema))),
  returnDiscounts: s.optionalNullable(s.array(s.lazy(() => orderReturnDiscountSchema))),
  returnTips: s.optionalNullable(s.array(s.lazy(() => orderReturnTipSchema))),
  roundingAdjustment: s.optional(s.lazy(() => orderRoundingAdjustmentSchema)),
  returnAmounts: s.optional(s.lazy(() => orderMoneyAmountsSchema)),
  _keysMap: {
    sourceOrderId: "source_order_id",
    returnLineItems: "return_line_items",
    returnServiceCharges: "return_service_charges",
    returnTaxes: "return_taxes",
    returnDiscounts: "return_discounts",
    returnTips: "return_tips",
    roundingAdjustment: "rounding_adjustment",
    returnAmounts: "return_amounts",
  },
});
