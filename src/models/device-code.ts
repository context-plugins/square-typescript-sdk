import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceCodeStatusSchema, type DeviceCodeStatus } from "./device-code-status.js";

export type DeviceCode = {
  id?: string;
  name?: string | null;
  code?: string;
  deviceId?: string;
  productType: "TERMINAL_API";
  locationId?: string | null;
  status?: DeviceCodeStatus;
  pairBy?: string;
  createdAt?: string;
  statusChangedAt?: string;
  pairedAt?: string;
};

export const deviceCodeSchema: Schema<DeviceCode> = s.object<DeviceCode>({
  id: s.optional(s.string()),
  name: s.optionalNullable(s.string()),
  code: s.optional(s.string()),
  deviceId: s.optional(s.string()),
  productType: s.literal("TERMINAL_API"),
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
