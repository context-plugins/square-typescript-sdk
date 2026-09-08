import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { transactionSchema, type Transaction } from "./transaction.js";

/**
 * Defines the fields that are included in the response body of a request to the
 * [ListTransactions](api-endpoint:Transactions-ListTransactions) endpoint.
 *
 * One of `errors` or `transactions` is present in a given response (never both).
 */
export type ListTransactionsResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** An array of transactions that match your query. */
  transactions?: Transaction[];
  /**
   * A pagination cursor for retrieving the next set of results, if any remain. Provide this value
   * as the `cursor` parameter in a subsequent request to this endpoint.
   *
   * See [Paginating results](https://developer.squareup.com/docs/working-with-apis/pagination) for
   * more information.
   */
  cursor?: string;
};

export const listTransactionsResponseSchema: Schema<ListTransactionsResponse> =
  s.object<ListTransactionsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    transactions: s.optional(s.array(s.lazy(() => transactionSchema))),
    cursor: s.optional(s.string()),
  });
