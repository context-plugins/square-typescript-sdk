import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Represents a Square Online site, which is an online store for a Square seller. */
export type Site = {
  /** The Square-assigned ID of the site. */
  id?: string;
  /** The title of the site. */
  siteTitle?: string | null;
  /** The domain of the site (without the protocol). For example, `mysite1.square.site`. */
  domain?: string | null;
  /** Indicates whether the site is published. */
  isPublished?: boolean | null;
  /** The timestamp of when the site was created, in RFC 3339 format. */
  createdAt?: string;
  /** The timestamp of when the site was last updated, in RFC 3339 format. */
  updatedAt?: string;
};

export const siteSchema: Schema<Site> = s.object<Site>({
  id: s.optional(s.string()),
  siteTitle: s.optionalNullable(s.string()),
  domain: s.optionalNullable(s.string()),
  isPublished: s.optionalNullable(s.boolean()),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  _keysMap: {
    siteTitle: "site_title",
    isPublished: "is_published",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
