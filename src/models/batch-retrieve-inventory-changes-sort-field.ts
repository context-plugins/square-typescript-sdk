import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BatchRetrieveInventoryChangesSortField = {
  OccurredAt: "OCCURRED_AT",
} as const;
export type BatchRetrieveInventoryChangesSortField =
  | (typeof BatchRetrieveInventoryChangesSortField)[keyof typeof BatchRetrieveInventoryChangesSortField]
  | (string & {});

export const batchRetrieveInventoryChangesSortFieldSchema: EnumSchema<BatchRetrieveInventoryChangesSortField> =
  s.enumOf<BatchRetrieveInventoryChangesSortField>(BatchRetrieveInventoryChangesSortField);
