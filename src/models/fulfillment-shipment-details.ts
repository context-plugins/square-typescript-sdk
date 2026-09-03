import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fulfillmentRecipientSchema, type FulfillmentRecipient } from "./fulfillment-recipient.js";

export type FulfillmentShipmentDetails = {
  recipient?: FulfillmentRecipient;
  carrier?: string | null;
  shippingNote?: string | null;
  shippingType?: string | null;
  trackingNumber?: string | null;
  trackingUrl?: string | null;
  placedAt?: string;
  inProgressAt?: string;
  packagedAt?: string;
  expectedShippedAt?: string | null;
  shippedAt?: string;
  canceledAt?: string | null;
  cancelReason?: string | null;
  failedAt?: string;
  failureReason?: string | null;
};

export const fulfillmentShipmentDetailsSchema: Schema<FulfillmentShipmentDetails> =
  s.object<FulfillmentShipmentDetails>({
    recipient: s.optional(s.lazy(() => fulfillmentRecipientSchema)),
    carrier: s.optionalNullable(s.string()),
    shippingNote: s.optionalNullable(s.string()),
    shippingType: s.optionalNullable(s.string()),
    trackingNumber: s.optionalNullable(s.string()),
    trackingUrl: s.optionalNullable(s.string()),
    placedAt: s.optional(s.string()),
    inProgressAt: s.optional(s.string()),
    packagedAt: s.optional(s.string()),
    expectedShippedAt: s.optionalNullable(s.string()),
    shippedAt: s.optional(s.string()),
    canceledAt: s.optionalNullable(s.string()),
    cancelReason: s.optionalNullable(s.string()),
    failedAt: s.optional(s.string()),
    failureReason: s.optionalNullable(s.string()),
    _keysMap: {
      shippingNote: "shipping_note",
      shippingType: "shipping_type",
      trackingNumber: "tracking_number",
      trackingUrl: "tracking_url",
      placedAt: "placed_at",
      inProgressAt: "in_progress_at",
      packagedAt: "packaged_at",
      expectedShippedAt: "expected_shipped_at",
      shippedAt: "shipped_at",
      canceledAt: "canceled_at",
      cancelReason: "cancel_reason",
      failedAt: "failed_at",
      failureReason: "failure_reason",
    },
  });
