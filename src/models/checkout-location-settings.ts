import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  checkoutLocationSettingsBrandingSchema,
  type CheckoutLocationSettingsBranding,
} from "./checkout-location-settings-branding.js";
import {
  checkoutLocationSettingsCouponsSchema,
  type CheckoutLocationSettingsCoupons,
} from "./checkout-location-settings-coupons.js";
import {
  checkoutLocationSettingsPolicySchema,
  type CheckoutLocationSettingsPolicy,
} from "./checkout-location-settings-policy.js";
import {
  checkoutLocationSettingsTippingSchema,
  type CheckoutLocationSettingsTipping,
} from "./checkout-location-settings-tipping.js";

export type CheckoutLocationSettings = {
  /** The ID of the location that these settings apply to. */
  locationId?: string | null;
  /** Indicates whether customers are allowed to leave notes at checkout. */
  customerNotesEnabled?: boolean | null;
  /**
   * Policy information is displayed at the bottom of the checkout pages. You can set a maximum of
   * two policies.
   */
  policies?: CheckoutLocationSettingsPolicy[] | null;
  branding?: CheckoutLocationSettingsBranding;
  tipping?: CheckoutLocationSettingsTipping;
  coupons?: CheckoutLocationSettingsCoupons;
  /**
   * The timestamp when the settings were last updated, in RFC 3339 format. Examples for January
   * 25th, 2020 6:25:34pm Pacific Standard Time: UTC: 2020-01-26T02:25:34Z Pacific Standard Time
   * with UTC offset: 2020-01-25T18:25:34-08:00
   */
  updatedAt?: string;
};

export const checkoutLocationSettingsSchema: Schema<CheckoutLocationSettings> =
  s.object<CheckoutLocationSettings>({
    locationId: s.optionalNullable(s.string()),
    customerNotesEnabled: s.optionalNullable(s.boolean()),
    policies: s.optionalNullable(s.array(s.lazy(() => checkoutLocationSettingsPolicySchema))),
    branding: s.optional(s.lazy(() => checkoutLocationSettingsBrandingSchema)),
    tipping: s.optional(s.lazy(() => checkoutLocationSettingsTippingSchema)),
    coupons: s.optional(s.lazy(() => checkoutLocationSettingsCouponsSchema)),
    updatedAt: s.optional(s.string()),
    _keysMap: {
      locationId: "location_id",
      customerNotesEnabled: "customer_notes_enabled",
      updatedAt: "updated_at",
    },
  });
