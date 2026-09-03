import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { timeRangeSchema, type TimeRange } from "./time-range.js";

export type TerminalRefundQueryFilter = {
  deviceId?: string | null;
  createdAt?: TimeRange;
  status?: string | null;
};

export const terminalRefundQueryFilterSchema: Schema<TerminalRefundQueryFilter> =
  s.object<TerminalRefundQueryFilter>({
    deviceId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.lazy(() => timeRangeSchema)),
    status: s.optionalNullable(s.string()),
    _keysMap: {
      deviceId: "device_id",
      createdAt: "created_at",
    },
  });
