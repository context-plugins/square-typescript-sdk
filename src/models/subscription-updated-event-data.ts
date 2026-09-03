import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  subscriptionUpdatedEventObjectSchema,
  type SubscriptionUpdatedEventObject,
} from "./subscription-updated-event-object.js";

export type SubscriptionUpdatedEventData = {
  type?: string | null;
  id?: string;
  object?: SubscriptionUpdatedEventObject;
};

export const subscriptionUpdatedEventDataSchema: Schema<SubscriptionUpdatedEventData> =
  s.object<SubscriptionUpdatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => subscriptionUpdatedEventObjectSchema)),
  });
