import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferOrderStatusSchema, type TransferOrderStatus } from "./transfer-order-status.js";

/** Filter criteria for searching transfer orders */
export type TransferOrderFilter = {
  /** Filter by source location IDs */
  sourceLocationIds?: string[] | null;
  /** Filter by destination location IDs */
  destinationLocationIds?: string[] | null;
  /**
   * Filter by order statuses See [TransferOrderStatus](#type-transferorderstatus) for possible
   * values
   */
  statuses?: TransferOrderStatus[] | null;
};

export const transferOrderFilterSchema: Schema<TransferOrderFilter> = s.object<TransferOrderFilter>({
  sourceLocationIds: s.optionalNullable(s.array(s.string())),
  destinationLocationIds: s.optionalNullable(s.array(s.string())),
  statuses: s.optionalNullable(s.array(s.lazy(() => transferOrderStatusSchema))),
  _keysMap: {
    sourceLocationIds: "source_location_ids",
    destinationLocationIds: "destination_location_ids",
  },
});
