import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Fields that can be used for sorting [TransferOrder](entity:TransferOrder)s in search results.
 * Used with [SearchTransferOrders](api-endpoint:TransferOrders-SearchTransferOrders) to control the
 * order of returned results.
 */
export const TransferOrderSortField = {
  /**
   * Sort by creation date (created_at field). Useful for:
   * - Finding newest transfers
   * - Chronological order processing
   * - Historical analysis
   * - Auditing transfer patterns
   */
  CreatedAt: "CREATED_AT",
  /**
   * Sort by last update date (updated_at field). Useful for:
   * - Finding recently modified transfers
   * - Tracking status changes
   * - Monitoring receiving progress
   * - Synchronizing with external systems
   */
  UpdatedAt: "UPDATED_AT",
} as const;
export type TransferOrderSortField =
  | (typeof TransferOrderSortField)[keyof typeof TransferOrderSortField]
  | (string & {});

export const transferOrderSortFieldSchema: EnumSchema<TransferOrderSortField> =
  s.enumOf<TransferOrderSortField>(TransferOrderSortField);
