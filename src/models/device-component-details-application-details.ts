import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { applicationTypeSchema, type ApplicationType } from "./application-type.js";

export type DeviceComponentDetailsApplicationDetails = {
  applicationType?: ApplicationType;
  /** The version of the application. */
  version?: string;
  /** The location_id of the session for the application. */
  sessionLocation?: string | null;
  /** The id of the device code that was used to log in to the device. */
  deviceCodeId?: string | null;
};

export const deviceComponentDetailsApplicationDetailsSchema: Schema<DeviceComponentDetailsApplicationDetails> =
  s.object<DeviceComponentDetailsApplicationDetails>({
    applicationType: s.optional(s.lazy(() => applicationTypeSchema)),
    version: s.optional(s.string()),
    sessionLocation: s.optionalNullable(s.string()),
    deviceCodeId: s.optionalNullable(s.string()),
    _keysMap: {
      applicationType: "application_type",
      sessionLocation: "session_location",
      deviceCodeId: "device_code_id",
    },
  });
