import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { loyaltyEventTypeSchema, type LoyaltyEventType } from "./loyalty-event-type.js";

/** Filter events by event type. */
export type LoyaltyEventTypeFilter = {
  /**
   * The loyalty event types used to filter the result. If multiple values are specified, the
   * endpoint uses a logical OR to combine them. See [LoyaltyEventType](#type-loyaltyeventtype) for
   * possible values
   */
  types: LoyaltyEventType[];
};

export const loyaltyEventTypeFilterSchema: Schema<LoyaltyEventTypeFilter> = s.object<LoyaltyEventTypeFilter>({
  types: s.array(s.lazy(() => loyaltyEventTypeSchema)),
});
