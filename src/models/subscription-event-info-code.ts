import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Supported info codes of a subscription event. */
export const SubscriptionEventInfoCode = {
  /** The location is not active. */
  LocationNotActive: "LOCATION_NOT_ACTIVE",
  /** The location cannot accept payments. */
  LocationCannotAcceptPayment: "LOCATION_CANNOT_ACCEPT_PAYMENT",
  /** The subscribing customer profile has been deleted. */
  CustomerDeleted: "CUSTOMER_DELETED",
  /** The subscribing customer does not have an email. */
  CustomerNoEmail: "CUSTOMER_NO_EMAIL",
  /** The subscribing customer does not have a name. */
  CustomerNoName: "CUSTOMER_NO_NAME",
  /** User-provided detail. */
  UserProvided: "USER_PROVIDED",
} as const;
export type SubscriptionEventInfoCode =
  | (typeof SubscriptionEventInfoCode)[keyof typeof SubscriptionEventInfoCode]
  | (string & {});

export const subscriptionEventInfoCodeSchema: EnumSchema<SubscriptionEventInfoCode> =
  s.enumOf<SubscriptionEventInfoCode>(SubscriptionEventInfoCode);
