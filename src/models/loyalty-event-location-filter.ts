import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LoyaltyEventLocationFilter = {
  locationIds: string[];
};

export const loyaltyEventLocationFilterSchema: Schema<LoyaltyEventLocationFilter> =
  s.object<LoyaltyEventLocationFilter>({
    locationIds: s.array(s.string()),
    _keysMap: {
      locationIds: "location_ids",
    },
  });
