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

export type CustomerFilter = {
  creationSource?: CustomerCreationSourceFilter;
  createdAt?: TimeRange;
  updatedAt?: TimeRange;
  emailAddress?: CustomerTextFilter;
  phoneNumber?: CustomerTextFilter;
  referenceId?: CustomerTextFilter;
  groupIds?: FilterValue;
  customAttribute?: CustomerCustomAttributeFilters;
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
