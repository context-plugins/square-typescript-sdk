import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { merchantSchema, type Merchant } from "./merchant.js";

/**
 * The response object returned by the [RetrieveMerchant](api-endpoint:Merchants-RetrieveMerchant)
 * endpoint.
 */
export type RetrieveMerchantResponse = {
  /** Information on errors encountered during the request. */
  errors?: Error[];
  /** Represents a business that sells with Square. */
  merchant?: Merchant;
};

export const retrieveMerchantResponseSchema: Schema<RetrieveMerchantResponse> =
  s.object<RetrieveMerchantResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    merchant: s.optional(s.lazy(() => merchantSchema)),
  });
