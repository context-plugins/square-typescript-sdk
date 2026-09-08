import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the Square product used to generate a change. */
export const Product = {
  /** Square Point of Sale application. */
  SquarePos: "SQUARE_POS",
  /** Square Connect APIs (for example, Orders API or Checkout API). */
  ExternalApi: "EXTERNAL_API",
  /** A Square subscription (various products). */
  Billing: "BILLING",
  /** Square Appointments. */
  Appointments: "APPOINTMENTS",
  /** Square Invoices. */
  Invoices: "INVOICES",
  /** Square Online Store. */
  OnlineStore: "ONLINE_STORE",
  /** Square Payroll. */
  Payroll: "PAYROLL",
  /** Square Dashboard. */
  Dashboard: "DASHBOARD",
  /** Item Library Import. */
  ItemLibraryImport: "ITEM_LIBRARY_IMPORT",
  /** A Square product that does not match any other value. */
  Other: "OTHER",
} as const;
export type Product = (typeof Product)[keyof typeof Product] | (string & {});

export const productSchema: EnumSchema<Product> = s.enumOf<Product>(Product);
