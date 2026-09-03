import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deviceStatusCategorySchema, type DeviceStatusCategory } from "./device-status-category.js";

export type DeviceStatus = {
  category?: DeviceStatusCategory;
};

export const deviceStatusSchema: Schema<DeviceStatus> = s.object<DeviceStatus>({
  category: s.optional(s.lazy(() => deviceStatusCategorySchema)),
});
