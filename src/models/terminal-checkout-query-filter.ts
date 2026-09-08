import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { timeRangeSchema, type TimeRange } from "./time-range.js";

export type TerminalCheckoutQueryFilter = {
  /**
   * The `TerminalCheckout` objects associated with a specific device. If no device is specified,
   * then all `TerminalCheckout` objects for the merchant are displayed.
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
   * Filtered results with the desired status of the `TerminalCheckout`. Options: `PENDING`,
   * `IN_PROGRESS`, `CANCEL_REQUESTED`, `CANCELED`, `COMPLETED`
   */
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
