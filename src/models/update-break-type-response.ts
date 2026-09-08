import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { breakTypeSchema, type BreakType } from "./break-type.js";
import { errorSchema, type Error } from "./error.js";

/**
 * A response to a request to update a `BreakType`. The response contains the requested `BreakType`
 * objects and might contain a set of `Error` objects if the request resulted in errors.
 */
export type UpdateBreakTypeResponse = {
  /**
   * A template for a type of [break](entity:Break) that can be added to a
   * [timecard](entity:Timecard), including the expected duration and paid status.
   */
  breakType?: BreakType;
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const updateBreakTypeResponseSchema: Schema<UpdateBreakTypeResponse> =
  s.object<UpdateBreakTypeResponse>({
    breakType: s.optional(s.lazy(() => breakTypeSchema)),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      breakType: "break_type",
    },
  });
