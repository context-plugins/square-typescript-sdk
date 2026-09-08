import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { countrySchema, type Country } from "./country.js";
import { customerTextFilterSchema, type CustomerTextFilter } from "./customer-text-filter.js";

/**
 * The customer address filter. This filter is used in a
 * [CustomerCustomAttributeFilterValue](entity:CustomerCustomAttributeFilterValue) filter when
 * searching by an `Address`-type custom attribute.
 */
export type CustomerAddressFilter = {
  /**
   * A filter to select customers based on exact or fuzzy matching of customer attributes against a
   * specified query. Depending on the customer attributes, the filter can be case-sensitive. This
   * filter can be exact or fuzzy, but it cannot be both.
   */
  postalCode?: CustomerTextFilter;
  /**
   * Indicates the country associated with another entity, such as a business. Values are in [ISO
   * 3166-1-alpha-2 format](http://www.iso.org/iso/home/standards/country_codes.htm).
   */
  country?: Country;
};

export const customerAddressFilterSchema: Schema<CustomerAddressFilter> = s.object<CustomerAddressFilter>({
  postalCode: s.optional(s.lazy(() => customerTextFilterSchema)),
  country: s.optional(s.lazy(() => countrySchema)),
  _keysMap: {
    postalCode: "postal_code",
  },
});
