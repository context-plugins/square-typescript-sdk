import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { loyaltyPromotionSchema, type LoyaltyPromotion } from "./loyalty-promotion.js";

/**
 * Represents a [ListLoyaltyPromotions](api-endpoint:Loyalty-ListLoyaltyPromotions) response. One of
 * `loyalty_promotions`, an empty object, or `errors` is present in the response. If additional
 * results are available, the `cursor` field is also present along with `loyalty_promotions`.
 */
export type ListLoyaltyPromotionsResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** The retrieved loyalty promotions. */
  loyaltyPromotions?: LoyaltyPromotion[];
  /**
   * The cursor to use in your next call to this endpoint to retrieve the next page of results for
   * your original request. This field is present only if the request succeeded and additional
   * results are available. For more information, see
   * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
   */
  cursor?: string;
};

export const listLoyaltyPromotionsResponseSchema: Schema<ListLoyaltyPromotionsResponse> =
  s.object<ListLoyaltyPromotionsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    loyaltyPromotions: s.optional(s.array(s.lazy(() => loyaltyPromotionSchema))),
    cursor: s.optional(s.string()),
    _keysMap: {
      loyaltyPromotions: "loyalty_promotions",
    },
  });
