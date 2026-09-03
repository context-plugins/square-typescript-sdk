import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaymentBalanceActivityDisputeDetail = {
  paymentId?: string | null;
  disputeId?: string | null;
};

export const paymentBalanceActivityDisputeDetailSchema: Schema<PaymentBalanceActivityDisputeDetail> =
  s.object<PaymentBalanceActivityDisputeDetail>({
    paymentId: s.optionalNullable(s.string()),
    disputeId: s.optionalNullable(s.string()),
    _keysMap: {
      paymentId: "payment_id",
      disputeId: "dispute_id",
    },
  });
