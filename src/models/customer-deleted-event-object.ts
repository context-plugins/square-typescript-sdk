import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customerDeletedEventEventContextSchema,
  type CustomerDeletedEventEventContext,
} from "./customer-deleted-event-event-context.js";
import { customerSchema, type Customer } from "./customer.js";

/** An object that contains the customer associated with the event. */
export type CustomerDeletedEventObject = {
  /** Represents a Square customer profile in the Customer Directory of a Square seller. */
  customer?: Customer;
  /** Information about the change that triggered the event. */
  eventContext?: CustomerDeletedEventEventContext;
};

export const customerDeletedEventObjectSchema: Schema<CustomerDeletedEventObject> =
  s.object<CustomerDeletedEventObject>({
    customer: s.optional(s.lazy(() => customerSchema)),
    eventContext: s.optional(s.lazy(() => customerDeletedEventEventContextSchema)),
    _keysMap: {
      eventContext: "event_context",
    },
  });
