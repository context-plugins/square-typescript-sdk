import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type DeleteTimecardResponse = {
  errors?: Error[];
};

export const deleteTimecardResponseSchema: Schema<DeleteTimecardResponse> = s.object<DeleteTimecardResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
