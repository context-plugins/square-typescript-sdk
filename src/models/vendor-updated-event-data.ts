import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  vendorUpdatedEventObjectSchema,
  type VendorUpdatedEventObject,
} from "./vendor-updated-event-object.js";

export type VendorUpdatedEventData = {
  type?: string | null;
  id?: string;
  object?: VendorUpdatedEventObject;
};

export const vendorUpdatedEventDataSchema: Schema<VendorUpdatedEventData> = s.object<VendorUpdatedEventData>({
  type: s.optionalNullable(s.string()),
  id: s.optional(s.string()),
  object: s.optional(s.lazy(() => vendorUpdatedEventObjectSchema)),
});
