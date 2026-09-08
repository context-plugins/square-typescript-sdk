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

/**
 * Describes a request to refund a payment using
 * [RefundPayment](api-endpoint:Refunds-RefundPayment).
 */
export type RefundPaymentRequest = {
  /**
   * A unique string that identifies this `RefundPayment` request. The key can be any valid string
   * but must be unique for every `RefundPayment` request.
   *
   * Keys are limited to a max of 45 characters - however, the number of allowed characters might be
   * less than 45, if multi-byte characters are used.
   *
   * For more information, see
   * [Idempotency](https://developer.squareup.com/docs/working-with-apis/idempotency).
   */
  idempotencyKey: string;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  amountMoney: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  appFeeMoney?: Money;
  /**
   * The unique ID of the payment being refunded. Required when unlinked=false, otherwise must not
   * be set.
   */
  paymentId?: string | null;
  /**
   * The ID indicating where funds will be refunded to. Required for unlinked refunds. For more
   * information, see [Process an Unlinked
   * Refund](https://developer.squareup.com/docs/refunds-api/unlinked-refunds).
   *
   * For refunds linked to Square payments, `destination_id` is usually omitted; in this case, funds
   * will be returned to the original payment source. The field may be specified in order to request
   * a cross-method refund to a gift card. For more information, see [Cross-method refunds to gift
   * cards](https://developer.squareup.com/docs/payments-api/refund-payments#cross-method-refunds-to-gift-cards).
   */
  destinationId?: string | null;
  /**
   * Indicates that the refund is not linked to a Square payment. If set to true, `destination_id`
   * and `location_id` must be supplied while `payment_id` must not be provided.
   */
  unlinked?: boolean | null;
  /**
   * The location ID associated with the unlinked refund. Required for requests specifying
   * `unlinked=true`. Otherwise, if included when `unlinked=false`, will throw an error.
   */
  locationId?: string | null;
  /**
   * The [Customer](entity:Customer) ID of the customer associated with the refund. This is required
   * if the `destination_id` refers to a card on file created using the Cards API. Only allowed when
   * `unlinked=true`.
   */
  customerId?: string | null;
  /** A description of the reason for the refund. */
  reason?: string | null;
  /**
   * Used for optimistic concurrency. This opaque token identifies the current `Payment` version
   * that the caller expects. If the server has a different version of the Payment, the update fails
   * and a response with a VERSION_MISMATCH error is returned. If the versions match, or the field
   * is not provided, the refund proceeds as normal.
   */
  paymentVersionToken?: string | null;
  /** An optional [TeamMember](entity:TeamMember) ID to associate with this refund. */
  teamMemberId?: string | null;
  /** Stores details about a cash refund. Contains only non-confidential information. */
  cashDetails?: DestinationDetailsCashRefundDetails;
  /** Stores details about an external refund. Contains only non-confidential information. */
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
