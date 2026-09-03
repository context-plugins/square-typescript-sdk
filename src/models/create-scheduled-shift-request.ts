import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { scheduledShiftSchema, type ScheduledShift } from "./scheduled-shift.js";

export type CreateScheduledShiftRequest = {
  idempotencyKey?: string;
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
