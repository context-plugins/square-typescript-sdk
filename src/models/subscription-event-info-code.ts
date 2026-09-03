import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SubscriptionEventInfoCode = {
  LocationNotActive: "LOCATION_NOT_ACTIVE",
  LocationCannotAcceptPayment: "LOCATION_CANNOT_ACCEPT_PAYMENT",
  CustomerDeleted: "CUSTOMER_DELETED",
  CustomerNoEmail: "CUSTOMER_NO_EMAIL",
  CustomerNoName: "CUSTOMER_NO_NAME",
  UserProvided: "USER_PROVIDED",
} as const;
export type SubscriptionEventInfoCode =
  | (typeof SubscriptionEventInfoCode)[keyof typeof SubscriptionEventInfoCode]
  | (string & {});

export const subscriptionEventInfoCodeSchema: EnumSchema<SubscriptionEventInfoCode> =
  s.enumOf<SubscriptionEventInfoCode>(SubscriptionEventInfoCode);
