import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferOrderLineSchema, type TransferOrderLine } from "./transfer-order-line.js";
import { transferOrderStatusSchema, type TransferOrderStatus } from "./transfer-order-status.js";

/**
 * Represents a transfer order for moving [CatalogItemVariation](entity:CatalogItemVariation)s
 * between [Location](entity:Location)s. Transfer orders track the entire lifecycle of an inventory
 * transfer, including:
 * - What items and quantities are being moved
 * - Source and destination locations
 * - Current [TransferOrderStatus](entity:TransferOrderStatus)
 * - Shipping information and tracking
 * - Which [TeamMember](entity:TeamMember) initiated the transfer
 *
 * This object is commonly used to:
 * - Track [CatalogItemVariation](entity:CatalogItemVariation) movements between
 *   [Location](entity:Location)s
 * - Reconcile expected vs received quantities
 * - Monitor transfer progress and shipping status
 * - Audit inventory movement history
 */
export type TransferOrder = {
  /**
   * Unique system-generated identifier for this transfer order. Use this ID for:
   * - Retrieving transfer order details
   * - Tracking status changes via webhooks
   * - Linking transfers in external systems
   */
  id?: string;
  /**
   * The source [Location](entity:Location) sending the
   * [CatalogItemVariation](entity:CatalogItemVariation)s. This location must:
   * - Be active in your Square organization
   * - Have sufficient inventory for the items being transferred
   * - Not be the same as the destination location
   *
   * This field is not updatable.
   */
  sourceLocationId?: string | null;
  /**
   * The destination [Location](entity:Location) receiving the
   * [CatalogItemVariation](entity:CatalogItemVariation)s. This location must:
   * - Be active in your Square organization
   * - Not be the same as the source location
   *
   * This field is not updatable.
   */
  destinationLocationId?: string | null;
  /**
   * Status values for transfer orders. Represents the current state of a
   * [TransferOrder](entity:TransferOrder) in its lifecycle from creation to completion. Each status
   * determines what actions are available and how inventory is affected.
   */
  status?: TransferOrderStatus;
  /**
   * Timestamp when the transfer order was created, in RFC 3339 format. Used for:
   * - Auditing transfer history
   * - Tracking order age
   * - Reporting and analytics
   */
  createdAt?: string;
  /**
   * Timestamp when the transfer order was last updated, in RFC 3339 format. Updated when:
   * - Order status changes
   * - Items are received
   * - Notes or metadata are modified
   */
  updatedAt?: string;
  /**
   * Expected transfer completion date, in RFC 3339 format. Used for:
   * - Planning inventory availability
   * - Scheduling receiving staff
   * - Monitoring transfer timeliness
   */
  expectedAt?: string | null;
  /**
   * Timestamp when the transfer order was completed or canceled, in RFC 3339 format (e.g.
   * "2023-10-01T12:00:00Z").
   */
  completedAt?: string;
  /** Optional notes about the transfer. */
  notes?: string | null;
  /** Shipment tracking number for monitoring transfer progress. */
  trackingNumber?: string | null;
  /**
   * ID of the [TeamMember](entity:TeamMember) who created this transfer order. This field is not
   * writeable by the Connect V2 API.
   */
  createdByTeamMemberId?: string;
  /** List of [CatalogItemVariation](entity:CatalogItemVariation)s being transferred. */
  lineItems?: TransferOrderLine[] | null;
  /**
   * Version for optimistic concurrency control. This is a monotonically increasing integer that
   * changes whenever the transfer order is modified. Use this when calling
   * [UpdateTransferOrder](api-endpoint:TransferOrders-UpdateTransferOrder) and other endpoints to
   * ensure you're not overwriting concurrent changes.
   */
  version?: number;
};

export const transferOrderSchema: Schema<TransferOrder> = s.object<TransferOrder>({
  id: s.optional(s.string()),
  sourceLocationId: s.optionalNullable(s.string()),
  destinationLocationId: s.optionalNullable(s.string()),
  status: s.optional(s.lazy(() => transferOrderStatusSchema)),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  expectedAt: s.optionalNullable(s.string()),
  completedAt: s.optional(s.string()),
  notes: s.optionalNullable(s.string()),
  trackingNumber: s.optionalNullable(s.string()),
  createdByTeamMemberId: s.optional(s.string()),
  lineItems: s.optionalNullable(s.array(s.lazy(() => transferOrderLineSchema))),
  version: s.optional(s.number()),
  _keysMap: {
    sourceLocationId: "source_location_id",
    destinationLocationId: "destination_location_id",
    createdAt: "created_at",
    updatedAt: "updated_at",
    expectedAt: "expected_at",
    completedAt: "completed_at",
    trackingNumber: "tracking_number",
    createdByTeamMemberId: "created_by_team_member_id",
    lineItems: "line_items",
  },
});
