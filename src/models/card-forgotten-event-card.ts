import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CardForgottenEventCard = {
  id?: string;
  customerId?: string | null;
  enabled?: boolean | null;
  referenceId?: string | null;
  version?: number;
  merchantId?: string | null;
};

export const cardForgottenEventCardSchema: Schema<CardForgottenEventCard> = s.object<CardForgottenEventCard>({
  id: s.optional(s.string()),
  customerId: s.optionalNullable(s.string()),
  enabled: s.optionalNullable(s.boolean()),
  referenceId: s.optionalNullable(s.string()),
  version: s.optional(s.number()),
  merchantId: s.optionalNullable(s.string()),
  _keysMap: {
    customerId: "customer_id",
    referenceId: "reference_id",
    merchantId: "merchant_id",
  },
});
