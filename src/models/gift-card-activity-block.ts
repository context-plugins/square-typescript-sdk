import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Represents details about a `BLOCK` [gift card activity type](entity:GiftCardActivityType). */
export type GiftCardActivityBlock = {
  /** Indicates the reason for blocking a [gift card](entity:GiftCard). */
  reason: "CHARGEBACK_BLOCK";
};

export const giftCardActivityBlockSchema: Schema<GiftCardActivityBlock> = s.object<GiftCardActivityBlock>({
  reason: s.literal("CHARGEBACK_BLOCK"),
});
