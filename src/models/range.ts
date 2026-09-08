import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The range of a number value between the specified lower and upper bounds. */
export type Range = {
  /**
   * The lower bound of the number range. At least one of `min` or `max` must be specified. If
   * unspecified, the results will have no minimum value.
   */
  min?: string | null;
  /**
   * The upper bound of the number range. At least one of `min` or `max` must be specified. If
   * unspecified, the results will have no maximum value.
   */
  max?: string | null;
};

export const rangeSchema: Schema<Range> = s.object<Range>({
  min: s.optionalNullable(s.string()),
  max: s.optionalNullable(s.string()),
});
