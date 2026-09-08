import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { changeTimingSchema, type ChangeTiming } from "./change-timing.js";

/**
 * Defines input parameters in a request to the
 * [ResumeSubscription](api-endpoint:Subscriptions-ResumeSubscription) endpoint.
 */
export type ResumeSubscriptionRequest = {
  /** The `YYYY-MM-DD`-formatted date when the subscription reactivated. */
  resumeEffectiveDate?: string | null;
  /** Supported timings when a pending change, as an action, takes place to a subscription. */
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
