import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Range = {
  min?: string | null;
  max?: string | null;
};

export const rangeSchema: Schema<Range> = s.object<Range>({
  min: s.optionalNullable(s.string()),
  max: s.optionalNullable(s.string()),
});
