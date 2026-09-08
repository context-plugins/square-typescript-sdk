import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { payoutSchema, type Payout } from "./payout.js";

/** The response to retrieve payout records entries. */
export type ListPayoutsResponse = {
  /** The requested list of payouts. */
  payouts?: Payout[];
  /**
   * The pagination cursor to be used in a subsequent request. If empty, this is the final response.
   * For more information, see
   * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
  /** Information about errors encountered during the request. */
  errors?: Error[];
};

export const listPayoutsResponseSchema: Schema<ListPayoutsResponse> = s.object<ListPayoutsResponse>({
  payouts: s.optional(s.array(s.lazy(() => payoutSchema))),
  cursor: s.optional(s.string()),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
