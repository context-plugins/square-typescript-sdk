import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferOrderSchema, type TransferOrder } from "./transfer-order.js";

export type TransferOrderUpdatedEventObject = {
  /**
   * Represents a transfer order for moving [CatalogItemVariation](entity:CatalogItemVariation)s
   * between [Location](entity:Location)s. Transfer orders track the entire lifecycle of an
   * inventory transfer, including:
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
  transferOrder?: TransferOrder;
};

export const transferOrderUpdatedEventObjectSchema: Schema<TransferOrderUpdatedEventObject> =
  s.object<TransferOrderUpdatedEventObject>({
    transferOrder: s.optional(s.lazy(() => transferOrderSchema)),
    _keysMap: {
      transferOrder: "transfer_order",
    },
  });
