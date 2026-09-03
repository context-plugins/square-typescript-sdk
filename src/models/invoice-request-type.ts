import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InvoiceRequestType = {
  Balance: "BALANCE",
  Deposit: "DEPOSIT",
  Installment: "INSTALLMENT",
} as const;
export type InvoiceRequestType = (typeof InvoiceRequestType)[keyof typeof InvoiceRequestType] | (string & {});

export const invoiceRequestTypeSchema: EnumSchema<InvoiceRequestType> =
  s.enumOf<InvoiceRequestType>(InvoiceRequestType);
