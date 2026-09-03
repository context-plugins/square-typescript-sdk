import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  checkoutLocationSettingsSchema,
  type CheckoutLocationSettings,
} from "./checkout-location-settings.js";

export type UpdateLocationSettingsRequest = {
  locationSettings: CheckoutLocationSettings;
};

export const updateLocationSettingsRequestSchema: Schema<UpdateLocationSettingsRequest> =
  s.object<UpdateLocationSettingsRequest>({
    locationSettings: checkoutLocationSettingsSchema,
    _keysMap: {
      locationSettings: "location_settings",
    },
  });
