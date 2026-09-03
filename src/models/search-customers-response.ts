import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerSchema, type Customer } from "./customer.js";
import { errorSchema, type Error } from "./error.js";

export type SearchCustomersResponse = {
  errors?: Error[];
  customers?: Customer[];
  cursor?: string;
  count?: number;
};

export const searchCustomersResponseSchema: Schema<SearchCustomersResponse> =
  s.object<SearchCustomersResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    customers: s.optional(s.array(s.lazy(() => customerSchema))),
    cursor: s.optional(s.string()),
    count: s.optional(s.number()),
  });
