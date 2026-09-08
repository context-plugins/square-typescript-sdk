import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customerCreationSourceFilterSchema,
  type CustomerCreationSourceFilter,
} from "./customer-creation-source-filter.js";
import {
  customerCustomAttributeFiltersSchema,
  type CustomerCustomAttributeFilters,
} from "./customer-custom-attribute-filters.js";
import { customerTextFilterSchema, type CustomerTextFilter } from "./customer-text-filter.js";
import { filterValueSchema, type FilterValue } from "./filter-value.js";
import { timeRangeSchema, type TimeRange } from "./time-range.js";

/**
 * Represents the filtering criteria in a [search query](entity:CustomerQuery) that defines how to
 * filter customer profiles returned in [SearchCustomers](api-endpoint:Customers-SearchCustomers)
 * results.
 */
export type CustomerFilter = {
  /**
   * The creation source filter.
   *
   * If one or more creation sources are set, customer profiles are included in, or excluded from,
   * the result if they match at least one of the filter criteria.
   */
  creationSource?: CustomerCreationSourceFilter;
  /**
   * Represents a generic time range. The start and end values are represented in RFC 3339 format.
   * Time ranges are customized to be inclusive or exclusive based on the needs of a particular
   * endpoint. Refer to the relevant endpoint-specific documentation to determine how time ranges
   * are handled.
   */
  createdAt?: TimeRange;
  /**
   * Represents a generic time range. The start and end values are represented in RFC 3339 format.
   * Time ranges are customized to be inclusive or exclusive based on the needs of a particular
   * endpoint. Refer to the relevant endpoint-specific documentation to determine how time ranges
   * are handled.
   */
  updatedAt?: TimeRange;
  /**
   * A filter to select customers based on exact or fuzzy matching of customer attributes against a
   * specified query. Depending on the customer attributes, the filter can be case-sensitive. This
   * filter can be exact or fuzzy, but it cannot be both.
   */
  emailAddress?: CustomerTextFilter;
  /**
   * A filter to select customers based on exact or fuzzy matching of customer attributes against a
   * specified query. Depending on the customer attributes, the filter can be case-sensitive. This
   * filter can be exact or fuzzy, but it cannot be both.
   */
  phoneNumber?: CustomerTextFilter;
  /**
   * A filter to select customers based on exact or fuzzy matching of customer attributes against a
   * specified query. Depending on the customer attributes, the filter can be case-sensitive. This
   * filter can be exact or fuzzy, but it cannot be both.
   */
  referenceId?: CustomerTextFilter;
  /**
   * A filter to select resources based on an exact field value. For any given value, the value can
   * only be in one property. Depending on the field, either all properties can be set or only a
   * subset will be available.
   *
   * Refer to the documentation of the field.
   */
  groupIds?: FilterValue;
  /**
   * The custom attribute filters in a set of [customer filters](entity:CustomerFilter) used in a
   * search query. Use this filter to search based on [custom attributes](entity:CustomAttribute)
   * that are assigned to customer profiles. For more information, see [Search by custom
   * attribute](https://developer.squareup.com/docs/customers-api/use-the-api/search-customers#search-by-custom-attribute).
   */
  customAttribute?: CustomerCustomAttributeFilters;
  /**
   * A filter to select resources based on an exact field value. For any given value, the value can
   * only be in one property. Depending on the field, either all properties can be set or only a
   * subset will be available.
   *
   * Refer to the documentation of the field.
   */
  segmentIds?: FilterValue;
};

export const customerFilterSchema: Schema<CustomerFilter> = s.object<CustomerFilter>({
  creationSource: s.optional(s.lazy(() => customerCreationSourceFilterSchema)),
  createdAt: s.optional(s.lazy(() => timeRangeSchema)),
  updatedAt: s.optional(s.lazy(() => timeRangeSchema)),
  emailAddress: s.optional(s.lazy(() => customerTextFilterSchema)),
  phoneNumber: s.optional(s.lazy(() => customerTextFilterSchema)),
  referenceId: s.optional(s.lazy(() => customerTextFilterSchema)),
  groupIds: s.optional(s.lazy(() => filterValueSchema)),
  customAttribute: s.optional(s.lazy(() => customerCustomAttributeFiltersSchema)),
  segmentIds: s.optional(s.lazy(() => filterValueSchema)),
  _keysMap: {
    creationSource: "creation_source",
    createdAt: "created_at",
    updatedAt: "updated_at",
    emailAddress: "email_address",
    phoneNumber: "phone_number",
    referenceId: "reference_id",
    groupIds: "group_ids",
    customAttribute: "custom_attribute",
    segmentIds: "segment_ids",
  },
});
