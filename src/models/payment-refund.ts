import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { destinationDetailsSchema, type DestinationDetails } from "./destination-details.js";
import { moneySchema, type Money } from "./money.js";
import { processingFeeSchema, type ProcessingFee } from "./processing-fee.js";

export type PaymentRefund = {
  id: string;
  status?: string | null;
  locationId?: string | null;
  unlinked?: boolean;
  destinationType?: string | null;
  destinationDetails?: DestinationDetails;
  amountMoney: Money;
  appFeeMoney?: Money;
  processingFee?: ProcessingFee[] | null;
  paymentId?: string | null;
  orderId?: string | null;
  reason?: string | null;
  createdAt?: string;
  updatedAt?: string;
  teamMemberId?: string;
  terminalRefundId?: string;
};

export const paymentRefundSchema: Schema<PaymentRefund> = s.object<PaymentRefund>({
  id: s.string(),
  status: s.optionalNullable(s.string()),
  locationId: s.optionalNullable(s.string()),
  unlinked: s.optional(s.boolean()),
  destinationType: s.optionalNullable(s.string()),
  destinationDetails: s.optional(s.lazy(() => destinationDetailsSchema)),
  amountMoney: moneySchema,
  appFeeMoney: s.optional(s.lazy(() => moneySchema)),
  processingFee: s.optionalNullable(s.array(s.lazy(() => processingFeeSchema))),
  paymentId: s.optionalNullable(s.string()),
  orderId: s.optionalNullable(s.string()),
  reason: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  teamMemberId: s.optional(s.string()),
  terminalRefundId: s.optional(s.string()),
  _keysMap: {
    locationId: "location_id",
    destinationType: "destination_type",
    destinationDetails: "destination_details",
    amountMoney: "amount_money",
    appFeeMoney: "app_fee_money",
    processingFee: "processing_fee",
    paymentId: "payment_id",
    orderId: "order_id",
    createdAt: "created_at",
    updatedAt: "updated_at",
    teamMemberId: "team_member_id",
    terminalRefundId: "terminal_refund_id",
  },
});
