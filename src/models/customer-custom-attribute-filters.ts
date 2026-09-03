import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customerCustomAttributeFilterSchema,
  type CustomerCustomAttributeFilter,
} from "./customer-custom-attribute-filter.js";

export type CustomerCustomAttributeFilters = {
  filters?: CustomerCustomAttributeFilter[] | null;
};

export const customerCustomAttributeFiltersSchema: Schema<CustomerCustomAttributeFilters> =
  s.object<CustomerCustomAttributeFilters>({
    filters: s.optionalNullable(s.array(s.lazy(() => customerCustomAttributeFilterSchema))),
  });
