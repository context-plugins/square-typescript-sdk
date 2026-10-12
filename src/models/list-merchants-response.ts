import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { merchantSchema, type Merchant } from "./merchant.js";

/**
 * The response object returned by the [ListMerchant](api-endpoint:Merchants-ListMerchants)
 * endpoint.
 */
export type ListMerchantsResponse = {
  /** Information on errors encountered during the request. */
  errors?: Error[];
  /** The requested `Merchant` entities. */
  merchant?: Merchant[];
  /**
   * If the response is truncated, the cursor to use in next request to fetch next set of objects.
   */
  cursor?: number;
};

export const listMerchantsResponseSchema: Schema<ListMerchantsResponse> = s.object<ListMerchantsResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  merchant: s.optional(s.array(s.lazy(() => merchantSchema))),
  cursor: s.optional(s.int()),
});
