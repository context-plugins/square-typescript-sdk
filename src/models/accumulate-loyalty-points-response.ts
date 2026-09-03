import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { loyaltyEventSchema, type LoyaltyEvent } from "./loyalty-event.js";

export type AccumulateLoyaltyPointsResponse = {
  errors?: Error[];
  event?: LoyaltyEvent;
  events?: LoyaltyEvent[];
};

export const accumulateLoyaltyPointsResponseSchema: Schema<AccumulateLoyaltyPointsResponse> =
  s.object<AccumulateLoyaltyPointsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    event: s.optional(s.lazy(() => loyaltyEventSchema)),
    events: s.optional(s.array(s.lazy(() => loyaltyEventSchema))),
  });
