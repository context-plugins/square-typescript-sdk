import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransactionProduct = {
  Register: "REGISTER",
  ExternalApi: "EXTERNAL_API",
  Billing: "BILLING",
  Appointments: "APPOINTMENTS",
  Invoices: "INVOICES",
  OnlineStore: "ONLINE_STORE",
  Payroll: "PAYROLL",
  Other: "OTHER",
} as const;
export type TransactionProduct = (typeof TransactionProduct)[keyof typeof TransactionProduct] | (string & {});

export const transactionProductSchema: EnumSchema<TransactionProduct> =
  s.enumOf<TransactionProduct>(TransactionProduct);
