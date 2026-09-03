import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { transactionSchema, type Transaction } from "./transaction.js";

export type RetrieveTransactionResponse = {
  errors?: Error[];
  transaction?: Transaction;
};

export const retrieveTransactionResponseSchema: Schema<RetrieveTransactionResponse> =
  s.object<RetrieveTransactionResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    transaction: s.optional(s.lazy(() => transactionSchema)),
  });
