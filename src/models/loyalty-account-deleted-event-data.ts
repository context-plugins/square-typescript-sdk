import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  loyaltyAccountDeletedEventObjectSchema,
  type LoyaltyAccountDeletedEventObject,
} from "./loyalty-account-deleted-event-object.js";

export type LoyaltyAccountDeletedEventData = {
  type?: string | null;
  id?: string;
  object?: LoyaltyAccountDeletedEventObject;
};

export const loyaltyAccountDeletedEventDataSchema: Schema<LoyaltyAccountDeletedEventData> =
  s.object<LoyaltyAccountDeletedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => loyaltyAccountDeletedEventObjectSchema)),
  });
