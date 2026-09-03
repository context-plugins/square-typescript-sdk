import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  loyaltyAccountUpdatedEventObjectSchema,
  type LoyaltyAccountUpdatedEventObject,
} from "./loyalty-account-updated-event-object.js";

export type LoyaltyAccountUpdatedEventData = {
  type?: string | null;
  id?: string;
  object?: LoyaltyAccountUpdatedEventObject;
};

export const loyaltyAccountUpdatedEventDataSchema: Schema<LoyaltyAccountUpdatedEventData> =
  s.object<LoyaltyAccountUpdatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => loyaltyAccountUpdatedEventObjectSchema)),
  });
