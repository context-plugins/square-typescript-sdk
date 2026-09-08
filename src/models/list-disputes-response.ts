import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { disputeSchema, type Dispute } from "./dispute.js";
import { errorSchema, type Error } from "./error.js";

/** Defines fields in a `ListDisputes` response. */
export type ListDisputesResponse = {
  /** Information about errors encountered during the request. */
  errors?: Error[];
  /** The list of disputes. */
  disputes?: Dispute[];
  /**
   * The pagination cursor to be used in a subsequent request. If unset, this is the final response.
   * For more information, see
   * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
};

export const listDisputesResponseSchema: Schema<ListDisputesResponse> = s.object<ListDisputesResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  disputes: s.optional(s.array(s.lazy(() => disputeSchema))),
  cursor: s.optional(s.string()),
});
