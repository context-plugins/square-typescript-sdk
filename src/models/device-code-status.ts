import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** DeviceCode.Status enum. */
export const DeviceCodeStatus = {
  /** The status cannot be determined or does not exist. */
  Unknown: "UNKNOWN",
  /** The device code is just created and unpaired. */
  Unpaired: "UNPAIRED",
  /** The device code has been signed in and paired to a device. */
  Paired: "PAIRED",
  /** The device code was unpaired and expired before it was paired. */
  Expired: "EXPIRED",
} as const;
export type DeviceCodeStatus = (typeof DeviceCodeStatus)[keyof typeof DeviceCodeStatus] | (string & {});

export const deviceCodeStatusSchema: EnumSchema<DeviceCodeStatus> =
  s.enumOf<DeviceCodeStatus>(DeviceCodeStatus);
