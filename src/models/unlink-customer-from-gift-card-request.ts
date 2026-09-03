import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UnlinkCustomerFromGiftCardRequest = {
  customerId: string;
};

export const unlinkCustomerFromGiftCardRequestSchema: Schema<UnlinkCustomerFromGiftCardRequest> =
  s.object<UnlinkCustomerFromGiftCardRequest>({
    customerId: s.string(),
    _keysMap: {
      customerId: "customer_id",
    },
  });
