import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  deviceAttributesDeviceTypeSchema,
  type DeviceAttributesDeviceType,
} from "./device-attributes-device-type.js";

export type DeviceAttributes = {
  type: DeviceAttributesDeviceType;
  manufacturer: string;
  model?: string | null;
  name?: string | null;
  manufacturersId?: string | null;
  updatedAt?: string;
  version?: string;
  merchantToken?: string | null;
};

export const deviceAttributesSchema: Schema<DeviceAttributes> = s.object<DeviceAttributes>({
  type: deviceAttributesDeviceTypeSchema,
  manufacturer: s.string(),
  model: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  manufacturersId: s.optionalNullable(s.string()),
  updatedAt: s.optional(s.string()),
  version: s.optional(s.string()),
  merchantToken: s.optionalNullable(s.string()),
  _keysMap: {
    manufacturersId: "manufacturers_id",
    updatedAt: "updated_at",
    merchantToken: "merchant_token",
  },
});
