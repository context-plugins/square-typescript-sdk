import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  giftCardActivityDeactivateReasonSchema,
  type GiftCardActivityDeactivateReason,
} from "./gift-card-activity-deactivate-reason.js";

export type GiftCardActivityDeactivate = {
  reason: GiftCardActivityDeactivateReason;
};

export const giftCardActivityDeactivateSchema: Schema<GiftCardActivityDeactivate> =
  s.object<GiftCardActivityDeactivate>({
    reason: giftCardActivityDeactivateReasonSchema,
  });
