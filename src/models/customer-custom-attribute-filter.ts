import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customerCustomAttributeFilterValueSchema,
  type CustomerCustomAttributeFilterValue,
} from "./customer-custom-attribute-filter-value.js";
import { timeRangeSchema, type TimeRange } from "./time-range.js";

/**
 * The custom attribute filter. Use this filter in a set of [custom attribute
 * filters](entity:CustomerCustomAttributeFilters) to search based on the value or last updated date
 * of a customer-related [custom attribute](entity:CustomAttribute).
 */
export type CustomerCustomAttributeFilter = {
  /**
   * The `key` of the [custom attribute](entity:CustomAttribute) to filter by. The key is the
   * identifier of the custom attribute (and the corresponding custom attribute definition) and can
   * be retrieved using the [Customer Custom Attributes API](api:CustomerCustomAttributes).
   */
  key: string;
  /**
   * A type-specific filter used in a [custom attribute
   * filter](entity:CustomerCustomAttributeFilter) to search based on the value of a
   * customer-related [custom attribute](entity:CustomAttribute).
   */
  filter?: CustomerCustomAttributeFilterValue;
  /**
   * Represents a generic time range. The start and end values are represented in RFC 3339 format.
   * Time ranges are customized to be inclusive or exclusive based on the needs of a particular
   * endpoint. Refer to the relevant endpoint-specific documentation to determine how time ranges
   * are handled.
   */
  updatedAt?: TimeRange;
};

export const customerCustomAttributeFilterSchema: Schema<CustomerCustomAttributeFilter> =
  s.object<CustomerCustomAttributeFilter>({
    key: s.string(),
    filter: s.optional(s.lazy(() => customerCustomAttributeFilterValueSchema)),
    updatedAt: s.optional(s.lazy(() => timeRangeSchema)),
    _keysMap: {
      updatedAt: "updated_at",
    },
  });
