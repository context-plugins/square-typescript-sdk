import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

/** A line item modifier being returned. */
export type OrderReturnLineItemModifier = {
  /** A unique ID that identifies the return modifier only within this order. */
  uid?: string | null;
  /**
   * The modifier `uid` from the order's line item that contains the original sale of this line item
   * modifier.
   */
  sourceModifierUid?: string | null;
  /** The catalog object ID referencing [CatalogModifier](entity:CatalogModifier). */
  catalogObjectId?: string | null;
  /** The version of the catalog object that this line item modifier references. */
  catalogVersion?: number | null;
  /** The name of the item modifier. */
  name?: string | null;
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
  totalPriceMoney?: Money;
  /**
   * The quantity of the line item modifier. The modifier quantity can be 0 or more. For example,
   * suppose a restaurant offers a cheeseburger on the menu. When a buyer orders this item, the
   * restaurant records the purchase by creating an `Order` object with a line item for a burger.
   * The line item includes a line item modifier: the name is cheese and the quantity is 1. The
   * buyer has the option to order extra cheese (or no cheese). If the buyer chooses the extra
   * cheese option, the modifier quantity increases to 2. If the buyer does not want any cheese, the
   * modifier quantity is set to 0.
   */
  quantity?: string | null;
};

export const orderReturnLineItemModifierSchema: Schema<OrderReturnLineItemModifier> =
  s.object<OrderReturnLineItemModifier>({
    uid: s.optionalNullable(s.string()),
    sourceModifierUid: s.optionalNullable(s.string()),
    catalogObjectId: s.optionalNullable(s.string()),
    catalogVersion: s.optionalNullable(s.int()),
    name: s.optionalNullable(s.string()),
    basePriceMoney: s.optional(s.lazy(() => moneySchema)),
    totalPriceMoney: s.optional(s.lazy(() => moneySchema)),
    quantity: s.optionalNullable(s.string()),
    _keysMap: {
      sourceModifierUid: "source_modifier_uid",
      catalogObjectId: "catalog_object_id",
      catalogVersion: "catalog_version",
      basePriceMoney: "base_price_money",
      totalPriceMoney: "total_price_money",
    },
  });
