import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

/**
 * The response to a request to delete a `BreakType`. The response might contain a set of `Error`
 * objects if the request resulted in errors.
 */
export type DeleteBreakTypeResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const deleteBreakTypeResponseSchema: Schema<DeleteBreakTypeResponse> =
  s.object<DeleteBreakTypeResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
