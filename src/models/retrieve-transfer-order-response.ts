import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { transferOrderSchema, type TransferOrder } from "./transfer-order.js";

export type RetrieveTransferOrderResponse = {
  transferOrder?: TransferOrder;
  errors?: Error[];
};

export const retrieveTransferOrderResponseSchema: Schema<RetrieveTransferOrderResponse> =
  s.object<RetrieveTransferOrderResponse>({
    transferOrder: s.optional(s.lazy(() => transferOrderSchema)),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      transferOrder: "transfer_order",
    },
  });
