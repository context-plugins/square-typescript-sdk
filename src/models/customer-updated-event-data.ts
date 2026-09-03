import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customerUpdatedEventObjectSchema,
  type CustomerUpdatedEventObject,
} from "./customer-updated-event-object.js";

export type CustomerUpdatedEventData = {
  type?: string | null;
  id?: string;
  object?: CustomerUpdatedEventObject;
};

export const customerUpdatedEventDataSchema: Schema<CustomerUpdatedEventData> =
  s.object<CustomerUpdatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => customerUpdatedEventObjectSchema)),
  });
