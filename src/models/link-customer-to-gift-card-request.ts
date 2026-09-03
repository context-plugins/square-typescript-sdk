import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LinkCustomerToGiftCardRequest = {
  customerId: string;
};

export const linkCustomerToGiftCardRequestSchema: Schema<LinkCustomerToGiftCardRequest> =
  s.object<LinkCustomerToGiftCardRequest>({
    customerId: s.string(),
    _keysMap: {
      customerId: "customer_id",
    },
  });
