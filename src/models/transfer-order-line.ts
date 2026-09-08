import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Represents a line item in a transfer order. Each line item tracks a specific
 * [CatalogItemVariation](entity:CatalogItemVariation) being transferred, including ordered
 * quantities and receipt status.
 */
export type TransferOrderLine = {
  /**
   * Unique system-generated identifier for the line item. Provide when updating/removing a line via
   * [UpdateTransferOrder](api-endpoint:TransferOrders-UpdateTransferOrder).
   */
  uid?: string;
  /**
   * The required identifier of the [CatalogItemVariation](entity:CatalogItemVariation) being
   * transferred. Must reference a valid catalog item variation that exists in the
   * [Catalog](api:Catalog).
   */
  itemVariationId: string;
  /**
   * Total quantity ordered, formatted as a decimal string (e.g. "10 or 10.0000"). Required to be a
   * positive number.
   *
   * To remove a line item, set `remove` to `true` in
   * [UpdateTransferOrder](api-endpoint:TransferOrders-UpdateTransferOrder).
   */
  quantityOrdered: string;
  /**
   * Calculated quantity of this line item's yet to be received stock. This is the difference
   * between the total quantity ordered and the sum of quantities received, canceled, and damaged.
   */
  quantityPending?: string;
  /**
   * Quantity received at destination. These items are added to the destination
   * [Location](entity:Location)'s inventory with [InventoryState](entity:InventoryState) of
   * IN_STOCK.
   *
   * This field cannot be updated directly in Create/Update operations, instead use
   * [ReceiveTransferOrder](api-endpoint:TransferOrders-ReceiveTransferOrder).
   */
  quantityReceived?: string;
  /**
   * Quantity received in damaged condition. These items are added to the destination
   * [Location](entity:Location)'s inventory with [InventoryState](entity:InventoryState) of WASTE.
   *
   * This field cannot be updated directly in Create/Update operations, instead use
   * [ReceiveTransferOrder](api-endpoint:TransferOrders-ReceiveTransferOrder).
   */
  quantityDamaged?: string;
  /**
   * Quantity that was canceled. These items will be immediately added to inventory in the source
   * location.
   *
   * This field cannot be updated directly in Create/Update operations, instead use
   * [ReceiveTransferOrder](api-endpoint:TransferOrders-ReceiveTransferOrder) or
   * [CancelTransferOrder](api-endpoint:TransferOrders-CancelTransferOrder).
   */
  quantityCanceled?: string;
};

export const transferOrderLineSchema: Schema<TransferOrderLine> = s.object<TransferOrderLine>({
  uid: s.optional(s.string()),
  itemVariationId: s.string(),
  quantityOrdered: s.string(),
  quantityPending: s.optional(s.string()),
  quantityReceived: s.optional(s.string()),
  quantityDamaged: s.optional(s.string()),
  quantityCanceled: s.optional(s.string()),
  _keysMap: {
    itemVariationId: "item_variation_id",
    quantityOrdered: "quantity_ordered",
    quantityPending: "quantity_pending",
    quantityReceived: "quantity_received",
    quantityDamaged: "quantity_damaged",
    quantityCanceled: "quantity_canceled",
  },
});
