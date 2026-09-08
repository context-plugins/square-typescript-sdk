import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankAccountSchema, type BankAccount } from "./bank-account.js";
import { errorSchema, type Error } from "./error.js";

/** Response object returned by `DisableBankAccount`. */
export type DisableBankAccountResponse = {
  /**
   * Represents a bank account. For more information about linking a bank account to a Square
   * account, see [Bank Accounts API](https://developer.squareup.com/docs/bank-accounts-api).
   */
  bankAccount?: BankAccount;
  /** Information on errors encountered during the request. */
  errors?: Error[];
};

export const disableBankAccountResponseSchema: Schema<DisableBankAccountResponse> =
  s.object<DisableBankAccountResponse>({
    bankAccount: s.optional(s.lazy(() => bankAccountSchema)),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      bankAccount: "bank_account",
    },
  });
