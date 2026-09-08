import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  checkoutLocationSettingsSchema,
  type CheckoutLocationSettings,
} from "./checkout-location-settings.js";

export type LocationSettingsUpdatedEventObject = {
  locationSettings?: CheckoutLocationSettings;
};

export const locationSettingsUpdatedEventObjectSchema: Schema<LocationSettingsUpdatedEventObject> =
  s.object<LocationSettingsUpdatedEventObject>({
    locationSettings: s.optional(s.lazy(() => checkoutLocationSettingsSchema)),
    _keysMap: {
      locationSettings: "location_settings",
    },
  });
