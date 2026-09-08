import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A request to link a customer to a gift card. */
export type LinkCustomerToGiftCardRequest = {
  /** The ID of the customer to link to the gift card. */
  customerId: string;
};

export const linkCustomerToGiftCardRequestSchema: Schema<LinkCustomerToGiftCardRequest> =
  s.object<LinkCustomerToGiftCardRequest>({
    customerId: s.string(),
    _keysMap: {
      customerId: "customer_id",
    },
  });
