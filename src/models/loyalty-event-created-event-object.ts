import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyEventSchema, type LoyaltyEvent } from "./loyalty-event.js";

export type LoyaltyEventCreatedEventObject = {
  /**
   * Provides information about a loyalty event. For more information, see [Search for
   * Balance-Changing Loyalty
   * Events](https://developer.squareup.com/docs/loyalty-api/loyalty-events).
   */
  loyaltyEvent?: LoyaltyEvent;
};

export const loyaltyEventCreatedEventObjectSchema: Schema<LoyaltyEventCreatedEventObject> =
  s.object<LoyaltyEventCreatedEventObject>({
    loyaltyEvent: s.optional(s.lazy(() => loyaltyEventSchema)),
    _keysMap: {
      loyaltyEvent: "loyalty_event",
    },
  });
