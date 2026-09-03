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

export type OrderReturn = {
  uid?: string | null;
  sourceOrderId?: string | null;
  returnLineItems?: OrderReturnLineItem[] | null;
  returnServiceCharges?: OrderReturnServiceCharge[] | null;
  returnTaxes?: OrderReturnTax[] | null;
  returnDiscounts?: OrderReturnDiscount[] | null;
  returnTips?: OrderReturnTip[] | null;
  roundingAdjustment?: OrderRoundingAdjustment;
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
