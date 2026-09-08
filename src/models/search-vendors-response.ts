import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { vendorSchema, type Vendor } from "./vendor.js";

/** Represents an output from a call to [SearchVendors](api-endpoint:Vendors-SearchVendors). */
export type SearchVendorsResponse = {
  /** Errors encountered when the request fails. */
  errors?: Error[];
  /** The [Vendor](entity:Vendor) objects matching the specified search filter. */
  vendors?: Vendor[];
  /**
   * The pagination cursor to be used in a subsequent request. If unset, this is the final response.
   *
   * See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide
   * for more information.
   */
  cursor?: string;
};

export const searchVendorsResponseSchema: Schema<SearchVendorsResponse> = s.object<SearchVendorsResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  vendors: s.optional(s.array(s.lazy(() => vendorSchema))),
  cursor: s.optional(s.string()),
});
