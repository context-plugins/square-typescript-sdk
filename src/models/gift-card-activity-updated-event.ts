import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  giftCardActivityUpdatedEventDataSchema,
  type GiftCardActivityUpdatedEventData,
} from "./gift-card-activity-updated-event-data.js";

/**
 * Published when a [gift card activity](entity:GiftCardActivity) is updated. Subscribe to this
 * event to be notified about the following changes:
 * - An update to the `REDEEM` activity for a gift card redemption made from a Square product (such
 *   as Square Point of Sale). These redemptions are initially assigned a `PENDING` state, but then
 *   change to a `COMPLETED` or `CANCELED` state.
 * - An update to the `IMPORT` activity for an imported gift card when the balance is later adjusted
 *   by Square.
 */
export type GiftCardActivityUpdatedEvent = {
  /** The ID of the Square seller associated with the event. */
  merchantId?: string | null;
  /** The type of event. For this event, the value is `gift_card.activity.updated`. */
  type?: string | null;
  /**
   * The unique ID of the event, which is used for [idempotency
   * support](https://developer.squareup.com/docs/webhooks/step4manage#webhooks-best-practices).
   */
  eventId?: string | null;
  /** The timestamp of when the event was created, in RFC 3339 format. */
  createdAt?: string;
  /** The data associated with a `gift_card.activity.updated` event. */
  data?: GiftCardActivityUpdatedEventData;
};

export const giftCardActivityUpdatedEventSchema: Schema<GiftCardActivityUpdatedEvent> =
  s.object<GiftCardActivityUpdatedEvent>({
    merchantId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => giftCardActivityUpdatedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
