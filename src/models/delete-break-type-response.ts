import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type DeleteBreakTypeResponse = {
  errors?: Error[];
};

export const deleteBreakTypeResponseSchema: Schema<DeleteBreakTypeResponse> =
  s.object<DeleteBreakTypeResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
