import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerQuerySchema, type CustomerQuery } from "./customer-query.js";

export type SearchCustomersRequest = {
  cursor?: string;
  limit?: number;
  query?: CustomerQuery;
  count?: boolean;
};

export const searchCustomersRequestSchema: Schema<SearchCustomersRequest> = s.object<SearchCustomersRequest>({
  cursor: s.optional(s.string()),
  limit: s.optional(s.number()),
  query: s.optional(s.lazy(() => customerQuerySchema)),
  count: s.optional(s.boolean()),
});
