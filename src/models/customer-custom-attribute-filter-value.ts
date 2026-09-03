import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerAddressFilterSchema, type CustomerAddressFilter } from "./customer-address-filter.js";
import { customerTextFilterSchema, type CustomerTextFilter } from "./customer-text-filter.js";
import { filterValueSchema, type FilterValue } from "./filter-value.js";
import { floatNumberRangeSchema, type FloatNumberRange } from "./float-number-range.js";
import { timeRangeSchema, type TimeRange } from "./time-range.js";

export type CustomerCustomAttributeFilterValue = {
  email?: CustomerTextFilter;
  phone?: CustomerTextFilter;
  text?: CustomerTextFilter;
  selection?: FilterValue;
  date?: TimeRange;
  number?: FloatNumberRange;
  boolean?: boolean | null;
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
