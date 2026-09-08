import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";

/**
 * Describes buyer data to prepopulate in the payment form. For more information, see [Optional
 * Checkout
 * Configurations](https://developer.squareup.com/docs/checkout-api/optional-checkout-configurations).
 */
export type PrePopulatedData = {
  /** The buyer email to prepopulate in the payment form. */
  buyerEmail?: string | null;
  /** The buyer phone number to prepopulate in the payment form. */
  buyerPhoneNumber?: string | null;
  /**
   * Represents a postal address in a country. For more information, see [Working with
   * Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
   */
  buyerAddress?: Address;
};

export const prePopulatedDataSchema: Schema<PrePopulatedData> = s.object<PrePopulatedData>({
  buyerEmail: s.optionalNullable(s.string()),
  buyerPhoneNumber: s.optionalNullable(s.string()),
  buyerAddress: s.optional(s.lazy(() => addressSchema)),
  _keysMap: {
    buyerEmail: "buyer_email",
    buyerPhoneNumber: "buyer_phone_number",
    buyerAddress: "buyer_address",
  },
});
