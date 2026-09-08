import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { checkoutSchema, type Checkout } from "./checkout.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Defines the fields that are included in the response body of a request to the `CreateCheckout`
 * endpoint.
 */
export type CreateCheckoutResponse = {
  /**
   * Square Checkout lets merchants accept online payments for supported payment types using a
   * checkout workflow hosted on squareup.com.
   */
  checkout?: Checkout;
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const createCheckoutResponseSchema: Schema<CreateCheckoutResponse> = s.object<CreateCheckoutResponse>({
  checkout: s.optional(s.lazy(() => checkoutSchema)),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
