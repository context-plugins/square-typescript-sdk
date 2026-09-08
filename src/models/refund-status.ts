import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates a refund's current status. */
export const RefundStatus = {
  /** The refund is pending. */
  Pending: "PENDING",
  /** The refund has been approved by Square. */
  Approved: "APPROVED",
  /** The refund has been rejected by Square. */
  Rejected: "REJECTED",
  /** The refund failed. */
  Failed: "FAILED",
} as const;
export type RefundStatus = (typeof RefundStatus)[keyof typeof RefundStatus] | (string & {});

export const refundStatusSchema: EnumSchema<RefundStatus> = s.enumOf<RefundStatus>(RefundStatus);
