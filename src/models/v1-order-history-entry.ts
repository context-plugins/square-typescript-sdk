import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  v1OrderHistoryEntryActionSchema,
  type V1OrderHistoryEntryAction,
} from "./v1-order-history-entry-action.js";

/** V1OrderHistoryEntry */
export type V1OrderHistoryEntry = {
  action?: V1OrderHistoryEntryAction;
  /** The time when the action was performed, in ISO 8601 format. */
  createdAt?: string;
};

export const v1OrderHistoryEntrySchema: Schema<V1OrderHistoryEntry> = s.object<V1OrderHistoryEntry>({
  action: s.optional(s.lazy(() => v1OrderHistoryEntryActionSchema)),
  createdAt: s.optional(s.string()),
  _keysMap: {
    createdAt: "created_at",
  },
});
