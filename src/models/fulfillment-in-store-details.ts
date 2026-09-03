import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fulfillmentRecipientSchema, type FulfillmentRecipient } from "./fulfillment-recipient.js";

export type FulfillmentInStoreDetails = {
  note?: string | null;
  recipient?: FulfillmentRecipient;
  placedAt?: string | null;
  completedAt?: string;
  inProgressAt?: string;
  preparedAt?: string;
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
