import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { changeTimingSchema, type ChangeTiming } from "./change-timing.js";

export type ResumeSubscriptionRequest = {
  resumeEffectiveDate?: string | null;
  resumeChangeTiming?: ChangeTiming;
};

export const resumeSubscriptionRequestSchema: Schema<ResumeSubscriptionRequest> =
  s.object<ResumeSubscriptionRequest>({
    resumeEffectiveDate: s.optionalNullable(s.string()),
    resumeChangeTiming: s.optional(s.lazy(() => changeTimingSchema)),
    _keysMap: {
      resumeEffectiveDate: "resume_effective_date",
      resumeChangeTiming: "resume_change_timing",
    },
  });
