import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { merchantSchema, type Merchant } from "./merchant.js";

export type ListMerchantsResponse = {
  errors?: Error[];
  merchant?: Merchant[];
  cursor?: number;
};

export const listMerchantsResponseSchema: Schema<ListMerchantsResponse> = s.object<ListMerchantsResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  merchant: s.optional(s.array(s.lazy(() => merchantSchema))),
  cursor: s.optional(s.number()),
});
