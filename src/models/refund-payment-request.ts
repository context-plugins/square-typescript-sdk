import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  destinationDetailsCashRefundDetailsSchema,
  type DestinationDetailsCashRefundDetails,
} from "./destination-details-cash-refund-details.js";
import {
  destinationDetailsExternalRefundDetailsSchema,
  type DestinationDetailsExternalRefundDetails,
} from "./destination-details-external-refund-details.js";
import { moneySchema, type Money } from "./money.js";

export type RefundPaymentRequest = {
  idempotencyKey: string;
  amountMoney: Money;
  appFeeMoney?: Money;
  paymentId?: string | null;
  destinationId?: string | null;
  unlinked?: boolean | null;
  locationId?: string | null;
  customerId?: string | null;
  reason?: string | null;
  paymentVersionToken?: string | null;
  teamMemberId?: string | null;
  cashDetails?: DestinationDetailsCashRefundDetails;
  externalDetails?: DestinationDetailsExternalRefundDetails;
};

export const refundPaymentRequestSchema: Schema<RefundPaymentRequest> = s.object<RefundPaymentRequest>({
  idempotencyKey: s.string(),
  amountMoney: moneySchema,
  appFeeMoney: s.optional(s.lazy(() => moneySchema)),
  paymentId: s.optionalNullable(s.string()),
  destinationId: s.optionalNullable(s.string()),
  unlinked: s.optionalNullable(s.boolean()),
  locationId: s.optionalNullable(s.string()),
  customerId: s.optionalNullable(s.string()),
  reason: s.optionalNullable(s.string()),
  paymentVersionToken: s.optionalNullable(s.string()),
  teamMemberId: s.optionalNullable(s.string()),
  cashDetails: s.optional(s.lazy(() => destinationDetailsCashRefundDetailsSchema)),
  externalDetails: s.optional(s.lazy(() => destinationDetailsExternalRefundDetailsSchema)),
  _keysMap: {
    idempotencyKey: "idempotency_key",
    amountMoney: "amount_money",
    appFeeMoney: "app_fee_money",
    paymentId: "payment_id",
    destinationId: "destination_id",
    locationId: "location_id",
    customerId: "customer_id",
    paymentVersionToken: "payment_version_token",
    teamMemberId: "team_member_id",
    cashDetails: "cash_details",
    externalDetails: "external_details",
  },
});
