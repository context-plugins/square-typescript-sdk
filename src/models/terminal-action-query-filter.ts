import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  terminalActionActionTypeSchema,
  type TerminalActionActionType,
} from "./terminal-action-action-type.js";
import { timeRangeSchema, type TimeRange } from "./time-range.js";

export type TerminalActionQueryFilter = {
  deviceId?: string | null;
  createdAt?: TimeRange;
  status?: string | null;
  type?: TerminalActionActionType;
};

export const terminalActionQueryFilterSchema: Schema<TerminalActionQueryFilter> =
  s.object<TerminalActionQueryFilter>({
    deviceId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.lazy(() => timeRangeSchema)),
    status: s.optionalNullable(s.string()),
    type: s.optional(s.lazy(() => terminalActionActionTypeSchema)),
    _keysMap: {
      deviceId: "device_id",
      createdAt: "created_at",
    },
  });
