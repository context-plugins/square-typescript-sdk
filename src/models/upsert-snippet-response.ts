import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { snippetSchema, type Snippet } from "./snippet.js";

/**
 * Represents an `UpsertSnippet` response. The response can include either `snippet` or `errors`.
 */
export type UpsertSnippetResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * Represents the snippet that is added to a Square Online site. The snippet code is injected into
   * the `head` element of all pages on the site, except for checkout pages.
   */
  snippet?: Snippet;
};

export const upsertSnippetResponseSchema: Schema<UpsertSnippetResponse> = s.object<UpsertSnippetResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  snippet: s.optional(s.lazy(() => snippetSchema)),
});
