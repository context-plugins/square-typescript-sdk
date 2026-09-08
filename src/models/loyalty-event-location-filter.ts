import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Filter events by location. */
export type LoyaltyEventLocationFilter = {
  /**
   * The [location](entity:Location) IDs for loyalty events to query. If multiple values are
   * specified, the endpoint uses a logical OR to combine them.
   */
  locationIds: string[];
};

export const loyaltyEventLocationFilterSchema: Schema<LoyaltyEventLocationFilter> =
  s.object<LoyaltyEventLocationFilter>({
    locationIds: s.array(s.string()),
    _keysMap: {
      locationIds: "location_ids",
    },
  });
