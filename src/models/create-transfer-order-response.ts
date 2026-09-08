import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { transferOrderSchema, type TransferOrder } from "./transfer-order.js";

/** Response for creating a transfer order. */
export type CreateTransferOrderResponse = {
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
  /** Any errors that occurred during the request */
  errors?: Error[];
};

export const createTransferOrderResponseSchema: Schema<CreateTransferOrderResponse> =
  s.object<CreateTransferOrderResponse>({
    transferOrder: s.optional(s.lazy(() => transferOrderSchema)),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      transferOrder: "transfer_order",
    },
  });
