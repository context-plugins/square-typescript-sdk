import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  loyaltyAccountCreatedEventDataSchema,
  type LoyaltyAccountCreatedEventData,
} from "./loyalty-account-created-event-data.js";

/** Published when a [loyalty account](entity:LoyaltyAccount) is created. */
export type LoyaltyAccountCreatedEvent = {
  /** The ID of the Square seller associated with the event. */
  merchantId?: string | null;
  /** The type of event. For this event, the value is `loyalty.account.created`. */
  type?: string | null;
  /**
   * The unique ID for the event, which is used for [idempotency
   * support](https://developer.squareup.com/docs/webhooks/step4manage#webhooks-best-practices).
   */
  eventId?: string | null;
  /** The timestamp of when the event was created, in RFC 3339 format. */
  createdAt?: string;
  /** The data associated with a `loyalty.account.created` event. */
  data?: LoyaltyAccountCreatedEventData;
};

export const loyaltyAccountCreatedEventSchema: Schema<LoyaltyAccountCreatedEvent> =
  s.object<LoyaltyAccountCreatedEvent>({
    merchantId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => loyaltyAccountCreatedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
