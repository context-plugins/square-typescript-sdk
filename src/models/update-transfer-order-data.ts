import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  updateTransferOrderLineDataSchema,
  type UpdateTransferOrderLineData,
} from "./update-transfer-order-line-data.js";

export type UpdateTransferOrderData = {
  sourceLocationId?: string | null;
  destinationLocationId?: string | null;
  expectedAt?: string | null;
  notes?: string | null;
  trackingNumber?: string | null;
  lineItems?: UpdateTransferOrderLineData[] | null;
};

export const updateTransferOrderDataSchema: Schema<UpdateTransferOrderData> =
  s.object<UpdateTransferOrderData>({
    sourceLocationId: s.optionalNullable(s.string()),
    destinationLocationId: s.optionalNullable(s.string()),
    expectedAt: s.optionalNullable(s.string()),
    notes: s.optionalNullable(s.string()),
    trackingNumber: s.optionalNullable(s.string()),
    lineItems: s.optionalNullable(s.array(s.lazy(() => updateTransferOrderLineDataSchema))),
    _keysMap: {
      sourceLocationId: "source_location_id",
      destinationLocationId: "destination_location_id",
      expectedAt: "expected_at",
      trackingNumber: "tracking_number",
      lineItems: "line_items",
    },
  });
