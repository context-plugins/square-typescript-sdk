import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customerUpdatedEventObjectSchema,
  type CustomerUpdatedEventObject,
} from "./customer-updated-event-object.js";

/** The data associated with the event. */
export type CustomerUpdatedEventData = {
  /** The type of object affected by the event. For this event, the value is `customer`. */
  type?: string | null;
  /** The ID of the updated customer. */
  id?: string;
  /** An object that contains the customer associated with the event. */
  object?: CustomerUpdatedEventObject;
};

export const customerUpdatedEventDataSchema: Schema<CustomerUpdatedEventData> =
  s.object<CustomerUpdatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => customerUpdatedEventObjectSchema)),
  });
