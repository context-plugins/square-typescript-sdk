import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerAddressFilterSchema, type CustomerAddressFilter } from "./customer-address-filter.js";
import { customerTextFilterSchema, type CustomerTextFilter } from "./customer-text-filter.js";
import { filterValueSchema, type FilterValue } from "./filter-value.js";
import { floatNumberRangeSchema, type FloatNumberRange } from "./float-number-range.js";
import { timeRangeSchema, type TimeRange } from "./time-range.js";

/**
 * A type-specific filter used in a [custom attribute filter](entity:CustomerCustomAttributeFilter)
 * to search based on the value of a customer-related [custom attribute](entity:CustomAttribute).
 */
export type CustomerCustomAttributeFilterValue = {
  /**
   * A filter to select customers based on exact or fuzzy matching of customer attributes against a
   * specified query. Depending on the customer attributes, the filter can be case-sensitive. This
   * filter can be exact or fuzzy, but it cannot be both.
   */
  email?: CustomerTextFilter;
  /**
   * A filter to select customers based on exact or fuzzy matching of customer attributes against a
   * specified query. Depending on the customer attributes, the filter can be case-sensitive. This
   * filter can be exact or fuzzy, but it cannot be both.
   */
  phone?: CustomerTextFilter;
  /**
   * A filter to select customers based on exact or fuzzy matching of customer attributes against a
   * specified query. Depending on the customer attributes, the filter can be case-sensitive. This
   * filter can be exact or fuzzy, but it cannot be both.
   */
  text?: CustomerTextFilter;
  /**
   * A filter to select resources based on an exact field value. For any given value, the value can
   * only be in one property. Depending on the field, either all properties can be set or only a
   * subset will be available.
   *
   * Refer to the documentation of the field.
   */
  selection?: FilterValue;
  /**
   * Represents a generic time range. The start and end values are represented in RFC 3339 format.
   * Time ranges are customized to be inclusive or exclusive based on the needs of a particular
   * endpoint. Refer to the relevant endpoint-specific documentation to determine how time ranges
   * are handled.
   */
  date?: TimeRange;
  /** Specifies a decimal number range. */
  number?: FloatNumberRange;
  /** A filter for a query based on the value of a `Boolean`-type custom attribute. */
  boolean?: boolean | null;
  /**
   * The customer address filter. This filter is used in a
   * [CustomerCustomAttributeFilterValue](entity:CustomerCustomAttributeFilterValue) filter when
   * searching by an `Address`-type custom attribute.
   */
  address?: CustomerAddressFilter;
};

export const customerCustomAttributeFilterValueSchema: Schema<CustomerCustomAttributeFilterValue> =
  s.object<CustomerCustomAttributeFilterValue>({
    email: s.optional(s.lazy(() => customerTextFilterSchema)),
    phone: s.optional(s.lazy(() => customerTextFilterSchema)),
    text: s.optional(s.lazy(() => customerTextFilterSchema)),
    selection: s.optional(s.lazy(() => filterValueSchema)),
    date: s.optional(s.lazy(() => timeRangeSchema)),
    number: s.optional(s.lazy(() => floatNumberRangeSchema)),
    boolean: s.optionalNullable(s.boolean()),
    address: s.optional(s.lazy(() => customerAddressFilterSchema)),
  });
