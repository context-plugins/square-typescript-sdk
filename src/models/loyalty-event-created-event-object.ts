import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyEventSchema, type LoyaltyEvent } from "./loyalty-event.js";

export type LoyaltyEventCreatedEventObject = {
  loyaltyEvent?: LoyaltyEvent;
};

export const loyaltyEventCreatedEventObjectSchema: Schema<LoyaltyEventCreatedEventObject> =
  s.object<LoyaltyEventCreatedEventObject>({
    loyaltyEvent: s.optional(s.lazy(() => loyaltyEventSchema)),
    _keysMap: {
      loyaltyEvent: "loyalty_event",
    },
  });
