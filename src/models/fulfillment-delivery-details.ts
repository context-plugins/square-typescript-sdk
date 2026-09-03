import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  fulfillmentDeliveryDetailsOrderFulfillmentDeliveryDetailsScheduleTypeSchema,
  type FulfillmentDeliveryDetailsOrderFulfillmentDeliveryDetailsScheduleType,
} from "./fulfillment-delivery-details-order-fulfillment-delivery-details-schedule-type.js";
import { fulfillmentRecipientSchema, type FulfillmentRecipient } from "./fulfillment-recipient.js";

export type FulfillmentDeliveryDetails = {
  recipient?: FulfillmentRecipient;
  scheduleType?: FulfillmentDeliveryDetailsOrderFulfillmentDeliveryDetailsScheduleType;
  placedAt?: string;
  deliverAt?: string | null;
  prepTimeDuration?: string | null;
  deliveryWindowDuration?: string | null;
  note?: string | null;
  completedAt?: string | null;
  inProgressAt?: string;
  rejectedAt?: string;
  readyAt?: string;
  deliveredAt?: string;
  canceledAt?: string;
  cancelReason?: string | null;
  courierPickupAt?: string | null;
  courierPickupWindowDuration?: string | null;
  isNoContactDelivery?: boolean | null;
  dropoffNotes?: string | null;
  courierProviderName?: string | null;
  courierSupportPhoneNumber?: string | null;
  squareDeliveryId?: string | null;
  externalDeliveryId?: string | null;
  managedDelivery?: boolean | null;
};

export const fulfillmentDeliveryDetailsSchema: Schema<FulfillmentDeliveryDetails> =
  s.object<FulfillmentDeliveryDetails>({
    recipient: s.optional(s.lazy(() => fulfillmentRecipientSchema)),
    scheduleType: s.optional(
      s.lazy(() => fulfillmentDeliveryDetailsOrderFulfillmentDeliveryDetailsScheduleTypeSchema),
    ),
    placedAt: s.optional(s.string()),
    deliverAt: s.optionalNullable(s.string()),
    prepTimeDuration: s.optionalNullable(s.string()),
    deliveryWindowDuration: s.optionalNullable(s.string()),
    note: s.optionalNullable(s.string()),
    completedAt: s.optionalNullable(s.string()),
    inProgressAt: s.optional(s.string()),
    rejectedAt: s.optional(s.string()),
    readyAt: s.optional(s.string()),
    deliveredAt: s.optional(s.string()),
    canceledAt: s.optional(s.string()),
    cancelReason: s.optionalNullable(s.string()),
    courierPickupAt: s.optionalNullable(s.string()),
    courierPickupWindowDuration: s.optionalNullable(s.string()),
    isNoContactDelivery: s.optionalNullable(s.boolean()),
    dropoffNotes: s.optionalNullable(s.string()),
    courierProviderName: s.optionalNullable(s.string()),
    courierSupportPhoneNumber: s.optionalNullable(s.string()),
    squareDeliveryId: s.optionalNullable(s.string()),
    externalDeliveryId: s.optionalNullable(s.string()),
    managedDelivery: s.optionalNullable(s.boolean()),
    _keysMap: {
      scheduleType: "schedule_type",
      placedAt: "placed_at",
      deliverAt: "deliver_at",
      prepTimeDuration: "prep_time_duration",
      deliveryWindowDuration: "delivery_window_duration",
      completedAt: "completed_at",
      inProgressAt: "in_progress_at",
      rejectedAt: "rejected_at",
      readyAt: "ready_at",
      deliveredAt: "delivered_at",
      canceledAt: "canceled_at",
      cancelReason: "cancel_reason",
      courierPickupAt: "courier_pickup_at",
      courierPickupWindowDuration: "courier_pickup_window_duration",
      isNoContactDelivery: "is_no_contact_delivery",
      dropoffNotes: "dropoff_notes",
      courierProviderName: "courier_provider_name",
      courierSupportPhoneNumber: "courier_support_phone_number",
      squareDeliveryId: "square_delivery_id",
      externalDeliveryId: "external_delivery_id",
      managedDelivery: "managed_delivery",
    },
  });
