import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GiftCardActivityBlock = {
  reason: "CHARGEBACK_BLOCK";
};

export const giftCardActivityBlockSchema: Schema<GiftCardActivityBlock> = s.object<GiftCardActivityBlock>({
  reason: s.literal("CHARGEBACK_BLOCK"),
});
