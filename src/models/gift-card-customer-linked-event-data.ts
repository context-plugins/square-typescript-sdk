import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  giftCardCustomerLinkedEventObjectSchema,
  type GiftCardCustomerLinkedEventObject,
} from "./gift-card-customer-linked-event-object.js";

export type GiftCardCustomerLinkedEventData = {
  type?: string | null;
  id?: string;
  object?: GiftCardCustomerLinkedEventObject;
};

export const giftCardCustomerLinkedEventDataSchema: Schema<GiftCardCustomerLinkedEventData> =
  s.object<GiftCardCustomerLinkedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => giftCardCustomerLinkedEventObjectSchema)),
  });
