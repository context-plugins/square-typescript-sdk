import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceCodeSchema, type DeviceCode } from "./device-code.js";
import { errorSchema, type Error } from "./error.js";

export type ListDeviceCodesResponse = {
  errors?: Error[];
  deviceCodes?: DeviceCode[];
  cursor?: string;
};

export const listDeviceCodesResponseSchema: Schema<ListDeviceCodesResponse> =
  s.object<ListDeviceCodesResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    deviceCodes: s.optional(s.array(s.lazy(() => deviceCodeSchema))),
    cursor: s.optional(s.string()),
    _keysMap: {
      deviceCodes: "device_codes",
    },
  });
