import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  loyaltyAccountCreatedEventObjectSchema,
  type LoyaltyAccountCreatedEventObject,
} from "./loyalty-account-created-event-object.js";

export type LoyaltyAccountCreatedEventData = {
  type?: string | null;
  id?: string;
  object?: LoyaltyAccountCreatedEventObject;
};

export const loyaltyAccountCreatedEventDataSchema: Schema<LoyaltyAccountCreatedEventData> =
  s.object<LoyaltyAccountCreatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => loyaltyAccountCreatedEventObjectSchema)),
  });
