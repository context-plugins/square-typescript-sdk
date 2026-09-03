import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankAccountSchema, type BankAccount } from "./bank-account.js";

export type BankAccountDisabledEventObject = {
  bankAccount?: BankAccount;
};

export const bankAccountDisabledEventObjectSchema: Schema<BankAccountDisabledEventObject> =
  s.object<BankAccountDisabledEventObject>({
    bankAccount: s.optional(s.lazy(() => bankAccountSchema)),
    _keysMap: {
      bankAccount: "bank_account",
    },
  });
