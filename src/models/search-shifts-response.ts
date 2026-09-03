import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { shiftSchema, type Shift } from "./shift.js";

export type SearchShiftsResponse = {
  shifts?: Shift[];
  cursor?: string;
  errors?: Error[];
};

export const searchShiftsResponseSchema: Schema<SearchShiftsResponse> = s.object<SearchShiftsResponse>({
  shifts: s.optional(s.array(s.lazy(() => shiftSchema))),
  cursor: s.optional(s.string()),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
