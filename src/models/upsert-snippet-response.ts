import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { snippetSchema, type Snippet } from "./snippet.js";

export type UpsertSnippetResponse = {
  errors?: Error[];
  snippet?: Snippet;
};

export const upsertSnippetResponseSchema: Schema<UpsertSnippetResponse> = s.object<UpsertSnippetResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  snippet: s.optional(s.lazy(() => snippetSchema)),
});
