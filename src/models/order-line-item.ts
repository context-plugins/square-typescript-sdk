import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";
import {
  orderLineItemAppliedDiscountSchema,
  type OrderLineItemAppliedDiscount,
} from "./order-line-item-applied-discount.js";
import {
  orderLineItemAppliedServiceChargeSchema,
  type OrderLineItemAppliedServiceCharge,
} from "./order-line-item-applied-service-charge.js";
import {
  orderLineItemAppliedTaxSchema,
  type OrderLineItemAppliedTax,
} from "./order-line-item-applied-tax.js";
import { orderLineItemItemTypeSchema, type OrderLineItemItemType } from "./order-line-item-item-type.js";
import { orderLineItemModifierSchema, type OrderLineItemModifier } from "./order-line-item-modifier.js";
import {
  orderLineItemPricingBlocklistsSchema,
  type OrderLineItemPricingBlocklists,
} from "./order-line-item-pricing-blocklists.js";
import { orderQuantityUnitSchema, type OrderQuantityUnit } from "./order-quantity-unit.js";

export type OrderLineItem = {
  uid?: string | null;
  name?: string | null;
  quantity: string;
  quantityUnit?: OrderQuantityUnit;
  note?: string | null;
  catalogObjectId?: string | null;
  catalogVersion?: number | null;
  variationName?: string | null;
  itemType?: OrderLineItemItemType;
  metadata?: Record<string, string> | null;
  modifiers?: OrderLineItemModifier[] | null;
  appliedTaxes?: OrderLineItemAppliedTax[] | null;
  appliedDiscounts?: OrderLineItemAppliedDiscount[] | null;
  appliedServiceCharges?: OrderLineItemAppliedServiceCharge[] | null;
  basePriceMoney?: Money;
  variationTotalPriceMoney?: Money;
  grossSalesMoney?: Money;
  totalTaxMoney?: Money;
  totalDiscountMoney?: Money;
  totalMoney?: Money;
  pricingBlocklists?: OrderLineItemPricingBlocklists;
  totalServiceChargeMoney?: Money;
};

export const orderLineItemSchema: Schema<OrderLineItem> = s.object<OrderLineItem>({
  uid: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  quantity: s.string(),
  quantityUnit: s.optional(s.lazy(() => orderQuantityUnitSchema)),
  note: s.optionalNullable(s.string()),
  catalogObjectId: s.optionalNullable(s.string()),
  catalogVersion: s.optionalNullable(s.number()),
  variationName: s.optionalNullable(s.string()),
  itemType: s.optional(s.lazy(() => orderLineItemItemTypeSchema)),
  metadata: s.optionalNullable(s.record(s.string(), s.string())),
  modifiers: s.optionalNullable(s.array(s.lazy(() => orderLineItemModifierSchema))),
  appliedTaxes: s.optionalNullable(s.array(s.lazy(() => orderLineItemAppliedTaxSchema))),
  appliedDiscounts: s.optionalNullable(s.array(s.lazy(() => orderLineItemAppliedDiscountSchema))),
  appliedServiceCharges: s.optionalNullable(s.array(s.lazy(() => orderLineItemAppliedServiceChargeSchema))),
  basePriceMoney: s.optional(s.lazy(() => moneySchema)),
  variationTotalPriceMoney: s.optional(s.lazy(() => moneySchema)),
  grossSalesMoney: s.optional(s.lazy(() => moneySchema)),
  totalTaxMoney: s.optional(s.lazy(() => moneySchema)),
  totalDiscountMoney: s.optional(s.lazy(() => moneySchema)),
  totalMoney: s.optional(s.lazy(() => moneySchema)),
  pricingBlocklists: s.optional(s.lazy(() => orderLineItemPricingBlocklistsSchema)),
  totalServiceChargeMoney: s.optional(s.lazy(() => moneySchema)),
  _keysMap: {
    quantityUnit: "quantity_unit",
    catalogObjectId: "catalog_object_id",
    catalogVersion: "catalog_version",
    variationName: "variation_name",
    itemType: "item_type",
    appliedTaxes: "applied_taxes",
    appliedDiscounts: "applied_discounts",
    appliedServiceCharges: "applied_service_charges",
    basePriceMoney: "base_price_money",
    variationTotalPriceMoney: "variation_total_price_money",
    grossSalesMoney: "gross_sales_money",
    totalTaxMoney: "total_tax_money",
    totalDiscountMoney: "total_discount_money",
    totalMoney: "total_money",
    pricingBlocklists: "pricing_blocklists",
    totalServiceChargeMoney: "total_service_charge_money",
  },
});
