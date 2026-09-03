import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankAccountSchema, type BankAccount } from "./bank-account.js";
import { errorSchema, type Error } from "./error.js";

export type GetBankAccountByV1IdResponse = {
  errors?: Error[];
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
