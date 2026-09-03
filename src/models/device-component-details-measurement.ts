import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeviceComponentDetailsMeasurement = {
  value?: number | null;
};

export const deviceComponentDetailsMeasurementSchema: Schema<DeviceComponentDetailsMeasurement> =
  s.object<DeviceComponentDetailsMeasurement>({
    value: s.optionalNullable(s.number()),
  });
