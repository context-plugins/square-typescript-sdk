import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InvoiceDeliveryMethod = {
  Email: "EMAIL",
  ShareManually: "SHARE_MANUALLY",
  Sms: "SMS",
} as const;
export type InvoiceDeliveryMethod =
  | (typeof InvoiceDeliveryMethod)[keyof typeof InvoiceDeliveryMethod]
  | (string & {});

export const invoiceDeliveryMethodSchema: EnumSchema<InvoiceDeliveryMethod> =
  s.enumOf<InvoiceDeliveryMethod>(InvoiceDeliveryMethod);
