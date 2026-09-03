import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GiftCardActivityUnblock = {
  reason: "CHARGEBACK_UNBLOCK";
};

export const giftCardActivityUnblockSchema: Schema<GiftCardActivityUnblock> =
  s.object<GiftCardActivityUnblock>({
    reason: s.literal("CHARGEBACK_UNBLOCK"),
  });
