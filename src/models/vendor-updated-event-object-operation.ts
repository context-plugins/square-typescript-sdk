import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The operation that can be performed against a vendor to cause the event to be published. */
export const VendorUpdatedEventObjectOperation = {
  Updated: "UPDATED",
} as const;
export type VendorUpdatedEventObjectOperation =
  | (typeof VendorUpdatedEventObjectOperation)[keyof typeof VendorUpdatedEventObjectOperation]
  | (string & {});

export const vendorUpdatedEventObjectOperationSchema: EnumSchema<VendorUpdatedEventObjectOperation> =
  s.enumOf<VendorUpdatedEventObjectOperation>(VendorUpdatedEventObjectOperation);
