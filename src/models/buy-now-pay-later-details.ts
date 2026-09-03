import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { afterpayDetailsSchema, type AfterpayDetails } from "./afterpay-details.js";
import { clearpayDetailsSchema, type ClearpayDetails } from "./clearpay-details.js";
import { errorSchema, type Error } from "./error.js";

export type BuyNowPayLaterDetails = {
  brand?: string | null;
  afterpayDetails?: AfterpayDetails;
  clearpayDetails?: ClearpayDetails;
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
