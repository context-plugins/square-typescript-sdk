import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  orderFulfillmentUpdatedObjectSchema,
  type OrderFulfillmentUpdatedObject,
} from "./order-fulfillment-updated-object.js";

export type OrderFulfillmentUpdatedEventData = {
  type?: string | null;
  id?: string;
  object?: OrderFulfillmentUpdatedObject;
};

export const orderFulfillmentUpdatedEventDataSchema: Schema<OrderFulfillmentUpdatedEventData> =
  s.object<OrderFulfillmentUpdatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => orderFulfillmentUpdatedObjectSchema)),
  });
