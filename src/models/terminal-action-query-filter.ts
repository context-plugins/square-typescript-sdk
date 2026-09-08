import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  terminalActionActionTypeSchema,
  type TerminalActionActionType,
} from "./terminal-action-action-type.js";
import { timeRangeSchema, type TimeRange } from "./time-range.js";

export type TerminalActionQueryFilter = {
  /**
   * `TerminalAction`s associated with a specific device. If no device is specified then all
   * `TerminalAction`s for the merchant will be displayed.
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
   * Filter results with the desired status of the `TerminalAction` Options: `PENDING`,
   * `IN_PROGRESS`, `CANCEL_REQUESTED`, `CANCELED`, `COMPLETED`
   */
  status?: string | null;
  /**
   * Describes the type of this unit and indicates which field contains the unit information. This
   * is an ‘open’ enum.
   */
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
