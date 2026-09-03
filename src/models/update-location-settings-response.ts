import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  checkoutLocationSettingsSchema,
  type CheckoutLocationSettings,
} from "./checkout-location-settings.js";
import { errorSchema, type Error } from "./error.js";

export type UpdateLocationSettingsResponse = {
  errors?: Error[];
  locationSettings?: CheckoutLocationSettings;
};

export const updateLocationSettingsResponseSchema: Schema<UpdateLocationSettingsResponse> =
  s.object<UpdateLocationSettingsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    locationSettings: s.optional(s.lazy(() => checkoutLocationSettingsSchema)),
    _keysMap: {
      locationSettings: "location_settings",
    },
  });
