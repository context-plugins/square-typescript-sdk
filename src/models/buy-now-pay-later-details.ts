import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { afterpayDetailsSchema, type AfterpayDetails } from "./afterpay-details.js";
import { clearpayDetailsSchema, type ClearpayDetails } from "./clearpay-details.js";
import { errorSchema, type Error } from "./error.js";

/** Additional details about a Buy Now Pay Later payment type. */
export type BuyNowPayLaterDetails = {
  /**
   * The brand used for the Buy Now Pay Later payment. The brand can be `AFTERPAY`, `CLEARPAY` or
   * `UNKNOWN`.
   */
  brand?: string | null;
  /** Additional details about Afterpay payments. */
  afterpayDetails?: AfterpayDetails;
  /** Additional details about Clearpay payments. */
  clearpayDetails?: ClearpayDetails;
  /** Information about errors encountered during the payment. */
  errors?: Error[];
};

export const buyNowPayLaterDetailsSchema: Schema<BuyNowPayLaterDetails> = s.object<BuyNowPayLaterDetails>({
  brand: s.optionalNullable(s.string()),
  afterpayDetails: s.optional(s.lazy(() => afterpayDetailsSchema)),
  clearpayDetails: s.optional(s.lazy(() => clearpayDetailsSchema)),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  _keysMap: {
    afterpayDetails: "afterpay_details",
    clearpayDetails: "clearpay_details",
  },
});
