import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { createTransferOrderDataSchema, type CreateTransferOrderData } from "./create-transfer-order-data.js";

/** Request to create a new transfer order. */
export type CreateTransferOrderRequest = {
  /**
   * A unique string that identifies this CreateTransferOrder request. Keys can be any valid string
   * but must be unique for every CreateTransferOrder request.
   */
  idempotencyKey: string;
  /**
   * Data for creating a new transfer order to move
   * [CatalogItemVariation](entity:CatalogItemVariation)s between [Location](entity:Location)s. Used
   * with the [CreateTransferOrder](api-endpoint:TransferOrders-CreateTransferOrder) endpoint.
   */
  transferOrder: CreateTransferOrderData;
};

export const createTransferOrderRequestSchema: Schema<CreateTransferOrderRequest> =
  s.object<CreateTransferOrderRequest>({
    idempotencyKey: s.string(),
    transferOrder: createTransferOrderDataSchema,
    _keysMap: {
      idempotencyKey: "idempotency_key",
      transferOrder: "transfer_order",
    },
  });
