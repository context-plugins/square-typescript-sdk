import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customerCreatedEventEventContextSchema,
  type CustomerCreatedEventEventContext,
} from "./customer-created-event-event-context.js";
import { customerSchema, type Customer } from "./customer.js";

/** An object that contains the customer associated with the event. */
export type CustomerCreatedEventObject = {
  /** Represents a Square customer profile in the Customer Directory of a Square seller. */
  customer?: Customer;
  /** Information about the change that triggered the event. */
  eventContext?: CustomerCreatedEventEventContext;
};

export const customerCreatedEventObjectSchema: Schema<CustomerCreatedEventObject> =
  s.object<CustomerCreatedEventObject>({
    customer: s.optional(s.lazy(() => customerSchema)),
    eventContext: s.optional(s.lazy(() => customerCreatedEventEventContextSchema)),
    _keysMap: {
      eventContext: "event_context",
    },
  });
