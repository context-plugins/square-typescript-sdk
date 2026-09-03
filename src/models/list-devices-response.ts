import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceSchema, type Device } from "./device.js";
import { errorSchema, type Error } from "./error.js";

export type ListDevicesResponse = {
  errors?: Error[];
  devices?: Device[];
  cursor?: string;
};

export const listDevicesResponseSchema: Schema<ListDevicesResponse> = s.object<ListDevicesResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  devices: s.optional(s.array(s.lazy(() => deviceSchema))),
  cursor: s.optional(s.string()),
});
