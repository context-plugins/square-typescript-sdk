import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Details about the customer making the payment. */
export type CustomerDetails = {
  /** Indicates whether the customer initiated the payment. */
  customerInitiated?: boolean | null;
  /**
   * Indicates that the seller keyed in payment details on behalf of the customer. This is used to
   * flag a payment as Mail Order / Telephone Order (MOTO).
   */
  sellerKeyedIn?: boolean | null;
};

export const customerDetailsSchema: Schema<CustomerDetails> = s.object<CustomerDetails>({
  customerInitiated: s.optionalNullable(s.boolean()),
  sellerKeyedIn: s.optionalNullable(s.boolean()),
  _keysMap: {
    customerInitiated: "customer_initiated",
    sellerKeyedIn: "seller_keyed_in",
  },
});
