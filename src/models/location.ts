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

/** Represents one of a business' [locations](https://developer.squareup.com/docs/locations-api). */
export type Location = {
  /**
   * A short generated string of letters and numbers that uniquely identifies this location
   * instance.
   */
  id?: string;
  /**
   * The name of the location. This information appears in the Seller Dashboard as the nickname. A
   * location name must be unique within a seller account.
   */
  name?: string | null;
  /**
   * Represents a postal address in a country. For more information, see [Working with
   * Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
   */
  address?: Address;
  /**
   * The [IANA time zone](https://www.iana.org/time-zones) identifier for the time zone of the
   * location. For example, `America/Los_Angeles`.
   */
  timezone?: string | null;
  /**
   * The Square features that are enabled for the location. See
   * [LocationCapability](entity:LocationCapability) for possible values. See
   * [LocationCapability](#type-locationcapability) for possible values
   */
  capabilities?: LocationCapability[];
  /** A location's status. */
  status?: LocationStatus;
  /**
   * The time when the location was created, in RFC 3339 format. For more information, see [Working
   * with Dates](https://developer.squareup.com/docs/build-basics/working-with-dates).
   */
  createdAt?: string;
  /** The ID of the merchant that owns the location. */
  merchantId?: string;
  /**
   * Indicates the country associated with another entity, such as a business. Values are in [ISO
   * 3166-1-alpha-2 format](http://www.iso.org/iso/home/standards/country_codes.htm).
   */
  country?: Country;
  /**
   * The language associated with the location, in [BCP 47
   * format](https://tools.ietf.org/html/bcp47#appendix-A). For more information, see [Language
   * Preferences](https://developer.squareup.com/docs/build-basics/general-considerations/language-preferences).
   */
  languageCode?: string | null;
  /**
   * Indicates the associated currency for an amount of money. Values correspond to [ISO
   * 4217](https://wikipedia.org/wiki/ISO_4217).
   */
  currency?: Currency;
  /** The phone number of the location. For example, `+1 855-700-6000`. */
  phoneNumber?: string | null;
  /**
   * The name of the location's overall business. This name is present on receipts and other
   * customer-facing branding, and can be changed no more than three times in a twelve-month period.
   */
  businessName?: string | null;
  /** A location's type. */
  type?: LocationType;
  /** The website URL of the location. For example, `https://squareup.com`. */
  websiteUrl?: string | null;
  /** The hours of operation for a location. */
  businessHours?: BusinessHours;
  /**
   * The email address of the location. This can be unique to the location and is not always the
   * email address for the business owner or administrator.
   */
  businessEmail?: string | null;
  /** The description of the location. For example, `Main Street location`. */
  description?: string | null;
  /** The Twitter username of the location without the '@' symbol. For example, `Square`. */
  twitterUsername?: string | null;
  /** The Instagram username of the location without the '@' symbol. For example, `square`. */
  instagramUsername?: string | null;
  /**
   * The Facebook profile URL of the location. The URL should begin with 'facebook.com/'. For
   * example, `https://www.facebook.com/square`.
   */
  facebookUrl?: string | null;
  /** Latitude and longitude coordinates. */
  coordinates?: Coordinates;
  /**
   * The URL of the logo image for the location. When configured in the Seller Dashboard (Receipts
   * section), the logo appears on transactions (such as receipts and invoices) that Square
   * generates on behalf of the seller. This image should have a roughly square (1:1) aspect ratio
   * and should be at least 200x200 pixels.
   */
  logoUrl?: string;
  /** The URL of the Point of Sale background image for the location. */
  posBackgroundUrl?: string;
  /**
   * A four-digit number that describes the kind of goods or services sold at the location. The
   * [merchant category code
   * (MCC)](https://developer.squareup.com/docs/locations-api#initialize-a-merchant-category-code)
   * of the location as standardized by ISO 18245. For example, `5045`, for a location that sells
   * computer goods and software.
   */
  mcc?: string | null;
  /**
   * The URL of a full-format logo image for the location. When configured in the Seller Dashboard
   * (Receipts section), the logo appears on transactions (such as receipts and invoices) that
   * Square generates on behalf of the seller. This image can be wider than it is tall and should be
   * at least 1280x648 pixels.
   */
  fullFormatLogoUrl?: string;
  /** Identifiers for the location used by various governments for tax purposes. */
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
