import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerSchema, type Customer } from "./customer.js";

/** An object that contains the customer associated with the event. */
export type CustomerUpdatedEventObject = {
  /** Represents a Square customer profile in the Customer Directory of a Square seller. */
  customer?: Customer;
};

export const customerUpdatedEventObjectSchema: Schema<CustomerUpdatedEventObject> =
  s.object<CustomerUpdatedEventObject>({
    customer: s.optional(s.lazy(() => customerSchema)),
  });
