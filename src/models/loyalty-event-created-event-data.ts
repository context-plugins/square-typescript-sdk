import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  loyaltyEventCreatedEventObjectSchema,
  type LoyaltyEventCreatedEventObject,
} from "./loyalty-event-created-event-object.js";

export type LoyaltyEventCreatedEventData = {
  type?: string | null;
  id?: string;
  object?: LoyaltyEventCreatedEventObject;
};

export const loyaltyEventCreatedEventDataSchema: Schema<LoyaltyEventCreatedEventData> =
  s.object<LoyaltyEventCreatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => loyaltyEventCreatedEventObjectSchema)),
  });
