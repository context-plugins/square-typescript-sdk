import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  loyaltyAccountDeletedEventObjectSchema,
  type LoyaltyAccountDeletedEventObject,
} from "./loyalty-account-deleted-event-object.js";

/** The data associated with a `loyalty.account.deleted` event. */
export type LoyaltyAccountDeletedEventData = {
  /** The type of object affected by the event. For this event, the value is `loyalty_account`. */
  type?: string | null;
  /** The ID of the affected loyalty account. */
  id?: string;
  object?: LoyaltyAccountDeletedEventObject;
};

export const loyaltyAccountDeletedEventDataSchema: Schema<LoyaltyAccountDeletedEventData> =
  s.object<LoyaltyAccountDeletedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => loyaltyAccountDeletedEventObjectSchema)),
  });
