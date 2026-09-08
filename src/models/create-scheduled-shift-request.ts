import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scheduledShiftSchema, type ScheduledShift } from "./scheduled-shift.js";

/** Represents a [CreateScheduledShift](api-endpoint:Labor-CreateScheduledShift) request. */
export type CreateScheduledShiftRequest = {
  /**
   * A unique identifier for the `CreateScheduledShift` request, used to ensure the
   * [idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency)
   * of the operation.
   */
  idempotencyKey?: string;
  /**
   * Represents a specific time slot in a work schedule. This object is used to manage the lifecycle
   * of a scheduled shift from the draft to published state. A scheduled shift contains the latest
   * draft shift details and current published shift details.
   */
  scheduledShift: ScheduledShift;
};

export const createScheduledShiftRequestSchema: Schema<CreateScheduledShiftRequest> =
  s.object<CreateScheduledShiftRequest>({
    idempotencyKey: s.optional(s.string()),
    scheduledShift: scheduledShiftSchema,
    _keysMap: {
      idempotencyKey: "idempotency_key",
      scheduledShift: "scheduled_shift",
    },
  });
