import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { merchantSchema, type Merchant } from "./merchant.js";

export type RetrieveMerchantResponse = {
  errors?: Error[];
  merchant?: Merchant;
};

export const retrieveMerchantResponseSchema: Schema<RetrieveMerchantResponse> =
  s.object<RetrieveMerchantResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    merchant: s.optional(s.lazy(() => merchantSchema)),
  });
