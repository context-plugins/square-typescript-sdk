import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LocationCapability = {
  CreditCardProcessing: "CREDIT_CARD_PROCESSING",
  AutomaticTransfers: "AUTOMATIC_TRANSFERS",
  UnlinkedRefunds: "UNLINKED_REFUNDS",
} as const;
export type LocationCapability = (typeof LocationCapability)[keyof typeof LocationCapability] | (string & {});

export const locationCapabilitySchema: EnumSchema<LocationCapability> =
  s.enumOf<LocationCapability>(LocationCapability);
