import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The operation that can be performed against a vendor to cause the event to be published. */
export const VendorCreatedEventObjectOperation = {
  Created: "CREATED",
} as const;
export type VendorCreatedEventObjectOperation =
  | (typeof VendorCreatedEventObjectOperation)[keyof typeof VendorCreatedEventObjectOperation]
  | (string & {});

export const vendorCreatedEventObjectOperationSchema: EnumSchema<VendorCreatedEventObjectOperation> =
  s.enumOf<VendorCreatedEventObjectOperation>(VendorCreatedEventObjectOperation);
