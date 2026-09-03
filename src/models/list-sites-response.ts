import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { siteSchema, type Site } from "./site.js";

export type ListSitesResponse = {
  errors?: Error[];
  sites?: Site[];
};

export const listSitesResponseSchema: Schema<ListSitesResponse> = s.object<ListSitesResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  sites: s.optional(s.array(s.lazy(() => siteSchema))),
});
