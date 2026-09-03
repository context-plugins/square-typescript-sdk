import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Product = {
  SquarePos: "SQUARE_POS",
  ExternalApi: "EXTERNAL_API",
  Billing: "BILLING",
  Appointments: "APPOINTMENTS",
  Invoices: "INVOICES",
  OnlineStore: "ONLINE_STORE",
  Payroll: "PAYROLL",
  Dashboard: "DASHBOARD",
  ItemLibraryImport: "ITEM_LIBRARY_IMPORT",
  Other: "OTHER",
} as const;
export type Product = (typeof Product)[keyof typeof Product] | (string & {});

export const productSchema: EnumSchema<Product> = s.enumOf<Product>(Product);
