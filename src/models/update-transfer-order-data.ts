import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  updateTransferOrderLineDataSchema,
  type UpdateTransferOrderLineData,
} from "./update-transfer-order-line-data.js";

/** Data model for updating a transfer order. All fields are optional. */
export type UpdateTransferOrderData = {
  /**
   * The source [Location](entity:Location) that will send the items. Must be an active location in
   * your Square account with sufficient inventory of the requested items.
   */
  sourceLocationId?: string | null;
  /**
   * The destination [Location](entity:Location) that will receive the items. Must be an active
   * location in your Square account.
   */
  destinationLocationId?: string | null;
  /** Expected transfer date in RFC 3339 format (e.g. "2023-10-01T12:00:00Z"). */
  expectedAt?: string | null;
  /** Optional notes about the transfer */
  notes?: string | null;
  /** Shipment tracking number */
  trackingNumber?: string | null;
  /** List of items being transferred */
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
