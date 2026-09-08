import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { timeRangeSchema, type TimeRange } from "./time-range.js";

export type TerminalRefundQueryFilter = {
  /**
   * `TerminalRefund` objects associated with a specific device. If no device is specified, then all
   * `TerminalRefund` objects for the signed-in account are displayed.
   */
  deviceId?: string | null;
  /**
   * Represents a generic time range. The start and end values are represented in RFC 3339 format.
   * Time ranges are customized to be inclusive or exclusive based on the needs of a particular
   * endpoint. Refer to the relevant endpoint-specific documentation to determine how time ranges
   * are handled.
   */
  createdAt?: TimeRange;
  /**
   * Filtered results with the desired status of the `TerminalRefund`. Options: `PENDING`,
   * `IN_PROGRESS`, `CANCEL_REQUESTED`, `CANCELED`, or `COMPLETED`.
   */
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
