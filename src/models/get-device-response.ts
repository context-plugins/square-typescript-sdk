import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceSchema, type Device } from "./device.js";
import { errorSchema, type Error } from "./error.js";

export type GetDeviceResponse = {
  errors?: Error[];
  device?: Device;
};

export const getDeviceResponseSchema: Schema<GetDeviceResponse> = s.object<GetDeviceResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  device: s.optional(s.lazy(() => deviceSchema)),
});
