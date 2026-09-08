import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  loyaltyAccountCreatedEventObjectSchema,
  type LoyaltyAccountCreatedEventObject,
} from "./loyalty-account-created-event-object.js";

/** The data associated with a `loyalty.account.created` event. */
export type LoyaltyAccountCreatedEventData = {
  /** The type of object affected by the event. For this event, the value is `loyalty_account`. */
  type?: string | null;
  /** The ID of the affected loyalty account. */
  id?: string;
  object?: LoyaltyAccountCreatedEventObject;
};

export const loyaltyAccountCreatedEventDataSchema: Schema<LoyaltyAccountCreatedEventData> =
  s.object<LoyaltyAccountCreatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => loyaltyAccountCreatedEventObjectSchema)),
  });
