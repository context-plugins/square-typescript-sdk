import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BusinessBookingProfileBookingPolicy = {
  AcceptAll: "ACCEPT_ALL",
  RequiresAcceptance: "REQUIRES_ACCEPTANCE",
} as const;
export type BusinessBookingProfileBookingPolicy =
  | (typeof BusinessBookingProfileBookingPolicy)[keyof typeof BusinessBookingProfileBookingPolicy]
  | (string & {});

export const businessBookingProfileBookingPolicySchema: EnumSchema<BusinessBookingProfileBookingPolicy> =
  s.enumOf<BusinessBookingProfileBookingPolicy>(BusinessBookingProfileBookingPolicy);
