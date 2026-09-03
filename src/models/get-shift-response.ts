import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { shiftSchema, type Shift } from "./shift.js";

export type GetShiftResponse = {
  shift?: Shift;
  errors?: Error[];
};

export const getShiftResponseSchema: Schema<GetShiftResponse> = s.object<GetShiftResponse>({
  shift: s.optional(s.lazy(() => shiftSchema)),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
