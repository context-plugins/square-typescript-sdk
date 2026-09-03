import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LoyaltyPromotionAvailableTimeData = {
  startDate?: string;
  endDate?: string;
  timePeriods: string[];
};

export const loyaltyPromotionAvailableTimeDataSchema: Schema<LoyaltyPromotionAvailableTimeData> =
  s.object<LoyaltyPromotionAvailableTimeData>({
    startDate: s.optional(s.string()),
    endDate: s.optional(s.string()),
    timePeriods: s.array(s.string()),
    _keysMap: {
      startDate: "start_date",
      endDate: "end_date",
      timePeriods: "time_periods",
    },
  });
