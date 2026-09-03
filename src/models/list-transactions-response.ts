import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { transactionSchema, type Transaction } from "./transaction.js";

export type ListTransactionsResponse = {
  errors?: Error[];
  transactions?: Transaction[];
  cursor?: string;
};

export const listTransactionsResponseSchema: Schema<ListTransactionsResponse> =
  s.object<ListTransactionsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    transactions: s.optional(s.array(s.lazy(() => transactionSchema))),
    cursor: s.optional(s.string()),
  });
