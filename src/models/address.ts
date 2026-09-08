import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { countrySchema, type Country } from "./country.js";

/**
 * Represents a postal address in a country. For more information, see [Working with
 * Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
 */
export type Address = {
  /**
   * The first line of the address.
   *
   * Fields that start with `address_line` provide the address's most specific details, like street
   * number, street name, and building name. They do *not* provide less specific details like city,
   * state/province, or country (these details are provided in other fields).
   */
  addressLine1?: string | null;
  /** The second line of the address, if any. */
  addressLine2?: string | null;
  /** The third line of the address, if any. */
  addressLine3?: string | null;
  /**
   * The city or town of the address. For a full list of field meanings by country, see [Working
   * with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
   */
  locality?: string | null;
  /** A civil region within the address's `locality`, if any. */
  sublocality?: string | null;
  /** A civil region within the address's `sublocality`, if any. */
  sublocality2?: string | null;
  /** A civil region within the address's `sublocality_2`, if any. */
  sublocality3?: string | null;
  /**
   * A civil entity within the address's country. In the US, this is the state. For a full list of
   * field meanings by country, see [Working with
   * Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
   */
  administrativeDistrictLevel1?: string | null;
  /**
   * A civil entity within the address's `administrative_district_level_1`. In the US, this is the
   * county.
   */
  administrativeDistrictLevel2?: string | null;
  /** A civil entity within the address's `administrative_district_level_2`, if any. */
  administrativeDistrictLevel3?: string | null;
  /**
   * The address's postal code. For a full list of field meanings by country, see [Working with
   * Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
   */
  postalCode?: string | null;
  /**
   * Indicates the country associated with another entity, such as a business. Values are in [ISO
   * 3166-1-alpha-2 format](http://www.iso.org/iso/home/standards/country_codes.htm).
   */
  country?: Country;
  /** Optional first name when it's representing recipient. */
  firstName?: string | null;
  /** Optional last name when it's representing recipient. */
  lastName?: string | null;
};

export const addressSchema: Schema<Address> = s.object<Address>({
  addressLine1: s.optionalNullable(s.string()),
  addressLine2: s.optionalNullable(s.string()),
  addressLine3: s.optionalNullable(s.string()),
  locality: s.optionalNullable(s.string()),
  sublocality: s.optionalNullable(s.string()),
  sublocality2: s.optionalNullable(s.string()),
  sublocality3: s.optionalNullable(s.string()),
  administrativeDistrictLevel1: s.optionalNullable(s.string()),
  administrativeDistrictLevel2: s.optionalNullable(s.string()),
  administrativeDistrictLevel3: s.optionalNullable(s.string()),
  postalCode: s.optionalNullable(s.string()),
  country: s.optional(s.lazy(() => countrySchema)),
  firstName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  _keysMap: {
    addressLine1: "address_line_1",
    addressLine2: "address_line_2",
    addressLine3: "address_line_3",
    sublocality2: "sublocality_2",
    sublocality3: "sublocality_3",
    administrativeDistrictLevel1: "administrative_district_level_1",
    administrativeDistrictLevel2: "administrative_district_level_2",
    administrativeDistrictLevel3: "administrative_district_level_3",
    postalCode: "postal_code",
    firstName: "first_name",
    lastName: "last_name",
  },
});
