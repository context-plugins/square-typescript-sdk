import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { shiftSchema, type Shift } from "./shift.js";

export type UpdateShiftRequest = {
  shift: Shift;
};

export const updateShiftRequestSchema: Schema<UpdateShiftRequest> = s.object<UpdateShiftRequest>({
  shift: shiftSchema,
});
