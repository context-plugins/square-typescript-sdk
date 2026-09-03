import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InvoiceAutomaticPaymentSource = {
  None: "NONE",
  CardOnFile: "CARD_ON_FILE",
  BankOnFile: "BANK_ON_FILE",
} as const;
export type InvoiceAutomaticPaymentSource =
  | (typeof InvoiceAutomaticPaymentSource)[keyof typeof InvoiceAutomaticPaymentSource]
  | (string & {});

export const invoiceAutomaticPaymentSourceSchema: EnumSchema<InvoiceAutomaticPaymentSource> =
  s.enumOf<InvoiceAutomaticPaymentSource>(InvoiceAutomaticPaymentSource);
