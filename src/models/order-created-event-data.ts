import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orderCreatedObjectSchema, type OrderCreatedObject } from "./order-created-object.js";

export type OrderCreatedEventData = {
  /** Name of the affected object’s type, `"order_created"`. */
  type?: string | null;
  /** ID of the affected order. */
  id?: string;
  object?: OrderCreatedObject;
};

export const orderCreatedEventDataSchema: Schema<OrderCreatedEventData> = s.object<OrderCreatedEventData>({
  type: s.optionalNullable(s.string()),
  id: s.optional(s.string()),
  object: s.optional(s.lazy(() => orderCreatedObjectSchema)),
});
