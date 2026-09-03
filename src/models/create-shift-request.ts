import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { shiftSchema, type Shift } from "./shift.js";

export type CreateShiftRequest = {
  idempotencyKey?: string;
  shift: Shift;
};

export const createShiftRequestSchema: Schema<CreateShiftRequest> = s.object<CreateShiftRequest>({
  idempotencyKey: s.optional(s.string()),
  shift: shiftSchema,
  _keysMap: {
    idempotencyKey: "idempotency_key",
  },
});
