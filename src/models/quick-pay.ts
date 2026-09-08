import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

/**
 * Describes an ad hoc item and price to generate a quick pay checkout link. For more information,
 * see [Quick Pay Checkout](https://developer.squareup.com/docs/checkout-api/quick-pay-checkout).
 */
export type QuickPay = {
  /** The ad hoc item name. In the resulting `Order`, this name appears as the line item name. */
  name: string;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  priceMoney: Money;
  /** The ID of the business location the checkout is associated with. */
  locationId: string;
};

export const quickPaySchema: Schema<QuickPay> = s.object<QuickPay>({
  name: s.string(),
  priceMoney: moneySchema,
  locationId: s.string(),
  _keysMap: {
    priceMoney: "price_money",
    locationId: "location_id",
  },
});
