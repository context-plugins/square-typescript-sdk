import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankAccountSchema, type BankAccount } from "./bank-account.js";
import { errorSchema, type Error } from "./error.js";

/** Response object returned by ListBankAccounts. */
export type ListBankAccountsResponse = {
  /** List of BankAccounts associated with this account. */
  bankAccounts?: BankAccount[];
  /** Information on errors encountered during the request. */
  errors?: Error[];
  /**
   * When a response is truncated, it includes a cursor that you can use in a subsequent request to
   * fetch next set of bank accounts. If empty, this is the final response.
   *
   * For more information, see
   * [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
   */
  cursor?: string;
};

export const listBankAccountsResponseSchema: Schema<ListBankAccountsResponse> =
  s.object<ListBankAccountsResponse>({
    bankAccounts: s.optional(s.array(s.lazy(() => bankAccountSchema))),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    cursor: s.optional(s.string()),
    _keysMap: {
      bankAccounts: "bank_accounts",
    },
  });
