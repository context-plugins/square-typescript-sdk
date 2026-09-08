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

/** The line item being returned in an order. */
export type OrderReturnLineItem = {
  /** A unique ID for this return line-item entry. */
  uid?: string | null;
  /** The `uid` of the line item in the original sale order. */
  sourceLineItemUid?: string | null;
  /** The name of the line item. */
  name?: string | null;
  /**
   * The quantity returned, formatted as a decimal number. For example, `"3"`.
   *
   * Line items with a `quantity_unit` can have non-integer quantities. For example, `"1.70000"`.
   */
  quantity: string;
  /**
   * Contains the measurement unit for a quantity and a precision that specifies the number of
   * digits after the decimal point for decimal quantities.
   */
  quantityUnit?: OrderQuantityUnit;
  /** The note of the return line item. */
  note?: string | null;
  /**
   * The [CatalogItemVariation](entity:CatalogItemVariation) ID applied to this return line item.
   */
  catalogObjectId?: string | null;
  /** The version of the catalog object that this line item references. */
  catalogVersion?: number | null;
  /** The name of the variation applied to this return line item. */
  variationName?: string | null;
  /** Represents the line item type. */
  itemType?: OrderLineItemItemType;
  /** The [CatalogModifier](entity:CatalogModifier)s applied to this line item. */
  returnModifiers?: OrderReturnLineItemModifier[] | null;
  /**
   * The list of references to `OrderReturnTax` entities applied to the return line item. Each
   * `OrderLineItemAppliedTax` has a `tax_uid` that references the `uid` of a top-level
   * `OrderReturnTax` applied to the return line item. On reads, the applied amount is populated.
   */
  appliedTaxes?: OrderLineItemAppliedTax[] | null;
  /**
   * The list of references to `OrderReturnDiscount` entities applied to the return line item. Each
   * `OrderLineItemAppliedDiscount` has a `discount_uid` that references the `uid` of a top-level
   * `OrderReturnDiscount` applied to the return line item. On reads, the applied amount is
   * populated.
   */
  appliedDiscounts?: OrderLineItemAppliedDiscount[] | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  basePriceMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  variationTotalPriceMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  grossReturnMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  totalTaxMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  totalDiscountMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  totalMoney?: Money;
  /**
   * The list of references to `OrderReturnServiceCharge` entities applied to the return line item.
   * Each `OrderLineItemAppliedServiceCharge` has a `service_charge_uid` that references the `uid`
   * of a top-level `OrderReturnServiceCharge` applied to the return line item. On reads, the
   * applied amount is populated.
   */
  appliedServiceCharges?: OrderLineItemAppliedServiceCharge[] | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
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
