import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customerDeletedEventObjectSchema,
  type CustomerDeletedEventObject,
} from "./customer-deleted-event-object.js";

/** The data associated with the event. */
export type CustomerDeletedEventData = {
  /** The type of object affected by the event. For this event, the value is `customer`. */
  type?: string | null;
  /** The ID of the deleted customer. */
  id?: string;
  /** An object that contains the customer associated with the event. */
  object?: CustomerDeletedEventObject;
};

export const customerDeletedEventDataSchema: Schema<CustomerDeletedEventData> =
  s.object<CustomerDeletedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => customerDeletedEventObjectSchema)),
  });
