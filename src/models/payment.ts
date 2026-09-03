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

export type Payment = {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  amountMoney?: Money;
  tipMoney?: Money;
  totalMoney?: Money;
  appFeeMoney?: Money;
  approvedMoney?: Money;
  processingFee?: ProcessingFee[];
  refundedMoney?: Money;
  status?: string;
  delayDuration?: string;
  delayAction?: string | null;
  delayedUntil?: string;
  sourceType?: string;
  cardDetails?: CardPaymentDetails;
  cashDetails?: CashPaymentDetails;
  bankAccountDetails?: BankAccountPaymentDetails;
  electronicMoneyDetails?: ElectronicMoneyDetails;
  externalDetails?: ExternalPaymentDetails;
  walletDetails?: DigitalWalletDetails;
  buyNowPayLaterDetails?: BuyNowPayLaterDetails;
  squareAccountDetails?: SquareAccountDetails;
  locationId?: string;
  orderId?: string;
  referenceId?: string;
  customerId?: string;
  employeeId?: string;
  teamMemberId?: string | null;
  refundIds?: string[];
  riskEvaluation?: RiskEvaluation;
  terminalCheckoutId?: string;
  buyerEmailAddress?: string;
  billingAddress?: Address;
  shippingAddress?: Address;
  note?: string;
  statementDescriptionIdentifier?: string;
  capabilities?: string[];
  receiptNumber?: string;
  receiptUrl?: string;
  deviceDetails?: DeviceDetails;
  applicationDetails?: ApplicationDetails;
  isOfflinePayment?: boolean;
  offlinePaymentDetails?: OfflinePaymentDetails;
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
