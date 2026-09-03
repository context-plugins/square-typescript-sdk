import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { countrySchema, type Country } from "./country.js";
import { customerTextFilterSchema, type CustomerTextFilter } from "./customer-text-filter.js";

export type CustomerAddressFilter = {
  postalCode?: CustomerTextFilter;
  country?: Country;
};

export const customerAddressFilterSchema: Schema<CustomerAddressFilter> = s.object<CustomerAddressFilter>({
  postalCode: s.optional(s.lazy(() => customerTextFilterSchema)),
  country: s.optional(s.lazy(() => countrySchema)),
  _keysMap: {
    postalCode: "postal_code",
  },
});
