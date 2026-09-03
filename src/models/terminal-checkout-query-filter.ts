import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { timeRangeSchema, type TimeRange } from "./time-range.js";

export type TerminalCheckoutQueryFilter = {
  deviceId?: string | null;
  createdAt?: TimeRange;
  status?: string | null;
};

export const terminalCheckoutQueryFilterSchema: Schema<TerminalCheckoutQueryFilter> =
  s.object<TerminalCheckoutQueryFilter>({
    deviceId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.lazy(() => timeRangeSchema)),
    status: s.optionalNullable(s.string()),
    _keysMap: {
      deviceId: "device_id",
      createdAt: "created_at",
    },
  });
