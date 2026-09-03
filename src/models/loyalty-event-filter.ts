import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  loyaltyEventDateTimeFilterSchema,
  type LoyaltyEventDateTimeFilter,
} from "./loyalty-event-date-time-filter.js";
import {
  loyaltyEventLocationFilterSchema,
  type LoyaltyEventLocationFilter,
} from "./loyalty-event-location-filter.js";
import {
  loyaltyEventLoyaltyAccountFilterSchema,
  type LoyaltyEventLoyaltyAccountFilter,
} from "./loyalty-event-loyalty-account-filter.js";
import { loyaltyEventOrderFilterSchema, type LoyaltyEventOrderFilter } from "./loyalty-event-order-filter.js";
import { loyaltyEventTypeFilterSchema, type LoyaltyEventTypeFilter } from "./loyalty-event-type-filter.js";

export type LoyaltyEventFilter = {
  loyaltyAccountFilter?: LoyaltyEventLoyaltyAccountFilter;
  typeFilter?: LoyaltyEventTypeFilter;
  dateTimeFilter?: LoyaltyEventDateTimeFilter;
  locationFilter?: LoyaltyEventLocationFilter;
  orderFilter?: LoyaltyEventOrderFilter;
};

export const loyaltyEventFilterSchema: Schema<LoyaltyEventFilter> = s.object<LoyaltyEventFilter>({
  loyaltyAccountFilter: s.optional(s.lazy(() => loyaltyEventLoyaltyAccountFilterSchema)),
  typeFilter: s.optional(s.lazy(() => loyaltyEventTypeFilterSchema)),
  dateTimeFilter: s.optional(s.lazy(() => loyaltyEventDateTimeFilterSchema)),
  locationFilter: s.optional(s.lazy(() => loyaltyEventLocationFilterSchema)),
  orderFilter: s.optional(s.lazy(() => loyaltyEventOrderFilterSchema)),
  _keysMap: {
    loyaltyAccountFilter: "loyalty_account_filter",
    typeFilter: "type_filter",
    dateTimeFilter: "date_time_filter",
    locationFilter: "location_filter",
    orderFilter: "order_filter",
  },
});
