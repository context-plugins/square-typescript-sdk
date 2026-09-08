import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** A list of products to return to external callers. */
export const ApplicationDetailsExternalSquareProduct = {
  Appointments: "APPOINTMENTS",
  EcommerceApi: "ECOMMERCE_API",
  Invoices: "INVOICES",
  OnlineStore: "ONLINE_STORE",
  Other: "OTHER",
  Restaurants: "RESTAURANTS",
  Retail: "RETAIL",
  SquarePos: "SQUARE_POS",
  TerminalApi: "TERMINAL_API",
  VirtualTerminal: "VIRTUAL_TERMINAL",
} as const;
export type ApplicationDetailsExternalSquareProduct =
  | (typeof ApplicationDetailsExternalSquareProduct)[keyof typeof ApplicationDetailsExternalSquareProduct]
  | (string & {});

export const applicationDetailsExternalSquareProductSchema: EnumSchema<ApplicationDetailsExternalSquareProduct> =
  s.enumOf<ApplicationDetailsExternalSquareProduct>(ApplicationDetailsExternalSquareProduct);
