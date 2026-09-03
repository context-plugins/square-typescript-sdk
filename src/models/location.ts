import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { businessHoursSchema, type BusinessHours } from "./business-hours.js";
import { coordinatesSchema, type Coordinates } from "./coordinates.js";
import { countrySchema, type Country } from "./country.js";
import { currencySchema, type Currency } from "./currency.js";
import { locationCapabilitySchema, type LocationCapability } from "./location-capability.js";
import { locationStatusSchema, type LocationStatus } from "./location-status.js";
import { locationTypeSchema, type LocationType } from "./location-type.js";
import { taxIdsSchema, type TaxIds } from "./tax-ids.js";

export type Location = {
  id?: string;
  name?: string | null;
  address?: Address;
  timezone?: string | null;
  capabilities?: LocationCapability[];
  status?: LocationStatus;
  createdAt?: string;
  merchantId?: string;
  country?: Country;
  languageCode?: string | null;
  currency?: Currency;
  phoneNumber?: string | null;
  businessName?: string | null;
  type?: LocationType;
  websiteUrl?: string | null;
  businessHours?: BusinessHours;
  businessEmail?: string | null;
  description?: string | null;
  twitterUsername?: string | null;
  instagramUsername?: string | null;
  facebookUrl?: string | null;
  coordinates?: Coordinates;
  logoUrl?: string;
  posBackgroundUrl?: string;
  mcc?: string | null;
  fullFormatLogoUrl?: string;
  taxIds?: TaxIds;
};

export const locationSchema: Schema<Location> = s.object<Location>({
  id: s.optional(s.string()),
  name: s.optionalNullable(s.string()),
  address: s.optional(s.lazy(() => addressSchema)),
  timezone: s.optionalNullable(s.string()),
  capabilities: s.optional(s.array(s.lazy(() => locationCapabilitySchema))),
  status: s.optional(s.lazy(() => locationStatusSchema)),
  createdAt: s.optional(s.string()),
  merchantId: s.optional(s.string()),
  country: s.optional(s.lazy(() => countrySchema)),
  languageCode: s.optionalNullable(s.string()),
  currency: s.optional(s.lazy(() => currencySchema)),
  phoneNumber: s.optionalNullable(s.string()),
  businessName: s.optionalNullable(s.string()),
  type: s.optional(s.lazy(() => locationTypeSchema)),
  websiteUrl: s.optionalNullable(s.string()),
  businessHours: s.optional(s.lazy(() => businessHoursSchema)),
  businessEmail: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  twitterUsername: s.optionalNullable(s.string()),
  instagramUsername: s.optionalNullable(s.string()),
  facebookUrl: s.optionalNullable(s.string()),
  coordinates: s.optional(s.lazy(() => coordinatesSchema)),
  logoUrl: s.optional(s.string()),
  posBackgroundUrl: s.optional(s.string()),
  mcc: s.optionalNullable(s.string()),
  fullFormatLogoUrl: s.optional(s.string()),
  taxIds: s.optional(s.lazy(() => taxIdsSchema)),
  _keysMap: {
    createdAt: "created_at",
    merchantId: "merchant_id",
    languageCode: "language_code",
    phoneNumber: "phone_number",
    businessName: "business_name",
    websiteUrl: "website_url",
    businessHours: "business_hours",
    businessEmail: "business_email",
    twitterUsername: "twitter_username",
    instagramUsername: "instagram_username",
    facebookUrl: "facebook_url",
    logoUrl: "logo_url",
    posBackgroundUrl: "pos_background_url",
    fullFormatLogoUrl: "full_format_logo_url",
    taxIds: "tax_ids",
  },
});
