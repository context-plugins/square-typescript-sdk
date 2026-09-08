import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { changeTimingSchema, type ChangeTiming } from "./change-timing.js";

/**
 * Defines input parameters in a request to the
 * [PauseSubscription](api-endpoint:Subscriptions-PauseSubscription) endpoint.
 */
export type PauseSubscriptionRequest = {
  /**
   * The `YYYY-MM-DD`-formatted date when the scheduled `PAUSE` action takes place on the
   * subscription.
   *
   * When this date is unspecified or falls within the current billing cycle, the subscription is
   * paused on the starting date of the next billing cycle.
   */
  pauseEffectiveDate?: string | null;
  /**
   * The number of billing cycles the subscription will be paused before it is reactivated.
   *
   * When this is set, a `RESUME` action is also scheduled to take place on the subscription at the
   * end of the specified pause cycle duration. In this case, neither `resume_effective_date` nor
   * `resume_change_timing` may be specified.
   */
  pauseCycleDuration?: number | null;
  /**
   * The date when the subscription is reactivated by a scheduled `RESUME` action. This date must be
   * at least one billing cycle ahead of `pause_effective_date`.
   */
  resumeEffectiveDate?: string | null;
  /** Supported timings when a pending change, as an action, takes place to a subscription. */
  resumeChangeTiming?: ChangeTiming;
  /** The user-provided reason to pause the subscription. */
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
