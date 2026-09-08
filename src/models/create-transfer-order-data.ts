import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  createTransferOrderLineDataSchema,
  type CreateTransferOrderLineData,
} from "./create-transfer-order-line-data.js";

/**
 * Data for creating a new transfer order to move
 * [CatalogItemVariation](entity:CatalogItemVariation)s between [Location](entity:Location)s. Used
 * with the [CreateTransferOrder](api-endpoint:TransferOrders-CreateTransferOrder) endpoint.
 */
export type CreateTransferOrderData = {
  /**
   * The source [Location](entity:Location) that will send the items. Must be an active location in
   * your Square account with sufficient inventory of the requested items.
   */
  sourceLocationId: string;
  /**
   * The destination [Location](entity:Location) that will receive the items. Must be an active
   * location in your Square account
   */
  destinationLocationId: string;
  /** Expected transfer date in RFC 3339 format (e.g. "2023-10-01T12:00:00Z"). */
  expectedAt?: string | null;
  /** Optional notes about the transfer */
  notes?: string | null;
  /** Optional shipment tracking number */
  trackingNumber?: string | null;
  /**
   * ID of the [TeamMember](entity:TeamMember) creating this transfer order. Used for tracking and
   * auditing purposes.
   */
  createdByTeamMemberId?: string | null;
  /**
   * List of [CatalogItemVariation](entity:CatalogItemVariation)s to transfer, including quantities
   */
  lineItems?: CreateTransferOrderLineData[] | null;
};

export const createTransferOrderDataSchema: Schema<CreateTransferOrderData> =
  s.object<CreateTransferOrderData>({
    sourceLocationId: s.string(),
    destinationLocationId: s.string(),
    expectedAt: s.optionalNullable(s.string()),
    notes: s.optionalNullable(s.string()),
    trackingNumber: s.optionalNullable(s.string()),
    createdByTeamMemberId: s.optionalNullable(s.string()),
    lineItems: s.optionalNullable(s.array(s.lazy(() => createTransferOrderLineDataSchema))),
    _keysMap: {
      sourceLocationId: "source_location_id",
      destinationLocationId: "destination_location_id",
      expectedAt: "expected_at",
      trackingNumber: "tracking_number",
      createdByTeamMemberId: "created_by_team_member_id",
      lineItems: "line_items",
    },
  });
