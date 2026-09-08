import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A record of a team member's break on a [timecard](entity:Timecard). */
export type Break = {
  /** The UUID for this object. */
  id?: string;
  /**
   * RFC 3339; follows the same timezone information as the [timecard](entity:Timecard). Precision
   * up to the minute is respected; seconds are truncated.
   */
  startAt: string;
  /**
   * RFC 3339; follows the same timezone information as the [timecard](entity:Timecard). Precision
   * up to the minute is respected; seconds are truncated.
   */
  endAt?: string | null;
  /** The [BreakType](entity:BreakType) that this break was templated on. */
  breakTypeId: string;
  /** A human-readable name. */
  name: string;
  /**
   * Format: RFC-3339 P[n]Y[n]M[n]DT[n]H[n]M[n]S. The expected length of the break.
   *
   * Example for break expected duration of 15 minutes: PT15M
   */
  expectedDuration: string;
  /** Whether this break counts towards time worked for compensation purposes. */
  isPaid: boolean;
};

export const breakSchema: Schema<Break> = s.object<Break>({
  id: s.optional(s.string()),
  startAt: s.string(),
  endAt: s.optionalNullable(s.string()),
  breakTypeId: s.string(),
  name: s.string(),
  expectedDuration: s.string(),
  isPaid: s.boolean(),
  _keysMap: {
    startAt: "start_at",
    endAt: "end_at",
    breakTypeId: "break_type_id",
    expectedDuration: "expected_duration",
    isPaid: "is_paid",
  },
});
