import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CashDrawerDevice = {
  id?: string;
  name?: string | null;
};

export const cashDrawerDeviceSchema: Schema<CashDrawerDevice> = s.object<CashDrawerDevice>({
  id: s.optional(s.string()),
  name: s.optionalNullable(s.string()),
});
