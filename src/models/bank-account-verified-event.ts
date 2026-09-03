import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bankAccountVerifiedEventDataSchema,
  type BankAccountVerifiedEventData,
} from "./bank-account-verified-event-data.js";

export type BankAccountVerifiedEvent = {
  merchantId?: string | null;
  locationId?: string | null;
  type?: string | null;
  eventId?: string | null;
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
