import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The capabilities a location might have. */
export const LocationCapability = {
  /** The capability to process credit card transactions with Square. */
  CreditCardProcessing: "CREDIT_CARD_PROCESSING",
  /** The capability to receive automatic transfers from Square. */
  AutomaticTransfers: "AUTOMATIC_TRANSFERS",
  /** The capability to process unlinked refunds with Square. */
  UnlinkedRefunds: "UNLINKED_REFUNDS",
} as const;
export type LocationCapability = (typeof LocationCapability)[keyof typeof LocationCapability] | (string & {});

export const locationCapabilitySchema: EnumSchema<LocationCapability> =
  s.enumOf<LocationCapability>(LocationCapability);
