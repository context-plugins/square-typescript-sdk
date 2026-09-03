import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  vendorCreatedEventObjectOperationSchema,
  type VendorCreatedEventObjectOperation,
} from "./vendor-created-event-object-operation.js";
import { vendorSchema, type Vendor } from "./vendor.js";

export type VendorCreatedEventObject = {
  operation?: VendorCreatedEventObjectOperation;
  vendor?: Vendor;
};

export const vendorCreatedEventObjectSchema: Schema<VendorCreatedEventObject> =
  s.object<VendorCreatedEventObject>({
    operation: s.optional(s.lazy(() => vendorCreatedEventObjectOperationSchema)),
    vendor: s.optional(s.lazy(() => vendorSchema)),
  });
