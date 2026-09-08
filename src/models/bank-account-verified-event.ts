import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bankAccountVerifiedEventDataSchema,
  type BankAccountVerifiedEventData,
} from "./bank-account-verified-event-data.js";

/** Published when Square sets the status of a [BankAccount](entity:BankAccount) to `VERIFIED`. */
export type BankAccountVerifiedEvent = {
  /** The ID of the target merchant associated with the event. */
  merchantId?: string | null;
  /** The ID of the target location associated with the event. */
  locationId?: string | null;
  /** The type of event this represents, `"bank_account.verified"`. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** Timestamp of when the event was verified, in RFC 3339 format. */
  createdAt?: string;
  data?: BankAccountVerifiedEventData;
};

export const bankAccountVerifiedEventSchema: Schema<BankAccountVerifiedEvent> =
  s.object<BankAccountVerifiedEvent>({
    merchantId: s.optionalNullable(s.string()),
    locationId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => bankAccountVerifiedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      locationId: "location_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
