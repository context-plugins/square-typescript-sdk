import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomerDetails = {
  customerInitiated?: boolean | null;
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
