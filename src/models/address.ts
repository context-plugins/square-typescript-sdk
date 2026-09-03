import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { countrySchema, type Country } from "./country.js";

export type Address = {
  addressLine1?: string | null;
  addressLine2?: string | null;
  addressLine3?: string | null;
  locality?: string | null;
  sublocality?: string | null;
  sublocality2?: string | null;
  sublocality3?: string | null;
  administrativeDistrictLevel1?: string | null;
  administrativeDistrictLevel2?: string | null;
  administrativeDistrictLevel3?: string | null;
  postalCode?: string | null;
  country?: Country;
  firstName?: string | null;
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
