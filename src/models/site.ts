import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Site = {
  id?: string;
  siteTitle?: string | null;
  domain?: string | null;
  isPublished?: boolean | null;
  createdAt?: string;
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
