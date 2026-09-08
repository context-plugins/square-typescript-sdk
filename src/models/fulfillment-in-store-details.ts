import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fulfillmentRecipientSchema, type FulfillmentRecipient } from "./fulfillment-recipient.js";

/** Contains the details necessary to fulfill an in-store order. */
export type FulfillmentInStoreDetails = {
  /**
   * A note to provide additional instructions about the in-store fulfillment displayed in the
   * Square Point of Sale application and set by the API.
   */
  note?: string | null;
  /** Information about the fulfillment recipient. */
  recipient?: FulfillmentRecipient;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates) indicating
   * when the fulfillment was placed. The timestamp must be in RFC 3339 format (for example,
   * "2016-09-04T23:59:33.123Z").
   */
  placedAt?: string | null;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates) indicating
   * when the fulfillment was completed. This field is automatically set when the fulfillment
   * `state` changes to `COMPLETED`. The timestamp must be in RFC 3339 format (for example,
   * "2016-09-04T23:59:33.123Z").
   */
  completedAt?: string;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates) indicates
   * when the seller started processing the fulfillment. This field is automatically set when the
   * fulfillment `state` changes to `RESERVED`. The timestamp must be in RFC 3339 format (for
   * example, "2016-09-04T23:59:33.123Z").
   */
  inProgressAt?: string;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates) indicating
   * when the fulfillment was moved to the `PREPARED` state, which indicates that the fulfillment is
   * ready. The timestamp must be in RFC 3339 format (for example, "2016-09-04T23:59:33.123Z").
   */
  preparedAt?: string;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates) indicating
   * when the fulfillment was canceled. This field is automatically set when the fulfillment `state`
   * changes to `CANCELED`. The timestamp must be in RFC 3339 format (for example,
   * "2016-09-04T23:59:33.123Z").
   */
  canceledAt?: string;
};

export const fulfillmentInStoreDetailsSchema: Schema<FulfillmentInStoreDetails> =
  s.object<FulfillmentInStoreDetails>({
    note: s.optionalNullable(s.string()),
    recipient: s.optional(s.lazy(() => fulfillmentRecipientSchema)),
    placedAt: s.optionalNullable(s.string()),
    completedAt: s.optional(s.string()),
    inProgressAt: s.optional(s.string()),
    preparedAt: s.optional(s.string()),
    canceledAt: s.optional(s.string()),
    _keysMap: {
      placedAt: "placed_at",
      completedAt: "completed_at",
      inProgressAt: "in_progress_at",
      preparedAt: "prepared_at",
      canceledAt: "canceled_at",
    },
  });
