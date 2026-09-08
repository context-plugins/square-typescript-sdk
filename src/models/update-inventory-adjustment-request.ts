import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { inventoryAdjustmentSchema, type InventoryAdjustment } from "./inventory-adjustment.js";

export type UpdateInventoryAdjustmentRequest = {
  /**
   * A client-supplied, universally unique identifier (UUID) for the request.
   *
   * See
   * [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency)
   * in the [Build Basics](https://developer.squareup.com/docs/buildbasics) section for more
   * information.
   */
  idempotencyKey: string;
  /**
   * Represents a change in state or quantity of product inventory at a particular time and
   * location.
   */
  adjustment: InventoryAdjustment;
};

export const updateInventoryAdjustmentRequestSchema: Schema<UpdateInventoryAdjustmentRequest> =
  s.object<UpdateInventoryAdjustmentRequest>({
    idempotencyKey: s.string(),
    adjustment: inventoryAdjustmentSchema,
    _keysMap: {
      idempotencyKey: "idempotency_key",
    },
  });
