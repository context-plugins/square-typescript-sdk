import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceCodeStatusSchema, type DeviceCodeStatus } from "./device-code-status.js";
import { productTypeSchema, type ProductType } from "./product-type.js";

export type DeviceCode = {
  /** The unique id for this device code. */
  id?: string;
  /** An optional user-defined name for the device code. */
  name?: string | null;
  /** The unique code that can be used to login. */
  code?: string;
  /** The unique id of the device that used this code. Populated when the device is paired up. */
  deviceId?: string;
  productType: ProductType;
  /** The location assigned to this code. */
  locationId?: string | null;
  /** DeviceCode.Status enum. */
  status?: DeviceCodeStatus;
  /** When this DeviceCode will expire and no longer login. Timestamp in RFC 3339 format. */
  pairBy?: string;
  /** When this DeviceCode was created. Timestamp in RFC 3339 format. */
  createdAt?: string;
  /** When this DeviceCode's status was last changed. Timestamp in RFC 3339 format. */
  statusChangedAt?: string;
  /** When this DeviceCode was paired. Timestamp in RFC 3339 format. */
  pairedAt?: string;
};

export const deviceCodeSchema: Schema<DeviceCode> = s.object<DeviceCode>({
  id: s.optional(s.string()),
  name: s.optionalNullable(s.string()),
  code: s.optional(s.string()),
  deviceId: s.optional(s.string()),
  productType: productTypeSchema,
  locationId: s.optionalNullable(s.string()),
  status: s.optional(s.lazy(() => deviceCodeStatusSchema)),
  pairBy: s.optional(s.string()),
  createdAt: s.optional(s.string()),
  statusChangedAt: s.optional(s.string()),
  pairedAt: s.optional(s.string()),
  _keysMap: {
    deviceId: "device_id",
    productType: "product_type",
    locationId: "location_id",
    pairBy: "pair_by",
    createdAt: "created_at",
    statusChangedAt: "status_changed_at",
    pairedAt: "paired_at",
  },
});
