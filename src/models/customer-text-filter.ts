import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomerTextFilter = {
  exact?: string | null;
  fuzzy?: string | null;
};

export const customerTextFilterSchema: Schema<CustomerTextFilter> = s.object<CustomerTextFilter>({
  exact: s.optionalNullable(s.string()),
  fuzzy: s.optionalNullable(s.string()),
});
