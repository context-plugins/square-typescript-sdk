import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { snippetSchema, type Snippet } from "./snippet.js";

export type RetrieveSnippetResponse = {
  errors?: Error[];
  snippet?: Snippet;
};

export const retrieveSnippetResponseSchema: Schema<RetrieveSnippetResponse> =
  s.object<RetrieveSnippetResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    snippet: s.optional(s.lazy(() => snippetSchema)),
  });
