import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  giftCardActivityClearBalanceReasonSchema,
  type GiftCardActivityClearBalanceReason,
} from "./gift-card-activity-clear-balance-reason.js";

export type GiftCardActivityClearBalance = {
  reason: GiftCardActivityClearBalanceReason;
};

export const giftCardActivityClearBalanceSchema: Schema<GiftCardActivityClearBalance> =
  s.object<GiftCardActivityClearBalance>({
    reason: giftCardActivityClearBalanceReasonSchema,
  });
