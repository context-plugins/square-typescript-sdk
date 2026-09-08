import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { payoutEntrySchema, type PayoutEntry } from "./payout-entry.js";

/** The response to retrieve payout records entries. */
export type ListPayoutEntriesResponse = {
  /** The requested list of payout entries, ordered with the given or default sort order. */
  payoutEntries?: PayoutEntry[];
  /**
   * The pagination cursor to be used in a subsequent request. If empty, this is the final response.
   * For more information, see
   * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
  /** Information about errors encountered during the request. */
  errors?: Error[];
};

export const listPayoutEntriesResponseSchema: Schema<ListPayoutEntriesResponse> =
  s.object<ListPayoutEntriesResponse>({
    payoutEntries: s.optional(s.array(s.lazy(() => payoutEntrySchema))),
    cursor: s.optional(s.string()),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      payoutEntries: "payout_entries",
    },
  });
