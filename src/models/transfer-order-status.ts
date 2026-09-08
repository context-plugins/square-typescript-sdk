import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Status values for transfer orders. Represents the current state of a
 * [TransferOrder](entity:TransferOrder) in its lifecycle from creation to completion. Each status
 * determines what actions are available and how inventory is affected.
 */
export const TransferOrderStatus = {
  /**
   * Initial status when transfer order is created via
   * [CreateTransferOrder](api-endpoint:TransferOrders-CreateTransferOrder). Order can be modified
   * or deleted. No inventory impact at this stage.
   */
  Draft: "DRAFT",
  /**
   * Transfer order has been started via
   * [StartTransferOrder](api-endpoint:TransferOrders-StartTransferOrder). Order can no longer be
   * deleted. [CatalogItemVariation](entity:CatalogItemVariation)s are decremented from source
   * [Location](entity:Location) and marked as in-transit to destination.
   */
  Started: "STARTED",
  /**
   * Some items have been received via
   * [ReceiveTransferOrder](api-endpoint:TransferOrders-ReceiveTransferOrder) but there are still
   * pending quantities. Additional receipts are allowed.
   * [CatalogItemVariation](entity:CatalogItemVariation)s are incrementally added to destination
   * [Location](entity:Location) inventory as they are received.
   */
  PartiallyReceived: "PARTIALLY_RECEIVED",
  /**
   * All items have been received or canceled, no pending quantities remain. Only metadata
   * modifications are allowed. Final inventory adjustments are complete at both source and
   * destination [Location](entity:Location)s.
   */
  Completed: "COMPLETED",
  /**
   * Transfer order was canceled via
   * [CancelTransferOrder](api-endpoint:TransferOrders-CancelTransferOrder). Any pending quantities
   * are no longer receivable and are returned to source [Location](entity:Location). Only metadata
   * modifications are allowed.
   */
  Canceled: "CANCELED",
} as const;
export type TransferOrderStatus =
  | (typeof TransferOrderStatus)[keyof typeof TransferOrderStatus]
  | (string & {});

export const transferOrderStatusSchema: EnumSchema<TransferOrderStatus> =
  s.enumOf<TransferOrderStatus>(TransferOrderStatus);
