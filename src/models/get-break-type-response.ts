import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { breakTypeSchema, type BreakType } from "./break-type.js";
import { errorSchema, type Error } from "./error.js";

export type GetBreakTypeResponse = {
  breakType?: BreakType;
  errors?: Error[];
};

export const getBreakTypeResponseSchema: Schema<GetBreakTypeResponse> = s.object<GetBreakTypeResponse>({
  breakType: s.optional(s.lazy(() => breakTypeSchema)),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  _keysMap: {
    breakType: "break_type",
  },
});
