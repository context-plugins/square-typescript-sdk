import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  vendorUpdatedEventObjectOperationSchema,
  type VendorUpdatedEventObjectOperation,
} from "./vendor-updated-event-object-operation.js";
import { vendorSchema, type Vendor } from "./vendor.js";

export type VendorUpdatedEventObject = {
  /** The operation that can be performed against a vendor to cause the event to be published. */
  operation?: VendorUpdatedEventObjectOperation;
  /** Represents a supplier to a seller. */
  vendor?: Vendor;
};

export const vendorUpdatedEventObjectSchema: Schema<VendorUpdatedEventObject> =
  s.object<VendorUpdatedEventObject>({
    operation: s.optional(s.lazy(() => vendorUpdatedEventObjectOperationSchema)),
    vendor: s.optional(s.lazy(() => vendorSchema)),
  });
