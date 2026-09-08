import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { giftCardActivitySchema, type GiftCardActivity } from "./gift-card-activity.js";

/**
 * A response that contains a list of `GiftCardActivity` objects. If the request resulted in errors,
 * the response contains a set of `Error` objects.
 */
export type ListGiftCardActivitiesResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** The requested gift card activities or an empty object if none are found. */
  giftCardActivities?: GiftCardActivity[];
  /**
   * When a response is truncated, it includes a cursor that you can use in a subsequent request to
   * retrieve the next set of activities. If a cursor is not present, this is the final response.
   * For more information, see
   * [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
   */
  cursor?: string;
};

export const listGiftCardActivitiesResponseSchema: Schema<ListGiftCardActivitiesResponse> =
  s.object<ListGiftCardActivitiesResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    giftCardActivities: s.optional(s.array(s.lazy(() => giftCardActivitySchema))),
    cursor: s.optional(s.string()),
    _keysMap: {
      giftCardActivities: "gift_card_activities",
    },
  });
