import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerSchema, type Customer } from "./customer.js";

export type CustomerUpdatedEventObject = {
  customer?: Customer;
};

export const customerUpdatedEventObjectSchema: Schema<CustomerUpdatedEventObject> =
  s.object<CustomerUpdatedEventObject>({
    customer: s.optional(s.lazy(() => customerSchema)),
  });
