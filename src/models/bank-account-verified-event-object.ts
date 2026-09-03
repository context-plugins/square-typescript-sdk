import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankAccountSchema, type BankAccount } from "./bank-account.js";

export type BankAccountVerifiedEventObject = {
  bankAccount?: BankAccount;
};

export const bankAccountVerifiedEventObjectSchema: Schema<BankAccountVerifiedEventObject> =
  s.object<BankAccountVerifiedEventObject>({
    bankAccount: s.optional(s.lazy(() => bankAccountSchema)),
    _keysMap: {
      bankAccount: "bank_account",
    },
  });
