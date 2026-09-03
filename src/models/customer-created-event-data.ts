import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customerCreatedEventObjectSchema,
  type CustomerCreatedEventObject,
} from "./customer-created-event-object.js";

export type CustomerCreatedEventData = {
  type?: string | null;
  id?: string;
  object?: CustomerCreatedEventObject;
};

export const customerCreatedEventDataSchema: Schema<CustomerCreatedEventData> =
  s.object<CustomerCreatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => customerCreatedEventObjectSchema)),
  });
