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

export type FulfillmentPickupDetails = {
  recipient?: FulfillmentRecipient;
  expiresAt?: string | null;
  autoCompleteDuration?: string | null;
  scheduleType?: FulfillmentPickupDetailsScheduleType;
  pickupAt?: string | null;
  pickupWindowDuration?: string | null;
  prepTimeDuration?: string | null;
  note?: string | null;
  placedAt?: string;
  acceptedAt?: string;
  rejectedAt?: string;
  readyAt?: string;
  expiredAt?: string;
  pickedUpAt?: string;
  canceledAt?: string;
  cancelReason?: string | null;
  isCurbsidePickup?: boolean | null;
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
