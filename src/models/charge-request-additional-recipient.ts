import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

/**
 * Represents an additional recipient (other than the merchant) entitled to a portion of the tender.
 * Support is currently limited to USD, CAD and GBP currencies
 */
export type ChargeRequestAdditionalRecipient = {
  /**
   * The location ID for a recipient (other than the merchant) receiving a portion of the tender.
   */
  locationId: string;
  /** The description of the additional recipient. */
  description: string;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  amountMoney: Money;
};

export const chargeRequestAdditionalRecipientSchema: Schema<ChargeRequestAdditionalRecipient> =
  s.object<ChargeRequestAdditionalRecipient>({
    locationId: s.string(),
    description: s.string(),
    amountMoney: moneySchema,
    _keysMap: {
      locationId: "location_id",
      amountMoney: "amount_money",
    },
  });
