import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customerCreatedEventObjectSchema,
  type CustomerCreatedEventObject,
} from "./customer-created-event-object.js";

/** The data associated with the event. */
export type CustomerCreatedEventData = {
  /** The type of object affected by the event. For this event, the value is `customer`. */
  type?: string | null;
  /** The ID of the new customer. */
  id?: string;
  /** An object that contains the customer associated with the event. */
  object?: CustomerCreatedEventObject;
};

export const customerCreatedEventDataSchema: Schema<CustomerCreatedEventData> =
  s.object<CustomerCreatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => customerCreatedEventObjectSchema)),
  });
