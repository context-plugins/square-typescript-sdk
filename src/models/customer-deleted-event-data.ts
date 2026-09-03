import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customerDeletedEventObjectSchema,
  type CustomerDeletedEventObject,
} from "./customer-deleted-event-object.js";

export type CustomerDeletedEventData = {
  type?: string | null;
  id?: string;
  object?: CustomerDeletedEventObject;
};

export const customerDeletedEventDataSchema: Schema<CustomerDeletedEventData> =
  s.object<CustomerDeletedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => customerDeletedEventObjectSchema)),
  });
