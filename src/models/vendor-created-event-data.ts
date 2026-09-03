import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  vendorCreatedEventObjectSchema,
  type VendorCreatedEventObject,
} from "./vendor-created-event-object.js";

export type VendorCreatedEventData = {
  type?: string | null;
  id?: string;
  object?: VendorCreatedEventObject;
};

export const vendorCreatedEventDataSchema: Schema<VendorCreatedEventData> = s.object<VendorCreatedEventData>({
  type: s.optionalNullable(s.string()),
  id: s.optional(s.string()),
  object: s.optional(s.lazy(() => vendorCreatedEventObjectSchema)),
});
