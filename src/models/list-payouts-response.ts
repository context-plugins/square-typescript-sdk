import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { payoutSchema, type Payout } from "./payout.js";

export type ListPayoutsResponse = {
  payouts?: Payout[];
  cursor?: string;
  errors?: Error[];
};

export const listPayoutsResponseSchema: Schema<ListPayoutsResponse> = s.object<ListPayoutsResponse>({
  payouts: s.optional(s.array(s.lazy(() => payoutSchema))),
  cursor: s.optional(s.string()),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
