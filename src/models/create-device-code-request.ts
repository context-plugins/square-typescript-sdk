import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceCodeSchema, type DeviceCode } from "./device-code.js";

export type CreateDeviceCodeRequest = {
  idempotencyKey: string;
  deviceCode: DeviceCode;
};

export const createDeviceCodeRequestSchema: Schema<CreateDeviceCodeRequest> =
  s.object<CreateDeviceCodeRequest>({
    idempotencyKey: s.string(),
    deviceCode: deviceCodeSchema,
    _keysMap: {
      idempotencyKey: "idempotency_key",
      deviceCode: "device_code",
    },
  });
