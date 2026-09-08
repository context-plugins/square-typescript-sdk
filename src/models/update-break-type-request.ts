import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { breakTypeSchema, type BreakType } from "./break-type.js";

/** A request to update a `BreakType`. */
export type UpdateBreakTypeRequest = {
  /**
   * A template for a type of [break](entity:Break) that can be added to a
   * [timecard](entity:Timecard), including the expected duration and paid status.
   */
  breakType: BreakType;
};

export const updateBreakTypeRequestSchema: Schema<UpdateBreakTypeRequest> = s.object<UpdateBreakTypeRequest>({
  breakType: breakTypeSchema,
  _keysMap: {
    breakType: "break_type",
  },
});
