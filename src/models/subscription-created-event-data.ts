import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  subscriptionCreatedEventObjectSchema,
  type SubscriptionCreatedEventObject,
} from "./subscription-created-event-object.js";

export type SubscriptionCreatedEventData = {
  type?: string | null;
  id?: string;
  object?: SubscriptionCreatedEventObject;
};

export const subscriptionCreatedEventDataSchema: Schema<SubscriptionCreatedEventData> =
  s.object<SubscriptionCreatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => subscriptionCreatedEventObjectSchema)),
  });
