import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { snippetSchema, type Snippet } from "./snippet.js";

/** Represents an `UpsertSnippet` request. */
export type UpsertSnippetRequest = {
  /**
   * Represents the snippet that is added to a Square Online site. The snippet code is injected into
   * the `head` element of all pages on the site, except for checkout pages.
   */
  snippet: Snippet;
};

export const upsertSnippetRequestSchema: Schema<UpsertSnippetRequest> = s.object<UpsertSnippetRequest>({
  snippet: snippetSchema,
});
