import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A request to unlink a customer from a gift card. */
export type UnlinkCustomerFromGiftCardRequest = {
  /** The ID of the customer to unlink from the gift card. */
  customerId: string;
};

export const unlinkCustomerFromGiftCardRequestSchema: Schema<UnlinkCustomerFromGiftCardRequest> =
  s.object<UnlinkCustomerFromGiftCardRequest>({
    customerId: s.string(),
    _keysMap: {
      customerId: "customer_id",
    },
  });
