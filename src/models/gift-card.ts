import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { giftCardGanSourceSchema, type GiftCardGanSource } from "./gift-card-gan-source.js";
import { giftCardStatusSchema, type GiftCardStatus } from "./gift-card-status.js";
import { giftCardTypeSchema, type GiftCardType } from "./gift-card-type.js";
import { moneySchema, type Money } from "./money.js";

/** Represents a Square gift card. */
export type GiftCard = {
  /** The Square-assigned ID of the gift card. */
  id?: string;
  /** Indicates the gift card type. */
  type: GiftCardType;
  /** Indicates the source that generated the gift card account number (GAN). */
  ganSource?: GiftCardGanSource;
  /** Indicates the gift card state. */
  state?: GiftCardStatus;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  balanceMoney?: Money;
  /**
   * The gift card account number (GAN). Buyers can use the GAN to make purchases or check the gift
   * card balance.
   */
  gan?: string | null;
  /**
   * The timestamp when the gift card was created, in RFC 3339 format. In the case of a digital gift
   * card, it is the time when you create a card (using the Square Point of Sale application, Seller
   * Dashboard, or Gift Cards API). In the case of a plastic gift card, it is the time when Square
   * associates the card with the seller at the time of activation.
   */
  createdAt?: string;
  /** The IDs of the [customer profiles](entity:Customer) to whom this gift card is linked. */
  customerIds?: string[];
};

export const giftCardSchema: Schema<GiftCard> = s.object<GiftCard>({
  id: s.optional(s.string()),
  type: giftCardTypeSchema,
  ganSource: s.optional(s.lazy(() => giftCardGanSourceSchema)),
  state: s.optional(s.lazy(() => giftCardStatusSchema)),
  balanceMoney: s.optional(s.lazy(() => moneySchema)),
  gan: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  customerIds: s.optional(s.array(s.string())),
  _keysMap: {
    ganSource: "gan_source",
    balanceMoney: "balance_money",
    createdAt: "created_at",
    customerIds: "customer_ids",
  },
});
