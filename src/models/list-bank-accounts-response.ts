import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankAccountSchema, type BankAccount } from "./bank-account.js";
import { errorSchema, type Error } from "./error.js";

export type ListBankAccountsResponse = {
  bankAccounts?: BankAccount[];
  errors?: Error[];
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
