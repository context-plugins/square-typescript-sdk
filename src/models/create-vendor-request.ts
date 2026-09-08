import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { vendorSchema, type Vendor } from "./vendor.js";

/** Represents an input to a call to [CreateVendor](api-endpoint:Vendors-CreateVendor). */
export type CreateVendorRequest = {
  /**
   * A client-supplied, universally unique identifier (UUID) to make this
   * [CreateVendor](api-endpoint:Vendors-CreateVendor) call idempotent.
   *
   * See
   * [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency)
   * in the [API Development 101](https://developer.squareup.com/docs/buildbasics) section for more
   * information.
   */
  idempotencyKey: string;
  /** Represents a supplier to a seller. */
  vendor?: Vendor;
};

export const createVendorRequestSchema: Schema<CreateVendorRequest> = s.object<CreateVendorRequest>({
  idempotencyKey: s.string(),
  vendor: s.optional(s.lazy(() => vendorSchema)),
  _keysMap: {
    idempotencyKey: "idempotency_key",
  },
});
