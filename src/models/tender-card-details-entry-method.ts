import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TenderCardDetailsEntryMethod = {
  Swiped: "SWIPED",
  Keyed: "KEYED",
  Emv: "EMV",
  OnFile: "ON_FILE",
  Contactless: "CONTACTLESS",
} as const;
export type TenderCardDetailsEntryMethod =
  | (typeof TenderCardDetailsEntryMethod)[keyof typeof TenderCardDetailsEntryMethod]
  | (string & {});

export const tenderCardDetailsEntryMethodSchema: EnumSchema<TenderCardDetailsEntryMethod> =
  s.enumOf<TenderCardDetailsEntryMethod>(TenderCardDetailsEntryMethod);
