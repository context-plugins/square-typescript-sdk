import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

/**
 * The response to a request to delete a `Shift`. The response might contain a set of `Error`
 * objects if the request resulted in errors.
 */
export type DeleteShiftResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const deleteShiftResponseSchema: Schema<DeleteShiftResponse> = s.object<DeleteShiftResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
