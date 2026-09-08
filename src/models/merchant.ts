import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { countrySchema, type Country } from "./country.js";
import { currencySchema, type Currency } from "./currency.js";
import { merchantStatusSchema, type MerchantStatus } from "./merchant-status.js";

/** Represents a business that sells with Square. */
export type Merchant = {
  /** The Square-issued ID of the merchant. */
  id?: string;
  /** The name of the merchant's overall business. */
  businessName?: string | null;
  /**
   * Indicates the country associated with another entity, such as a business. Values are in [ISO
   * 3166-1-alpha-2 format](http://www.iso.org/iso/home/standards/country_codes.htm).
   */
  country: Country;
  /**
   * The code indicating the [language
   * preferences](https://developer.squareup.com/docs/build-basics/general-considerations/language-preferences)
   * of the merchant, in [BCP 47 format](https://tools.ietf.org/html/bcp47#appendix-A). For example,
   * `en-US` or `fr-CA`.
   */
  languageCode?: string | null;
  /**
   * Indicates the associated currency for an amount of money. Values correspond to [ISO
   * 4217](https://wikipedia.org/wiki/ISO_4217).
   */
  currency?: Currency;
  status?: MerchantStatus;
  /**
   * The ID of the [main
   * `Location`](https://developer.squareup.com/docs/locations-api#about-the-main-location) for this
   * merchant.
   */
  mainLocationId?: string | null;
  /**
   * The time when the merchant was created, in RFC 3339 format. For more information, see [Working
   * with Dates](https://developer.squareup.com/docs/build-basics/working-with-dates).
   */
  createdAt?: string;
};

export const merchantSchema: Schema<Merchant> = s.object<Merchant>({
  id: s.optional(s.string()),
  businessName: s.optionalNullable(s.string()),
  country: countrySchema,
  languageCode: s.optionalNullable(s.string()),
  currency: s.optional(s.lazy(() => currencySchema)),
  status: s.optional(s.lazy(() => merchantStatusSchema)),
  mainLocationId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  _keysMap: {
    businessName: "business_name",
    languageCode: "language_code",
    mainLocationId: "main_location_id",
    createdAt: "created_at",
  },
});
