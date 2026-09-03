import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InvoiceAcceptedPaymentMethods = {
  card?: boolean | null;
  squareGiftCard?: boolean | null;
  bankAccount?: boolean | null;
  buyNowPayLater?: boolean | null;
  cashAppPay?: boolean | null;
};

export const invoiceAcceptedPaymentMethodsSchema: Schema<InvoiceAcceptedPaymentMethods> =
  s.object<InvoiceAcceptedPaymentMethods>({
    card: s.optionalNullable(s.boolean()),
    squareGiftCard: s.optionalNullable(s.boolean()),
    bankAccount: s.optionalNullable(s.boolean()),
    buyNowPayLater: s.optionalNullable(s.boolean()),
    cashAppPay: s.optionalNullable(s.boolean()),
    _keysMap: {
      squareGiftCard: "square_gift_card",
      bankAccount: "bank_account",
      buyNowPayLater: "buy_now_pay_later",
      cashAppPay: "cash_app_pay",
    },
  });
