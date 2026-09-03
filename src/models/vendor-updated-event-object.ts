import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  vendorUpdatedEventObjectOperationSchema,
  type VendorUpdatedEventObjectOperation,
} from "./vendor-updated-event-object-operation.js";
import { vendorSchema, type Vendor } from "./vendor.js";

export type VendorUpdatedEventObject = {
  operation?: VendorUpdatedEventObjectOperation;
  vendor?: Vendor;
};

export const vendorUpdatedEventObjectSchema: Schema<VendorUpdatedEventObject> =
  s.object<VendorUpdatedEventObject>({
    operation: s.optional(s.lazy(() => vendorUpdatedEventObjectOperationSchema)),
    vendor: s.optional(s.lazy(() => vendorSchema)),
  });
