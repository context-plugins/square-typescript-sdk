import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { snippetSchema, type Snippet } from "./snippet.js";

export type UpsertSnippetRequest = {
  snippet: Snippet;
};

export const upsertSnippetRequestSchema: Schema<UpsertSnippetRequest> = s.object<UpsertSnippetRequest>({
  snippet: snippetSchema,
});
