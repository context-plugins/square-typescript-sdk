import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orderUpdatedObjectSchema, type OrderUpdatedObject } from "./order-updated-object.js";

export type OrderUpdatedEventData = {
  /** Name of the affected object’s type, `"order_updated"`. */
  type?: string | null;
  /** ID of the affected order. */
  id?: string;
  object?: OrderUpdatedObject;
};

export const orderUpdatedEventDataSchema: Schema<OrderUpdatedEventData> = s.object<OrderUpdatedEventData>({
  type: s.optionalNullable(s.string()),
  id: s.optional(s.string()),
  object: s.optional(s.lazy(() => orderUpdatedObjectSchema)),
});
