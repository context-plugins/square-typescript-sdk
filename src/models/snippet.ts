import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Represents the snippet that is added to a Square Online site. The snippet code is injected into
 * the `head` element of all pages on the site, except for checkout pages.
 */
export type Snippet = {
  /** The Square-assigned ID for the snippet. */
  id?: string;
  /** The ID of the site that contains the snippet. */
  siteId?: string;
  /** The snippet code, which can contain valid HTML, JavaScript, or both. */
  content: string;
  /** The timestamp of when the snippet was initially added to the site, in RFC 3339 format. */
  createdAt?: string;
  /** The timestamp of when the snippet was last updated on the site, in RFC 3339 format. */
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
