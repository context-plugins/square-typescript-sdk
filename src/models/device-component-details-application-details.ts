import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { applicationTypeSchema, type ApplicationType } from "./application-type.js";

export type DeviceComponentDetailsApplicationDetails = {
  applicationType?: ApplicationType;
  version?: string;
  sessionLocation?: string | null;
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
