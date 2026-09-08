import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { actionCancelReasonSchema, type ActionCancelReason } from "./action-cancel-reason.js";
import { moneySchema, type Money } from "./money.js";

/**
 * Represents a payment refund processed by the Square Terminal. Only supports Interac (Canadian
 * debit network) payment refunds.
 */
export type TerminalRefund = {
  /** A unique ID for this `TerminalRefund`. */
  id?: string;
  /** The reference to the payment refund created by completing this `TerminalRefund`. */
  refundId?: string;
  /** The unique ID of the payment being refunded. */
  paymentId: string;
  /** The reference to the Square order ID for the payment identified by the `payment_id`. */
  orderId?: string;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  amountMoney: Money;
  /** A description of the reason for the refund. */
  reason: string;
  /**
   * The unique ID of the device intended for this `TerminalRefund`. The Id can be retrieved from
   * /v2/devices api.
   */
  deviceId: string;
  /**
   * The RFC 3339 duration, after which the refund is automatically canceled. A `TerminalRefund`
   * that is `PENDING` is automatically `CANCELED` and has a cancellation reason of `TIMED_OUT`.
   *
   * Default: 5 minutes from creation.
   *
   * Maximum: 5 minutes
   */
  deadlineDuration?: string | null;
  /**
   * The status of the `TerminalRefund`. Options: `PENDING`, `IN_PROGRESS`, `CANCEL_REQUESTED`,
   * `CANCELED`, or `COMPLETED`.
   */
  status?: string;
  cancelReason?: ActionCancelReason;
  /** The time when the `TerminalRefund` was created, as an RFC 3339 timestamp. */
  createdAt?: string;
  /** The time when the `TerminalRefund` was last updated, as an RFC 3339 timestamp. */
  updatedAt?: string;
  /** The ID of the application that created the refund. */
  appId?: string;
  /** The location of the device where the `TerminalRefund` was directed. */
  locationId?: string;
};

export const terminalRefundSchema: Schema<TerminalRefund> = s.object<TerminalRefund>({
  id: s.optional(s.string()),
  refundId: s.optional(s.string()),
  paymentId: s.string(),
  orderId: s.optional(s.string()),
  amountMoney: moneySchema,
  reason: s.string(),
  deviceId: s.string(),
  deadlineDuration: s.optionalNullable(s.string()),
  status: s.optional(s.string()),
  cancelReason: s.optional(s.lazy(() => actionCancelReasonSchema)),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  appId: s.optional(s.string()),
  locationId: s.optional(s.string()),
  _keysMap: {
    refundId: "refund_id",
    paymentId: "payment_id",
    orderId: "order_id",
    amountMoney: "amount_money",
    deviceId: "device_id",
    deadlineDuration: "deadline_duration",
    cancelReason: "cancel_reason",
    createdAt: "created_at",
    updatedAt: "updated_at",
    appId: "app_id",
    locationId: "location_id",
  },
});
