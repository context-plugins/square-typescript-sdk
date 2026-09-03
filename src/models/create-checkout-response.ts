import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { checkoutSchema, type Checkout } from "./checkout.js";
import { errorSchema, type Error } from "./error.js";

export type CreateCheckoutResponse = {
  checkout?: Checkout;
  errors?: Error[];
};

export const createCheckoutResponseSchema: Schema<CreateCheckoutResponse> = s.object<CreateCheckoutResponse>({
  checkout: s.optional(s.lazy(() => checkoutSchema)),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
