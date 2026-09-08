import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * A filter to select customers based on exact or fuzzy matching of customer attributes against a
 * specified query. Depending on the customer attributes, the filter can be case-sensitive. This
 * filter can be exact or fuzzy, but it cannot be both.
 */
export type CustomerTextFilter = {
  /**
   * Use the exact filter to select customers whose attributes match exactly the specified query.
   */
  exact?: string | null;
  /**
   * Use the fuzzy filter to select customers whose attributes match the specified query in a fuzzy
   * manner. When the fuzzy option is used, search queries are tokenized, and then each query token
   * must be matched somewhere in the searched attribute. For single token queries, this is
   * effectively the same behavior as a partial match operation.
   */
  fuzzy?: string | null;
};

export const customerTextFilterSchema: Schema<CustomerTextFilter> = s.object<CustomerTextFilter>({
  exact: s.optionalNullable(s.string()),
  fuzzy: s.optionalNullable(s.string()),
});
