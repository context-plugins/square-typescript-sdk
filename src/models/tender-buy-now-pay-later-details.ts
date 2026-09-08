import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  tenderBuyNowPayLaterDetailsBrandSchema,
  type TenderBuyNowPayLaterDetailsBrand,
} from "./tender-buy-now-pay-later-details-brand.js";
import {
  tenderBuyNowPayLaterDetailsStatusSchema,
  type TenderBuyNowPayLaterDetailsStatus,
} from "./tender-buy-now-pay-later-details-status.js";

/** Represents the details of a tender with `type` `BUY_NOW_PAY_LATER`. */
export type TenderBuyNowPayLaterDetails = {
  buyNowPayLaterBrand?: TenderBuyNowPayLaterDetailsBrand;
  status?: TenderBuyNowPayLaterDetailsStatus;
};

export const tenderBuyNowPayLaterDetailsSchema: Schema<TenderBuyNowPayLaterDetails> =
  s.object<TenderBuyNowPayLaterDetails>({
    buyNowPayLaterBrand: s.optional(s.lazy(() => tenderBuyNowPayLaterDetailsBrandSchema)),
    status: s.optional(s.lazy(() => tenderBuyNowPayLaterDetailsStatusSchema)),
    _keysMap: {
      buyNowPayLaterBrand: "buy_now_pay_later_brand",
    },
  });
