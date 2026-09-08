import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankAccountSchema, type BankAccount } from "./bank-account.js";

export type BankAccountCreatedEventObject = {
  /**
   * Represents a bank account. For more information about linking a bank account to a Square
   * account, see [Bank Accounts API](https://developer.squareup.com/docs/bank-accounts-api).
   */
  bankAccount?: BankAccount;
};

export const bankAccountCreatedEventObjectSchema: Schema<BankAccountCreatedEventObject> =
  s.object<BankAccountCreatedEventObject>({
    bankAccount: s.optional(s.lazy(() => bankAccountSchema)),
    _keysMap: {
      bankAccount: "bank_account",
    },
  });
