import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceCodeSchema, type DeviceCode } from "./device-code.js";
import { errorSchema, type Error } from "./error.js";

export type GetDeviceCodeResponse = {
  errors?: Error[];
  deviceCode?: DeviceCode;
};

export const getDeviceCodeResponseSchema: Schema<GetDeviceCodeResponse> = s.object<GetDeviceCodeResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  deviceCode: s.optional(s.lazy(() => deviceCodeSchema)),
  _keysMap: {
    deviceCode: "device_code",
  },
});
