import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  loyaltyEventCreatedEventObjectSchema,
  type LoyaltyEventCreatedEventObject,
} from "./loyalty-event-created-event-object.js";

/** The data associated with a `loyalty.event.created` event. */
export type LoyaltyEventCreatedEventData = {
  /** The type of object affected by the event. For this event, the value is `loyalty_event`. */
  type?: string | null;
  /** ID of the affected loyalty event. */
  id?: string;
  object?: LoyaltyEventCreatedEventObject;
};

export const loyaltyEventCreatedEventDataSchema: Schema<LoyaltyEventCreatedEventData> =
  s.object<LoyaltyEventCreatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => loyaltyEventCreatedEventObjectSchema)),
  });
