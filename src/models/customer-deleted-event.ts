import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customerDeletedEventDataSchema,
  type CustomerDeletedEventData,
} from "./customer-deleted-event-data.js";

/**
 * Published when a [customer](entity:Customer) is deleted. For more information, see [Use Customer
 * Webhooks](https://developer.squareup.com/docs/customers-api/use-the-api/customer-webhooks).
 *
 * The `customer` object in the event notification does not include the following fields:
 * `group_ids` and `segment_ids`.
 */
export type CustomerDeletedEvent = {
  /** The ID of the seller associated with the event. */
  merchantId?: string | null;
  /** The type of event. For this object, the value is `customer.deleted`. */
  type?: string | null;
  /**
   * The unique ID of the event, which is used for [idempotency
   * support](https://developer.squareup.com/docs/webhooks/step4manage#webhooks-best-practices).
   */
  eventId?: string | null;
  /** The timestamp of when the event was created, in RFC 3339 format. */
  createdAt?: string;
  /** The data associated with the event. */
  data?: CustomerDeletedEventData;
};

export const customerDeletedEventSchema: Schema<CustomerDeletedEvent> = s.object<CustomerDeletedEvent>({
  merchantId: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  eventId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  data: s.optional(s.lazy(() => customerDeletedEventDataSchema)),
  _keysMap: {
    merchantId: "merchant_id",
    eventId: "event_id",
    createdAt: "created_at",
  },
});
