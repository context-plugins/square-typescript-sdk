import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CashDrawerDevice = {
  /** The device Square-issued ID */
  id?: string;
  /** The device merchant-specified name. */
  name?: string | null;
};

export const cashDrawerDeviceSchema: Schema<CashDrawerDevice> = s.object<CashDrawerDevice>({
  id: s.optional(s.string()),
  name: s.optionalNullable(s.string()),
});
