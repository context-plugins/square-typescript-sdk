import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the Square product used to process a transaction. */
export const TransactionProduct = {
  /** Square Point of Sale. */
  Register: "REGISTER",
  /** The Square Connect API. */
  ExternalApi: "EXTERNAL_API",
  /** A Square subscription for one of multiple products. */
  Billing: "BILLING",
  /** Square Appointments. */
  Appointments: "APPOINTMENTS",
  /** Square Invoices. */
  Invoices: "INVOICES",
  /** Square Online Store. */
  OnlineStore: "ONLINE_STORE",
  /** Square Payroll. */
  Payroll: "PAYROLL",
  /** A Square product that does not match any other value. */
  Other: "OTHER",
} as const;
export type TransactionProduct = (typeof TransactionProduct)[keyof typeof TransactionProduct] | (string & {});

export const transactionProductSchema: EnumSchema<TransactionProduct> =
  s.enumOf<TransactionProduct>(TransactionProduct);
