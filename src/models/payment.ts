import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { applicationDetailsSchema, type ApplicationDetails } from "./application-details.js";
import {
  bankAccountPaymentDetailsSchema,
  type BankAccountPaymentDetails,
} from "./bank-account-payment-details.js";
import { buyNowPayLaterDetailsSchema, type BuyNowPayLaterDetails } from "./buy-now-pay-later-details.js";
import { cardPaymentDetailsSchema, type CardPaymentDetails } from "./card-payment-details.js";
import { cashPaymentDetailsSchema, type CashPaymentDetails } from "./cash-payment-details.js";
import { deviceDetailsSchema, type DeviceDetails } from "./device-details.js";
import { digitalWalletDetailsSchema, type DigitalWalletDetails } from "./digital-wallet-details.js";
import { electronicMoneyDetailsSchema, type ElectronicMoneyDetails } from "./electronic-money-details.js";
import { externalPaymentDetailsSchema, type ExternalPaymentDetails } from "./external-payment-details.js";
import { moneySchema, type Money } from "./money.js";
import { offlinePaymentDetailsSchema, type OfflinePaymentDetails } from "./offline-payment-details.js";
import { processingFeeSchema, type ProcessingFee } from "./processing-fee.js";
import { riskEvaluationSchema, type RiskEvaluation } from "./risk-evaluation.js";
import { squareAccountDetailsSchema, type SquareAccountDetails } from "./square-account-details.js";

/** Represents a payment processed by the Square API. */
export type Payment = {
  /** A unique ID for the payment. */
  id?: string;
  /** The timestamp of when the payment was created, in RFC 3339 format. */
  createdAt?: string;
  /** The timestamp of when the payment was last updated, in RFC 3339 format. */
  updatedAt?: string;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  amountMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  tipMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  totalMoney?: Money;
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
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  approvedMoney?: Money;
  /** The processing fees and fee adjustments assessed by Square for this payment. */
  processingFee?: ProcessingFee[];
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  refundedMoney?: Money;
  /** Indicates whether the payment is APPROVED, PENDING, COMPLETED, CANCELED, or FAILED. */
  status?: string;
  /**
   * The duration of time after the payment's creation when Square automatically applies the
   * `delay_action` to the payment. This automatic `delay_action` applies only to payments that do
   * not reach a terminal state (COMPLETED, CANCELED, or FAILED) before the `delay_duration` time
   * period.
   *
   * This field is specified as a time duration, in RFC 3339 format.
   *
   * Notes: This feature is only supported for card payments.
   *
   * Default:
   *
   * - Card-present payments: "PT36H" (36 hours) from the creation time.
   * - Card-not-present payments: "P7D" (7 days) from the creation time.
   */
  delayDuration?: string;
  /**
   * The action to be applied to the payment when the `delay_duration` has elapsed.
   *
   * Current values include `CANCEL` and `COMPLETE`.
   */
  delayAction?: string | null;
  /**
   * The read-only timestamp of when the `delay_action` is automatically applied, in RFC 3339
   * format.
   *
   * Note that this field is calculated by summing the payment's `delay_duration` and `created_at`
   * fields. The `created_at` field is generated by Square and might not exactly match the time on
   * your local machine.
   */
  delayedUntil?: string;
  /**
   * The source type for this payment.
   *
   * Current values include `CARD`, `BANK_ACCOUNT`, `WALLET`, `BUY_NOW_PAY_LATER`, `SQUARE_ACCOUNT`,
   * `CASH` and `EXTERNAL`. For information about these payment source types, see [Take
   * Payments](https://developer.squareup.com/docs/payments-api/take-payments).
   */
  sourceType?: string;
  /** Reflects the current status of a card payment. Contains only non-confidential information. */
  cardDetails?: CardPaymentDetails;
  /**
   * Stores details about a cash payment. Contains only non-confidential information. For more
   * information, see [Take Cash
   * Payments](https://developer.squareup.com/docs/payments-api/take-payments/cash-payments).
   */
  cashDetails?: CashPaymentDetails;
  /** Additional details about BANK_ACCOUNT type payments. */
  bankAccountDetails?: BankAccountPaymentDetails;
  /** Details specific to electronic money payments. */
  electronicMoneyDetails?: ElectronicMoneyDetails;
  /**
   * Stores details about an external payment. Contains only non-confidential information. For more
   * information, see [Take External
   * Payments](https://developer.squareup.com/docs/payments-api/take-payments/external-payments).
   */
  externalDetails?: ExternalPaymentDetails;
  /**
   * Additional details about `WALLET` type payments. Contains only non-confidential information.
   */
  walletDetails?: DigitalWalletDetails;
  /** Additional details about a Buy Now Pay Later payment type. */
  buyNowPayLaterDetails?: BuyNowPayLaterDetails;
  /** Additional details about Square Account payments. */
  squareAccountDetails?: SquareAccountDetails;
  /** The ID of the location associated with the payment. */
  locationId?: string;
  /** The ID of the order associated with the payment. */
  orderId?: string;
  /** An optional ID that associates the payment with an entity in another system. */
  referenceId?: string;
  /**
   * The ID of the customer associated with the payment. If the ID is not provided in the
   * `CreatePayment` request that was used to create the `Payment`, Square may use information in
   * the request (such as the billing and shipping address, email address, and payment source) to
   * identify a matching customer profile in the Customer Directory. If found, the profile ID is
   * used. If a profile is not found, the API attempts to create an [instant
   * profile](https://developer.squareup.com/docs/customers-api/what-it-does#instant-profiles). If
   * the API cannot create an instant profile (either because the seller has disabled it or the
   * seller's region prevents creating it), this field remains unset. Note that this process is
   * asynchronous and it may take some time before a customer ID is added to the payment.
   */
  customerId?: string;
  /**
   * __Deprecated__: Use `Payment.team_member_id` instead.
   *
   * An optional ID of the employee associated with taking the payment.
   */
  employeeId?: string;
  /** An optional ID of the [TeamMember](entity:TeamMember) associated with taking the payment. */
  teamMemberId?: string | null;
  /** A list of `refund_id`s identifying refunds for the payment. */
  refundIds?: string[];
  /**
   * Represents fraud risk information for the associated payment.
   *
   * When you take a payment through Square's Payments API (using the `CreatePayment` endpoint),
   * Square evaluates it and assigns a risk level to the payment. Sellers can use this information
   * to determine the course of action (for example, provide the goods/services or refund the
   * payment).
   */
  riskEvaluation?: RiskEvaluation;
  /** An optional ID for a Terminal checkout that is associated with the payment. */
  terminalCheckoutId?: string;
  /** The buyer's email address. */
  buyerEmailAddress?: string;
  /**
   * Represents a postal address in a country. For more information, see [Working with
   * Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
   */
  billingAddress?: Address;
  /**
   * Represents a postal address in a country. For more information, see [Working with
   * Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
   */
  shippingAddress?: Address;
  /** An optional note to include when creating a payment. */
  note?: string;
  /**
   * Additional payment information that gets added to the customer's card statement as part of the
   * statement description.
   *
   * Note that the `statement_description_identifier` might get truncated on the statement
   * description to fit the required information including the Square identifier (SQ *) and the name
   * of the seller taking the payment.
   */
  statementDescriptionIdentifier?: string;
  /**
   * Actions that can be performed on this payment:
   * - `EDIT_AMOUNT_UP` - The payment amount can be edited up.
   * - `EDIT_AMOUNT_DOWN` - The payment amount can be edited down.
   * - `EDIT_TIP_AMOUNT_UP` - The tip amount can be edited up.
   * - `EDIT_TIP_AMOUNT_DOWN` - The tip amount can be edited down.
   * - `EDIT_DELAY_ACTION` - The delay_action can be edited.
   */
  capabilities?: string[];
  /** The payment's receipt number. The field is missing if a payment is canceled. */
  receiptNumber?: string;
  /** The URL for the payment's receipt. The field is only populated for COMPLETED payments. */
  receiptUrl?: string;
  /** Details about the device that took the payment. */
  deviceDetails?: DeviceDetails;
  /** Details about the application that took the payment. */
  applicationDetails?: ApplicationDetails;
  /** Whether or not this payment was taken offline. */
  isOfflinePayment?: boolean;
  /** Details specific to offline payments. */
  offlinePaymentDetails?: OfflinePaymentDetails;
  /**
   * Used for optimistic concurrency. This opaque token identifies a specific version of the
   * `Payment` object.
   */
  versionToken?: string | null;
};

export const paymentSchema: Schema<Payment> = s.object<Payment>({
  id: s.optional(s.string()),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  amountMoney: s.optional(s.lazy(() => moneySchema)),
  tipMoney: s.optional(s.lazy(() => moneySchema)),
  totalMoney: s.optional(s.lazy(() => moneySchema)),
  appFeeMoney: s.optional(s.lazy(() => moneySchema)),
  approvedMoney: s.optional(s.lazy(() => moneySchema)),
  processingFee: s.optional(s.array(s.lazy(() => processingFeeSchema))),
  refundedMoney: s.optional(s.lazy(() => moneySchema)),
  status: s.optional(s.string()),
  delayDuration: s.optional(s.string()),
  delayAction: s.optionalNullable(s.string()),
  delayedUntil: s.optional(s.string()),
  sourceType: s.optional(s.string()),
  cardDetails: s.optional(s.lazy(() => cardPaymentDetailsSchema)),
  cashDetails: s.optional(s.lazy(() => cashPaymentDetailsSchema)),
  bankAccountDetails: s.optional(s.lazy(() => bankAccountPaymentDetailsSchema)),
  electronicMoneyDetails: s.optional(s.lazy(() => electronicMoneyDetailsSchema)),
  externalDetails: s.optional(s.lazy(() => externalPaymentDetailsSchema)),
  walletDetails: s.optional(s.lazy(() => digitalWalletDetailsSchema)),
  buyNowPayLaterDetails: s.optional(s.lazy(() => buyNowPayLaterDetailsSchema)),
  squareAccountDetails: s.optional(s.lazy(() => squareAccountDetailsSchema)),
  locationId: s.optional(s.string()),
  orderId: s.optional(s.string()),
  referenceId: s.optional(s.string()),
  customerId: s.optional(s.string()),
  employeeId: s.optional(s.string()),
  teamMemberId: s.optionalNullable(s.string()),
  refundIds: s.optional(s.array(s.string())),
  riskEvaluation: s.optional(s.lazy(() => riskEvaluationSchema)),
  terminalCheckoutId: s.optional(s.string()),
  buyerEmailAddress: s.optional(s.string()),
  billingAddress: s.optional(s.lazy(() => addressSchema)),
  shippingAddress: s.optional(s.lazy(() => addressSchema)),
  note: s.optional(s.string()),
  statementDescriptionIdentifier: s.optional(s.string()),
  capabilities: s.optional(s.array(s.string())),
  receiptNumber: s.optional(s.string()),
  receiptUrl: s.optional(s.string()),
  deviceDetails: s.optional(s.lazy(() => deviceDetailsSchema)),
  applicationDetails: s.optional(s.lazy(() => applicationDetailsSchema)),
  isOfflinePayment: s.optional(s.boolean()),
  offlinePaymentDetails: s.optional(s.lazy(() => offlinePaymentDetailsSchema)),
  versionToken: s.optionalNullable(s.string()),
  _keysMap: {
    createdAt: "created_at",
    updatedAt: "updated_at",
    amountMoney: "amount_money",
    tipMoney: "tip_money",
    totalMoney: "total_money",
    appFeeMoney: "app_fee_money",
    approvedMoney: "approved_money",
    processingFee: "processing_fee",
    refundedMoney: "refunded_money",
    delayDuration: "delay_duration",
    delayAction: "delay_action",
    delayedUntil: "delayed_until",
    sourceType: "source_type",
    cardDetails: "card_details",
    cashDetails: "cash_details",
    bankAccountDetails: "bank_account_details",
    electronicMoneyDetails: "electronic_money_details",
    externalDetails: "external_details",
    walletDetails: "wallet_details",
    buyNowPayLaterDetails: "buy_now_pay_later_details",
    squareAccountDetails: "square_account_details",
    locationId: "location_id",
    orderId: "order_id",
    referenceId: "reference_id",
    customerId: "customer_id",
    employeeId: "employee_id",
    teamMemberId: "team_member_id",
    refundIds: "refund_ids",
    riskEvaluation: "risk_evaluation",
    terminalCheckoutId: "terminal_checkout_id",
    buyerEmailAddress: "buyer_email_address",
    billingAddress: "billing_address",
    shippingAddress: "shipping_address",
    statementDescriptionIdentifier: "statement_description_identifier",
    receiptNumber: "receipt_number",
    receiptUrl: "receipt_url",
    deviceDetails: "device_details",
    applicationDetails: "application_details",
    isOfflinePayment: "is_offline_payment",
    offlinePaymentDetails: "offline_payment_details",
    versionToken: "version_token",
  },
});
