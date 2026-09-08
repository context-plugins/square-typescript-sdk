import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  deviceAttributesDeviceTypeSchema,
  type DeviceAttributesDeviceType,
} from "./device-attributes-device-type.js";

export type DeviceAttributes = {
  /** An enum identifier of the device type. */
  type: DeviceAttributesDeviceType;
  /** The maker of the device. */
  manufacturer: string;
  /** The specific model of the device. */
  model?: string | null;
  /** A seller-specified name for the device. */
  name?: string | null;
  /**
   * The manufacturer-supplied identifier for the device (where available). In many cases, this
   * identifier will be a serial number.
   */
  manufacturersId?: string | null;
  /**
   * The RFC 3339-formatted value of the most recent update to the device information. (Could
   * represent any field update on the device.)
   */
  updatedAt?: string;
  /** The current version of software installed on the device. */
  version?: string;
  /** The merchant_token identifying the merchant controlling the device. */
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
