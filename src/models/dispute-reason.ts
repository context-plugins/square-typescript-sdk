import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DisputeReason = {
  AmountDiffers: "AMOUNT_DIFFERS",
  Cancelled: "CANCELLED",
  Duplicate: "DUPLICATE",
  NoKnowledge: "NO_KNOWLEDGE",
  NotAsDescribed: "NOT_AS_DESCRIBED",
  NotReceived: "NOT_RECEIVED",
  PaidByOtherMeans: "PAID_BY_OTHER_MEANS",
  CustomerRequestsCredit: "CUSTOMER_REQUESTS_CREDIT",
  EmvLiabilityShift: "EMV_LIABILITY_SHIFT",
} as const;
export type DisputeReason = (typeof DisputeReason)[keyof typeof DisputeReason] | (string & {});

export const disputeReasonSchema: EnumSchema<DisputeReason> = s.enumOf<DisputeReason>(DisputeReason);
