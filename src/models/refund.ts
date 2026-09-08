import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { additionalRecipientSchema, type AdditionalRecipient } from "./additional-recipient.js";
import { moneySchema, type Money } from "./money.js";
import { refundStatusSchema, type RefundStatus } from "./refund-status.js";

/** Represents a refund processed for a Square transaction. */
export type Refund = {
  /** The refund's unique ID. */
  id: string;
  /** The ID of the refund's associated location. */
  locationId: string;
  /** The ID of the transaction that the refunded tender is part of. */
  transactionId?: string | null;
  /** The ID of the refunded tender. */
  tenderId?: string | null;
  /** The timestamp for when the refund was created, in RFC 3339 format. */
  createdAt?: string;
  /** The reason for the refund being issued. */
  reason: string;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  amountMoney: Money;
  /** Indicates a refund's current status. */
  status: RefundStatus;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  processingFeeMoney?: Money;
  /**
   * Additional recipients (other than the merchant) receiving a portion of this refund. For
   * example, fees assessed on a refund of a purchase by a third party integration.
   */
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
