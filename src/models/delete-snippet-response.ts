import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

/** Represents a `DeleteSnippet` response. */
export type DeleteSnippetResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const deleteSnippetResponseSchema: Schema<DeleteSnippetResponse> = s.object<DeleteSnippetResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
});
