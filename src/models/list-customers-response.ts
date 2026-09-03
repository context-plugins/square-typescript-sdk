import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerSchema, type Customer } from "./customer.js";
import { errorSchema, type Error } from "./error.js";

export type ListCustomersResponse = {
  errors?: Error[];
  customers?: Customer[];
  cursor?: string;
  count?: number;
};

export const listCustomersResponseSchema: Schema<ListCustomersResponse> = s.object<ListCustomersResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  customers: s.optional(s.array(s.lazy(() => customerSchema))),
  cursor: s.optional(s.string()),
  count: s.optional(s.number()),
});
