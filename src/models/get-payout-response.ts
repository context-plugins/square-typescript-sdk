import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { payoutSchema, type Payout } from "./payout.js";

export type GetPayoutResponse = {
  payout?: Payout;
  errors?: Error[];
};

export const getPayoutResponseSchema: Schema<GetPayoutResponse> = s.object<GetPayoutResponse>({
  payout: s.optional(s.lazy(() => payoutSchema)),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
