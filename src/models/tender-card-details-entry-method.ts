import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the method used to enter the card's details. */
export const TenderCardDetailsEntryMethod = {
  /** The card was swiped through a Square reader or Square stand. */
  Swiped: "SWIPED",
  /**
   * The card information was keyed manually into Square Point of Sale or a Square-hosted web form.
   */
  Keyed: "KEYED",
  /** The card was processed via EMV with a Square reader. */
  Emv: "EMV",
  /** The buyer's card details were already on file with Square. */
  OnFile: "ON_FILE",
  /** The card was processed via a contactless (i.e., NFC) transaction with a Square reader. */
  Contactless: "CONTACTLESS",
} as const;
export type TenderCardDetailsEntryMethod =
  | (typeof TenderCardDetailsEntryMethod)[keyof typeof TenderCardDetailsEntryMethod]
  | (string & {});

export const tenderCardDetailsEntryMethodSchema: EnumSchema<TenderCardDetailsEntryMethod> =
  s.enumOf<TenderCardDetailsEntryMethod>(TenderCardDetailsEntryMethod);
