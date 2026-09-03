import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankAccountSchema, type BankAccount } from "./bank-account.js";
import { errorSchema, type Error } from "./error.js";

export type GetBankAccountResponse = {
  bankAccount?: BankAccount;
  errors?: Error[];
};

export const getBankAccountResponseSchema: Schema<GetBankAccountResponse> = s.object<GetBankAccountResponse>({
  bankAccount: s.optional(s.lazy(() => bankAccountSchema)),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  _keysMap: {
    bankAccount: "bank_account",
  },
});
