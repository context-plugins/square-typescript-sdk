import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bankAccountCreatedEventDataSchema,
  type BankAccountCreatedEventData,
} from "./bank-account-created-event-data.js";

/**
 * Published when you link an external bank account to a Square account in the Seller Dashboard.
 * Square sets the initial status to `VERIFICATION_IN_PROGRESS` and publishes the event.
 */
export type BankAccountCreatedEvent = {
  /** The ID of the target merchant associated with the event. */
  merchantId?: string | null;
  /** The ID of the target location associated with the event. */
  locationId?: string | null;
  /** The type of event this represents, `"bank_account.created"`. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** Timestamp of when the event was created, in RFC 3339 format. */
  createdAt?: string;
  data?: BankAccountCreatedEventData;
};

export const bankAccountCreatedEventSchema: Schema<BankAccountCreatedEvent> =
  s.object<BankAccountCreatedEvent>({
    merchantId: s.optionalNullable(s.string()),
    locationId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => bankAccountCreatedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      locationId: "location_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
