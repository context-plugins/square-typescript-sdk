import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { actionCancelReasonSchema, type ActionCancelReason } from "./action-cancel-reason.js";
import { moneySchema, type Money } from "./money.js";

export type TerminalRefund = {
  id?: string;
  refundId?: string;
  paymentId: string;
  orderId?: string;
  amountMoney: Money;
  reason: string;
  deviceId: string;
  deadlineDuration?: string | null;
  status?: string;
  cancelReason?: ActionCancelReason;
  createdAt?: string;
  updatedAt?: string;
  appId?: string;
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
