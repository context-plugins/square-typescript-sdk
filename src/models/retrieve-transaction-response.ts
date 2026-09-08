import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { transactionSchema, type Transaction } from "./transaction.js";

/**
 * Defines the fields that are included in the response body of a request to the
 * [RetrieveTransaction](api-endpoint:Transactions-RetrieveTransaction) endpoint.
 *
 * One of `errors` or `transaction` is present in a given response (never both).
 */
export type RetrieveTransactionResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * Represents a transaction processed with Square, either with the Connect API or with Square
   * Point of Sale.
   *
   * The `tenders` field of this object lists all methods of payment used to pay in the transaction.
   */
  transaction?: Transaction;
};

export const retrieveTransactionResponseSchema: Schema<RetrieveTransactionResponse> =
  s.object<RetrieveTransactionResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    transaction: s.optional(s.lazy(() => transactionSchema)),
  });
