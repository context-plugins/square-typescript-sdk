import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  locationSettingsUpdatedEventObjectSchema,
  type LocationSettingsUpdatedEventObject,
} from "./location-settings-updated-event-object.js";

export type LocationSettingsUpdatedEventData = {
  /** Name of the updated object’s type, `"online_checkout.location_settings"`. */
  type?: string | null;
  /** ID of the updated location settings. */
  id?: string;
  object?: LocationSettingsUpdatedEventObject;
};

export const locationSettingsUpdatedEventDataSchema: Schema<LocationSettingsUpdatedEventData> =
  s.object<LocationSettingsUpdatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => locationSettingsUpdatedEventObjectSchema)),
  });
