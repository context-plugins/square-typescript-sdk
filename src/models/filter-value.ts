import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FilterValue = {
  all?: string[] | null;
  any?: string[] | null;
  none?: string[] | null;
};

export const filterValueSchema: Schema<FilterValue> = s.object<FilterValue>({
  all: s.optionalNullable(s.array(s.string())),
  any: s.optionalNullable(s.array(s.string())),
  none: s.optionalNullable(s.array(s.string())),
});
