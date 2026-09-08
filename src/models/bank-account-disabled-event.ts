import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bankAccountDisabledEventDataSchema,
  type BankAccountDisabledEventData,
} from "./bank-account-disabled-event-data.js";

/** Published when Square sets the status of a [BankAccount](entity:BankAccount) to `DISABLED`. */
export type BankAccountDisabledEvent = {
  /** The ID of the target merchant associated with the event. */
  merchantId?: string | null;
  /** The ID of the target location associated with the event. */
  locationId?: string | null;
  /** The type of event this represents, `"bank_account.disabled"`. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** Timestamp of when the event was disabled, in RFC 3339 format. */
  createdAt?: string;
  data?: BankAccountDisabledEventData;
};

export const bankAccountDisabledEventSchema: Schema<BankAccountDisabledEvent> =
  s.object<BankAccountDisabledEvent>({
    merchantId: s.optionalNullable(s.string()),
    locationId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => bankAccountDisabledEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      locationId: "location_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
