import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VendorCreatedEventObjectOperation = {
  Created: "CREATED",
} as const;
export type VendorCreatedEventObjectOperation =
  | (typeof VendorCreatedEventObjectOperation)[keyof typeof VendorCreatedEventObjectOperation]
  | (string & {});

export const vendorCreatedEventObjectOperationSchema: EnumSchema<VendorCreatedEventObjectOperation> =
  s.enumOf<VendorCreatedEventObjectOperation>(VendorCreatedEventObjectOperation);
