import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  fulfillmentPickupDetailsCurbsidePickupDetailsSchema,
  type FulfillmentPickupDetailsCurbsidePickupDetails,
} from "./fulfillment-pickup-details-curbside-pickup-details.js";
import {
  fulfillmentPickupDetailsScheduleTypeSchema,
  type FulfillmentPickupDetailsScheduleType,
} from "./fulfillment-pickup-details-schedule-type.js";
import { fulfillmentRecipientSchema, type FulfillmentRecipient } from "./fulfillment-recipient.js";

/** Contains details necessary to fulfill a pickup order. */
export type FulfillmentPickupDetails = {
  /** Information about the fulfillment recipient. */
  recipient?: FulfillmentRecipient;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates) indicating
   * when this fulfillment expires if it is not marked in progress. The timestamp must be in RFC
   * 3339 format (for example, "2016-09-04T23:59:33.123Z"). The expiration time can only be set up
   * to 7 days in the future. If `expires_at` is not set, any new payments attached to the order are
   * automatically completed.
   */
  expiresAt?: string | null;
  /**
   * The [duration](https://developer.squareup.com/docs/build-basics/working-with-dates) after which
   * an in-progress pickup fulfillment is automatically moved to the `COMPLETED` state. The duration
   * must be in RFC 3339 format (for example, "PT4H" for 4 hours).
   *
   * If not set, this pickup fulfillment remains in progress until it is canceled or completed.
   */
  autoCompleteDuration?: string | null;
  /** The schedule type of the pickup fulfillment. */
  scheduleType?: FulfillmentPickupDetailsScheduleType;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates) that
   * represents the start of the pickup window. Must be in RFC 3339 timestamp format, e.g.,
   * "2016-09-04T23:59:33.123Z".
   *
   * For fulfillments with the schedule type `ASAP`, this is automatically set to the current time
   * plus `prep_time_duration`, if available.
   */
  pickupAt?: string | null;
  /**
   * The [duration](https://developer.squareup.com/docs/build-basics/working-with-dates) in which
   * the order should be picked up after the `pickup_at` timestamp. The duration must be in RFC 3339
   * format (for example, "PT30M" for 30 minutes). Don't confuse "M" for months with "M" for
   * minutes. "P5M" means 5 months, while "PT5M" means 5 minutes.
   *
   * Can be used as an informational guideline for merchants.
   */
  pickupWindowDuration?: string | null;
  /**
   * The [duration](https://developer.squareup.com/docs/build-basics/working-with-dates) needed to
   * prepare this fulfillment. The duration must be in RFC 3339 format (for example, "PT30M" for 30
   * minutes). Don't confuse "M" for months with "M" for minutes. "P5M" means 5 months, while "PT5M"
   * means 5 minutes.
   */
  prepTimeDuration?: string | null;
  /**
   * A note to provide additional instructions about the pickup fulfillment displayed in the Square
   * Point of Sale application and set by the API.
   */
  note?: string | null;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates) indicating
   * when the fulfillment was placed. The timestamp must be in RFC 3339 format (for example,
   * "2016-09-04T23:59:33.123Z").
   */
  placedAt?: string;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates) indicating
   * when the fulfillment was marked in progress. The timestamp must be in RFC 3339 format (for
   * example, "2016-09-04T23:59:33.123Z").
   */
  acceptedAt?: string;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates) indicating
   * when the fulfillment was rejected. The timestamp must be in RFC 3339 format (for example,
   * "2016-09-04T23:59:33.123Z").
   */
  rejectedAt?: string;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates) indicating
   * when the fulfillment is marked as ready for pickup. The timestamp must be in RFC 3339 format
   * (for example, "2016-09-04T23:59:33.123Z").
   */
  readyAt?: string;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates) indicating
   * when the fulfillment expired. The timestamp must be in RFC 3339 format (for example,
   * "2016-09-04T23:59:33.123Z").
   */
  expiredAt?: string;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates) indicating
   * when the fulfillment was picked up by the recipient. The timestamp must be in RFC 3339 format
   * (for example, "2016-09-04T23:59:33.123Z").
   */
  pickedUpAt?: string;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates) indicating
   * when the fulfillment was canceled. The timestamp must be in RFC 3339 format (for example,
   * "2016-09-04T23:59:33.123Z").
   */
  canceledAt?: string;
  /** A description of why the pickup was canceled. The maximum length: 100 characters. */
  cancelReason?: string | null;
  /**
   * If set to `true`, indicates that this pickup order is for curbside pickup, not in-store pickup.
   */
  isCurbsidePickup?: boolean | null;
  /** Specific details for curbside pickup. */
  curbsidePickupDetails?: FulfillmentPickupDetailsCurbsidePickupDetails;
};

export const fulfillmentPickupDetailsSchema: Schema<FulfillmentPickupDetails> =
  s.object<FulfillmentPickupDetails>({
    recipient: s.optional(s.lazy(() => fulfillmentRecipientSchema)),
    expiresAt: s.optionalNullable(s.string()),
    autoCompleteDuration: s.optionalNullable(s.string()),
    scheduleType: s.optional(s.lazy(() => fulfillmentPickupDetailsScheduleTypeSchema)),
    pickupAt: s.optionalNullable(s.string()),
    pickupWindowDuration: s.optionalNullable(s.string()),
    prepTimeDuration: s.optionalNullable(s.string()),
    note: s.optionalNullable(s.string()),
    placedAt: s.optional(s.string()),
    acceptedAt: s.optional(s.string()),
    rejectedAt: s.optional(s.string()),
    readyAt: s.optional(s.string()),
    expiredAt: s.optional(s.string()),
    pickedUpAt: s.optional(s.string()),
    canceledAt: s.optional(s.string()),
    cancelReason: s.optionalNullable(s.string()),
    isCurbsidePickup: s.optionalNullable(s.boolean()),
    curbsidePickupDetails: s.optional(s.lazy(() => fulfillmentPickupDetailsCurbsidePickupDetailsSchema)),
    _keysMap: {
      expiresAt: "expires_at",
      autoCompleteDuration: "auto_complete_duration",
      scheduleType: "schedule_type",
      pickupAt: "pickup_at",
      pickupWindowDuration: "pickup_window_duration",
      prepTimeDuration: "prep_time_duration",
      placedAt: "placed_at",
      acceptedAt: "accepted_at",
      rejectedAt: "rejected_at",
      readyAt: "ready_at",
      expiredAt: "expired_at",
      pickedUpAt: "picked_up_at",
      canceledAt: "canceled_at",
      cancelReason: "cancel_reason",
      isCurbsidePickup: "is_curbside_pickup",
      curbsidePickupDetails: "curbside_pickup_details",
    },
  });
