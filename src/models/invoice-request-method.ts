import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InvoiceRequestMethod = {
  Email: "EMAIL",
  ChargeCardOnFile: "CHARGE_CARD_ON_FILE",
  ShareManually: "SHARE_MANUALLY",
  ChargeBankOnFile: "CHARGE_BANK_ON_FILE",
  Sms: "SMS",
  SmsChargeCardOnFile: "SMS_CHARGE_CARD_ON_FILE",
  SmsChargeBankOnFile: "SMS_CHARGE_BANK_ON_FILE",
} as const;
export type InvoiceRequestMethod =
  | (typeof InvoiceRequestMethod)[keyof typeof InvoiceRequestMethod]
  | (string & {});

export const invoiceRequestMethodSchema: EnumSchema<InvoiceRequestMethod> =
  s.enumOf<InvoiceRequestMethod>(InvoiceRequestMethod);
