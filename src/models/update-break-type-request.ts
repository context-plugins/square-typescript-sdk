import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { breakTypeSchema, type BreakType } from "./break-type.js";

export type UpdateBreakTypeRequest = {
  breakType: BreakType;
};

export const updateBreakTypeRequestSchema: Schema<UpdateBreakTypeRequest> = s.object<UpdateBreakTypeRequest>({
  breakType: breakTypeSchema,
  _keysMap: {
    breakType: "break_type",
  },
});
