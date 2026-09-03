import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { payoutEntrySchema, type PayoutEntry } from "./payout-entry.js";

export type ListPayoutEntriesResponse = {
  payoutEntries?: PayoutEntry[];
  cursor?: string;
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
