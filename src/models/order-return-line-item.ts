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
import { orderQuantityUnitSchema, type OrderQuantityUnit } from "./order-quantity-unit.js";
import {
  orderReturnLineItemModifierSchema,
  type OrderReturnLineItemModifier,
} from "./order-return-line-item-modifier.js";

export type OrderReturnLineItem = {
  uid?: string | null;
  sourceLineItemUid?: string | null;
  name?: string | null;
  quantity: string;
  quantityUnit?: OrderQuantityUnit;
  note?: string | null;
  catalogObjectId?: string | null;
  catalogVersion?: number | null;
  variationName?: string | null;
  itemType?: OrderLineItemItemType;
  returnModifiers?: OrderReturnLineItemModifier[] | null;
  appliedTaxes?: OrderLineItemAppliedTax[] | null;
  appliedDiscounts?: OrderLineItemAppliedDiscount[] | null;
  basePriceMoney?: Money;
  variationTotalPriceMoney?: Money;
  grossReturnMoney?: Money;
  totalTaxMoney?: Money;
  totalDiscountMoney?: Money;
  totalMoney?: Money;
  appliedServiceCharges?: OrderLineItemAppliedServiceCharge[] | null;
  totalServiceChargeMoney?: Money;
};

export const orderReturnLineItemSchema: Schema<OrderReturnLineItem> = s.object<OrderReturnLineItem>({
  uid: s.optionalNullable(s.string()),
  sourceLineItemUid: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  quantity: s.string(),
  quantityUnit: s.optional(s.lazy(() => orderQuantityUnitSchema)),
  note: s.optionalNullable(s.string()),
  catalogObjectId: s.optionalNullable(s.string()),
  catalogVersion: s.optionalNullable(s.number()),
  variationName: s.optionalNullable(s.string()),
  itemType: s.optional(s.lazy(() => orderLineItemItemTypeSchema)),
  returnModifiers: s.optionalNullable(s.array(s.lazy(() => orderReturnLineItemModifierSchema))),
  appliedTaxes: s.optionalNullable(s.array(s.lazy(() => orderLineItemAppliedTaxSchema))),
  appliedDiscounts: s.optionalNullable(s.array(s.lazy(() => orderLineItemAppliedDiscountSchema))),
  basePriceMoney: s.optional(s.lazy(() => moneySchema)),
  variationTotalPriceMoney: s.optional(s.lazy(() => moneySchema)),
  grossReturnMoney: s.optional(s.lazy(() => moneySchema)),
  totalTaxMoney: s.optional(s.lazy(() => moneySchema)),
  totalDiscountMoney: s.optional(s.lazy(() => moneySchema)),
  totalMoney: s.optional(s.lazy(() => moneySchema)),
  appliedServiceCharges: s.optionalNullable(s.array(s.lazy(() => orderLineItemAppliedServiceChargeSchema))),
  totalServiceChargeMoney: s.optional(s.lazy(() => moneySchema)),
  _keysMap: {
    sourceLineItemUid: "source_line_item_uid",
    quantityUnit: "quantity_unit",
    catalogObjectId: "catalog_object_id",
    catalogVersion: "catalog_version",
    variationName: "variation_name",
    itemType: "item_type",
    returnModifiers: "return_modifiers",
    appliedTaxes: "applied_taxes",
    appliedDiscounts: "applied_discounts",
    basePriceMoney: "base_price_money",
    variationTotalPriceMoney: "variation_total_price_money",
    grossReturnMoney: "gross_return_money",
    totalTaxMoney: "total_tax_money",
    totalDiscountMoney: "total_discount_money",
    totalMoney: "total_money",
    appliedServiceCharges: "applied_service_charges",
    totalServiceChargeMoney: "total_service_charge_money",
  },
});
