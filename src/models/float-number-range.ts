import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Specifies a decimal number range. */
export type FloatNumberRange = {
  /** A decimal value indicating where the range starts. */
  startAt?: string | null;
  /** A decimal value indicating where the range ends. */
  endAt?: string | null;
};

export const floatNumberRangeSchema: Schema<FloatNumberRange> = s.object<FloatNumberRange>({
  startAt: s.optionalNullable(s.string()),
  endAt: s.optionalNullable(s.string()),
  _keysMap: {
    startAt: "start_at",
    endAt: "end_at",
  },
});
