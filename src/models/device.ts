import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { componentSchema, type Component } from "./component.js";
import { deviceAttributesSchema, type DeviceAttributes } from "./device-attributes.js";
import { deviceStatusSchema, type DeviceStatus } from "./device-status.js";

export type Device = {
  /**
   * A synthetic identifier for the device. The identifier includes a standardized prefix and is
   * otherwise an opaque id generated from key device fields.
   */
  id?: string;
  attributes: DeviceAttributes;
  /** A list of components applicable to the device. */
  components?: Component[] | null;
  status?: DeviceStatus;
};

export const deviceSchema: Schema<Device> = s.object<Device>({
  id: s.optional(s.string()),
  attributes: deviceAttributesSchema,
  components: s.optionalNullable(s.array(s.lazy(() => componentSchema))),
  status: s.optional(s.lazy(() => deviceStatusSchema)),
});
