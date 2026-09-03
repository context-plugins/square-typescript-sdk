import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fulfillmentSchema, type Fulfillment } from "./fulfillment.js";
import { moneySchema, type Money } from "./money.js";
import { orderLineItemDiscountSchema, type OrderLineItemDiscount } from "./order-line-item-discount.js";
import { orderLineItemTaxSchema, type OrderLineItemTax } from "./order-line-item-tax.js";
import { orderLineItemSchema, type OrderLineItem } from "./order-line-item.js";
import { orderMoneyAmountsSchema, type OrderMoneyAmounts } from "./order-money-amounts.js";
import { orderPricingOptionsSchema, type OrderPricingOptions } from "./order-pricing-options.js";
import { orderReturnSchema, type OrderReturn } from "./order-return.js";
import { orderRewardSchema, type OrderReward } from "./order-reward.js";
import { orderRoundingAdjustmentSchema, type OrderRoundingAdjustment } from "./order-rounding-adjustment.js";
import { orderServiceChargeSchema, type OrderServiceCharge } from "./order-service-charge.js";
import { orderSourceSchema, type OrderSource } from "./order-source.js";
import { orderStateSchema, type OrderState } from "./order-state.js";
import { refundSchema, type Refund } from "./refund.js";
import { tenderSchema, type Tender } from "./tender.js";

export type Order = {
  id?: string;
  locationId: string;
  referenceId?: string | null;
  source?: OrderSource;
  customerId?: string | null;
  lineItems?: OrderLineItem[] | null;
  taxes?: OrderLineItemTax[] | null;
  discounts?: OrderLineItemDiscount[] | null;
  serviceCharges?: OrderServiceCharge[] | null;
  fulfillments?: Fulfillment[] | null;
  returns?: OrderReturn[];
  returnAmounts?: OrderMoneyAmounts;
  netAmounts?: OrderMoneyAmounts;
  roundingAdjustment?: OrderRoundingAdjustment;
  tenders?: Tender[];
  refunds?: Refund[];
  metadata?: Record<string, string> | null;
  createdAt?: string;
  updatedAt?: string;
  closedAt?: string;
  state?: OrderState;
  version?: number;
  totalMoney?: Money;
  totalTaxMoney?: Money;
  totalDiscountMoney?: Money;
  totalTipMoney?: Money;
  totalServiceChargeMoney?: Money;
  ticketName?: string | null;
  pricingOptions?: OrderPricingOptions;
  rewards?: OrderReward[];
  netAmountDueMoney?: Money;
};

export const orderSchema: Schema<Order> = s.object<Order>({
  id: s.optional(s.string()),
  locationId: s.string(),
  referenceId: s.optionalNullable(s.string()),
  source: s.optional(s.lazy(() => orderSourceSchema)),
  customerId: s.optionalNullable(s.string()),
  lineItems: s.optionalNullable(s.array(s.lazy(() => orderLineItemSchema))),
  taxes: s.optionalNullable(s.array(s.lazy(() => orderLineItemTaxSchema))),
  discounts: s.optionalNullable(s.array(s.lazy(() => orderLineItemDiscountSchema))),
  serviceCharges: s.optionalNullable(s.array(s.lazy(() => orderServiceChargeSchema))),
  fulfillments: s.optionalNullable(s.array(s.lazy(() => fulfillmentSchema))),
  returns: s.optional(s.array(s.lazy(() => orderReturnSchema))),
  returnAmounts: s.optional(s.lazy(() => orderMoneyAmountsSchema)),
  netAmounts: s.optional(s.lazy(() => orderMoneyAmountsSchema)),
  roundingAdjustment: s.optional(s.lazy(() => orderRoundingAdjustmentSchema)),
  tenders: s.optional(s.array(s.lazy(() => tenderSchema))),
  refunds: s.optional(s.array(s.lazy(() => refundSchema))),
  metadata: s.optionalNullable(s.record(s.string(), s.string())),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  closedAt: s.optional(s.string()),
  state: s.optional(s.lazy(() => orderStateSchema)),
  version: s.optional(s.number()),
  totalMoney: s.optional(s.lazy(() => moneySchema)),
  totalTaxMoney: s.optional(s.lazy(() => moneySchema)),
  totalDiscountMoney: s.optional(s.lazy(() => moneySchema)),
  totalTipMoney: s.optional(s.lazy(() => moneySchema)),
  totalServiceChargeMoney: s.optional(s.lazy(() => moneySchema)),
  ticketName: s.optionalNullable(s.string()),
  pricingOptions: s.optional(s.lazy(() => orderPricingOptionsSchema)),
  rewards: s.optional(s.array(s.lazy(() => orderRewardSchema))),
  netAmountDueMoney: s.optional(s.lazy(() => moneySchema)),
  _keysMap: {
    locationId: "location_id",
    referenceId: "reference_id",
    customerId: "customer_id",
    lineItems: "line_items",
    serviceCharges: "service_charges",
    returnAmounts: "return_amounts",
    netAmounts: "net_amounts",
    roundingAdjustment: "rounding_adjustment",
    createdAt: "created_at",
    updatedAt: "updated_at",
    closedAt: "closed_at",
    totalMoney: "total_money",
    totalTaxMoney: "total_tax_money",
    totalDiscountMoney: "total_discount_money",
    totalTipMoney: "total_tip_money",
    totalServiceChargeMoney: "total_service_charge_money",
    ticketName: "ticket_name",
    pricingOptions: "pricing_options",
    netAmountDueMoney: "net_amount_due_money",
  },
});
