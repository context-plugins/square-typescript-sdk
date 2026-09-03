import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferOrderSchema, type TransferOrder } from "./transfer-order.js";

export type TransferOrderUpdatedEventObject = {
  transferOrder?: TransferOrder;
};

export const transferOrderUpdatedEventObjectSchema: Schema<TransferOrderUpdatedEventObject> =
  s.object<TransferOrderUpdatedEventObject>({
    transferOrder: s.optional(s.lazy(() => transferOrderSchema)),
    _keysMap: {
      transferOrder: "transfer_order",
    },
  });
