import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  orderFulfillmentUpdatedObjectSchema,
  type OrderFulfillmentUpdatedObject,
} from "./order-fulfillment-updated-object.js";

export type OrderFulfillmentUpdatedEventData = {
  /** Name of the affected object’s type, `"order_fulfillment_updated"`. */
  type?: string | null;
  /** ID of the affected order. */
  id?: string;
  object?: OrderFulfillmentUpdatedObject;
};

export const orderFulfillmentUpdatedEventDataSchema: Schema<OrderFulfillmentUpdatedEventData> =
  s.object<OrderFulfillmentUpdatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => orderFulfillmentUpdatedObjectSchema)),
  });
