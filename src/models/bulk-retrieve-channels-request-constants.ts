import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BulkRetrieveChannelsRequestConstants = {
  MaxBatchSize: "MAX_BATCH_SIZE",
} as const;
export type BulkRetrieveChannelsRequestConstants =
  | (typeof BulkRetrieveChannelsRequestConstants)[keyof typeof BulkRetrieveChannelsRequestConstants]
  | (string & {});

export const bulkRetrieveChannelsRequestConstantsSchema: EnumSchema<BulkRetrieveChannelsRequestConstants> =
  s.enumOf<BulkRetrieveChannelsRequestConstants>(BulkRetrieveChannelsRequestConstants);
