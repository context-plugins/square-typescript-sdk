import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeviceComponentDetailsCardReaderDetails = {
  version?: string;
};

export const deviceComponentDetailsCardReaderDetailsSchema: Schema<DeviceComponentDetailsCardReaderDetails> =
  s.object<DeviceComponentDetailsCardReaderDetails>({
    version: s.optional(s.string()),
  });
