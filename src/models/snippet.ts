import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Snippet = {
  id?: string;
  siteId?: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
};

export const snippetSchema: Schema<Snippet> = s.object<Snippet>({
  id: s.optional(s.string()),
  siteId: s.optional(s.string()),
  content: s.string(),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  _keysMap: {
    siteId: "site_id",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
