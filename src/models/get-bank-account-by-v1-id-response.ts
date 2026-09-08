import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankAccountSchema, type BankAccount } from "./bank-account.js";
import { errorSchema, type Error } from "./error.js";

/** Response object returned by GetBankAccountByV1Id. */
export type GetBankAccountByV1IdResponse = {
  /** Information on errors encountered during the request. */
  errors?: Error[];
  /**
   * Represents a bank account. For more information about linking a bank account to a Square
   * account, see [Bank Accounts API](https://developer.squareup.com/docs/bank-accounts-api).
   */
  bankAccount?: BankAccount;
};

export const getBankAccountByV1IdResponseSchema: Schema<GetBankAccountByV1IdResponse> =
  s.object<GetBankAccountByV1IdResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    bankAccount: s.optional(s.lazy(() => bankAccountSchema)),
    _keysMap: {
      bankAccount: "bank_account",
    },
  });
