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
  locationId?: string | null;
  customerNotesEnabled?: boolean | null;
  policies?: CheckoutLocationSettingsPolicy[] | null;
  branding?: CheckoutLocationSettingsBranding;
  tipping?: CheckoutLocationSettingsTipping;
  coupons?: CheckoutLocationSettingsCoupons;
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
