import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Policies for accepting bookings. */
export const BusinessBookingProfileBookingPolicy = {
  /** The seller accepts all booking requests automatically. */
  AcceptAll: "ACCEPT_ALL",
  /** The seller must accept requests to complete bookings. */
  RequiresAcceptance: "REQUIRES_ACCEPTANCE",
} as const;
export type BusinessBookingProfileBookingPolicy =
  | (typeof BusinessBookingProfileBookingPolicy)[keyof typeof BusinessBookingProfileBookingPolicy]
  | (string & {});

export const businessBookingProfileBookingPolicySchema: EnumSchema<BusinessBookingProfileBookingPolicy> =
  s.enumOf<BusinessBookingProfileBookingPolicy>(BusinessBookingProfileBookingPolicy);
