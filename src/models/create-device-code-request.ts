import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceCodeSchema, type DeviceCode } from "./device-code.js";

export type CreateDeviceCodeRequest = {
  /**
   * A unique string that identifies this CreateDeviceCode request. Keys can be any valid string but
   * must be unique for every CreateDeviceCode request.
   *
   * See [Idempotency
   * keys](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency) for
   * more information.
   */
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
