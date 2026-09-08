import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  loyaltyAccountUpdatedEventObjectSchema,
  type LoyaltyAccountUpdatedEventObject,
} from "./loyalty-account-updated-event-object.js";

/** The data associated with a `loyalty.account.updated` event. */
export type LoyaltyAccountUpdatedEventData = {
  /** The type of object affected by the event. For this event, the value is `loyalty_account`. */
  type?: string | null;
  /** The ID of the affected loyalty account. */
  id?: string;
  object?: LoyaltyAccountUpdatedEventObject;
};

export const loyaltyAccountUpdatedEventDataSchema: Schema<LoyaltyAccountUpdatedEventData> =
  s.object<LoyaltyAccountUpdatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => loyaltyAccountUpdatedEventObjectSchema)),
  });
