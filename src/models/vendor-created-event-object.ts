import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  vendorCreatedEventObjectOperationSchema,
  type VendorCreatedEventObjectOperation,
} from "./vendor-created-event-object-operation.js";
import { vendorSchema, type Vendor } from "./vendor.js";

export type VendorCreatedEventObject = {
  /** The operation that can be performed against a vendor to cause the event to be published. */
  operation?: VendorCreatedEventObjectOperation;
  /** Represents a supplier to a seller. */
  vendor?: Vendor;
};

export const vendorCreatedEventObjectSchema: Schema<VendorCreatedEventObject> =
  s.object<VendorCreatedEventObject>({
    operation: s.optional(s.lazy(() => vendorCreatedEventObjectOperationSchema)),
    vendor: s.optional(s.lazy(() => vendorSchema)),
  });
