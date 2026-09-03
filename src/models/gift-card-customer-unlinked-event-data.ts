import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  giftCardCustomerUnlinkedEventObjectSchema,
  type GiftCardCustomerUnlinkedEventObject,
} from "./gift-card-customer-unlinked-event-object.js";

export type GiftCardCustomerUnlinkedEventData = {
  type?: string | null;
  id?: string;
  object?: GiftCardCustomerUnlinkedEventObject;
};

export const giftCardCustomerUnlinkedEventDataSchema: Schema<GiftCardCustomerUnlinkedEventData> =
  s.object<GiftCardCustomerUnlinkedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => giftCardCustomerUnlinkedEventObjectSchema)),
  });
