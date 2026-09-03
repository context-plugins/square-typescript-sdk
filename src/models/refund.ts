import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { additionalRecipientSchema, type AdditionalRecipient } from "./additional-recipient.js";
import { moneySchema, type Money } from "./money.js";
import { refundStatusSchema, type RefundStatus } from "./refund-status.js";

export type Refund = {
  id: string;
  locationId: string;
  transactionId?: string | null;
  tenderId?: string | null;
  createdAt?: string;
  reason: string;
  amountMoney: Money;
  status: RefundStatus;
  processingFeeMoney?: Money;
  additionalRecipients?: AdditionalRecipient[] | null;
};

export const refundSchema: Schema<Refund> = s.object<Refund>({
  id: s.string(),
  locationId: s.string(),
  transactionId: s.optionalNullable(s.string()),
  tenderId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  reason: s.string(),
  amountMoney: moneySchema,
  status: refundStatusSchema,
  processingFeeMoney: s.optional(s.lazy(() => moneySchema)),
  additionalRecipients: s.optionalNullable(s.array(s.lazy(() => additionalRecipientSchema))),
  _keysMap: {
    locationId: "location_id",
    transactionId: "transaction_id",
    tenderId: "tender_id",
    createdAt: "created_at",
    amountMoney: "amount_money",
    processingFeeMoney: "processing_fee_money",
    additionalRecipients: "additional_recipients",
  },
});
