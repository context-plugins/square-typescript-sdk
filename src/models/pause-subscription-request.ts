import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { changeTimingSchema, type ChangeTiming } from "./change-timing.js";

export type PauseSubscriptionRequest = {
  pauseEffectiveDate?: string | null;
  pauseCycleDuration?: number | null;
  resumeEffectiveDate?: string | null;
  resumeChangeTiming?: ChangeTiming;
  pauseReason?: string | null;
};

export const pauseSubscriptionRequestSchema: Schema<PauseSubscriptionRequest> =
  s.object<PauseSubscriptionRequest>({
    pauseEffectiveDate: s.optionalNullable(s.string()),
    pauseCycleDuration: s.optionalNullable(s.number()),
    resumeEffectiveDate: s.optionalNullable(s.string()),
    resumeChangeTiming: s.optional(s.lazy(() => changeTimingSchema)),
    pauseReason: s.optionalNullable(s.string()),
    _keysMap: {
      pauseEffectiveDate: "pause_effective_date",
      pauseCycleDuration: "pause_cycle_duration",
      resumeEffectiveDate: "resume_effective_date",
      resumeChangeTiming: "resume_change_timing",
      pauseReason: "pause_reason",
    },
  });
