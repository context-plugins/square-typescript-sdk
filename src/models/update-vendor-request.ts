import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { vendorSchema, type Vendor } from "./vendor.js";

/** Represents an input to a call to [UpdateVendor](api-endpoint:Vendors-UpdateVendor). */
export type UpdateVendorRequest = {
  /**
   * A client-supplied, universally unique identifier (UUID) for the request.
   *
   * See
   * [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency)
   * in the [API Development 101](https://developer.squareup.com/docs/buildbasics) section for more
   * information.
   */
  idempotencyKey?: string | null;
  /** Represents a supplier to a seller. */
  vendor: Vendor;
};

export const updateVendorRequestSchema: Schema<UpdateVendorRequest> = s.object<UpdateVendorRequest>({
  idempotencyKey: s.optionalNullable(s.string()),
  vendor: vendorSchema,
  _keysMap: {
    idempotencyKey: "idempotency_key",
  },
});
