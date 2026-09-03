import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type DeleteSnippetResponse = {
  errors?: Error[];
};

export const deleteSnippetResponseSchema: Schema<DeleteSnippetResponse> = s.object<DeleteSnippetResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
