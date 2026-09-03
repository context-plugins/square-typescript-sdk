import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customerCustomAttributeFilterValueSchema,
  type CustomerCustomAttributeFilterValue,
} from "./customer-custom-attribute-filter-value.js";
import { timeRangeSchema, type TimeRange } from "./time-range.js";

export type CustomerCustomAttributeFilter = {
  key: string;
  filter?: CustomerCustomAttributeFilterValue;
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
