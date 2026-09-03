import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { additionalRecipientSchema, type AdditionalRecipient } from "./additional-recipient.js";
import { moneySchema, type Money } from "./money.js";
import {
  tenderBankAccountDetailsSchema,
  type TenderBankAccountDetails,
} from "./tender-bank-account-details.js";
import {
  tenderBuyNowPayLaterDetailsSchema,
  type TenderBuyNowPayLaterDetails,
} from "./tender-buy-now-pay-later-details.js";
import { tenderCardDetailsSchema, type TenderCardDetails } from "./tender-card-details.js";
import { tenderCashDetailsSchema, type TenderCashDetails } from "./tender-cash-details.js";
import {
  tenderSquareAccountDetailsSchema,
  type TenderSquareAccountDetails,
} from "./tender-square-account-details.js";
import { tenderTypeSchema, type TenderType } from "./tender-type.js";

export type Tender = {
  id?: string;
  locationId?: string | null;
  transactionId?: string | null;
  createdAt?: string;
  note?: string | null;
  amountMoney?: Money;
  tipMoney?: Money;
  processingFeeMoney?: Money;
  customerId?: string | null;
  type: TenderType;
  cardDetails?: TenderCardDetails;
  cashDetails?: TenderCashDetails;
  bankAccountDetails?: TenderBankAccountDetails;
  buyNowPayLaterDetails?: TenderBuyNowPayLaterDetails;
  squareAccountDetails?: TenderSquareAccountDetails;
  additionalRecipients?: AdditionalRecipient[] | null;
  paymentId?: string | null;
};

export const tenderSchema: Schema<Tender> = s.object<Tender>({
  id: s.optional(s.string()),
  locationId: s.optionalNullable(s.string()),
  transactionId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  note: s.optionalNullable(s.string()),
  amountMoney: s.optional(s.lazy(() => moneySchema)),
  tipMoney: s.optional(s.lazy(() => moneySchema)),
  processingFeeMoney: s.optional(s.lazy(() => moneySchema)),
  customerId: s.optionalNullable(s.string()),
  type: tenderTypeSchema,
  cardDetails: s.optional(s.lazy(() => tenderCardDetailsSchema)),
  cashDetails: s.optional(s.lazy(() => tenderCashDetailsSchema)),
  bankAccountDetails: s.optional(s.lazy(() => tenderBankAccountDetailsSchema)),
  buyNowPayLaterDetails: s.optional(s.lazy(() => tenderBuyNowPayLaterDetailsSchema)),
  squareAccountDetails: s.optional(s.lazy(() => tenderSquareAccountDetailsSchema)),
  additionalRecipients: s.optionalNullable(s.array(s.lazy(() => additionalRecipientSchema))),
  paymentId: s.optionalNullable(s.string()),
  _keysMap: {
    locationId: "location_id",
    transactionId: "transaction_id",
    createdAt: "created_at",
    amountMoney: "amount_money",
    tipMoney: "tip_money",
    processingFeeMoney: "processing_fee_money",
    customerId: "customer_id",
    cardDetails: "card_details",
    cashDetails: "cash_details",
    bankAccountDetails: "bank_account_details",
    buyNowPayLaterDetails: "buy_now_pay_later_details",
    squareAccountDetails: "square_account_details",
    additionalRecipients: "additional_recipients",
    paymentId: "payment_id",
  },
});
