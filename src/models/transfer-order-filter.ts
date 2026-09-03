import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferOrderStatusSchema, type TransferOrderStatus } from "./transfer-order-status.js";

export type TransferOrderFilter = {
  sourceLocationIds?: string[] | null;
  destinationLocationIds?: string[] | null;
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
