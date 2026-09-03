import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankAccountStatusSchema, type BankAccountStatus } from "./bank-account-status.js";
import { bankAccountTypeSchema, type BankAccountType } from "./bank-account-type.js";
import { countrySchema, type Country } from "./country.js";
import { currencySchema, type Currency } from "./currency.js";

export type BankAccount = {
  id: string;
  accountNumberSuffix: string;
  country: Country;
  currency: Currency;
  accountType: BankAccountType;
  holderName: string;
  primaryBankIdentificationNumber: string;
  secondaryBankIdentificationNumber?: string | null;
  debitMandateReferenceId?: string | null;
  referenceId?: string | null;
  locationId?: string | null;
  status: BankAccountStatus;
  creditable: boolean;
  debitable: boolean;
  fingerprint?: string | null;
  version?: number;
  bankName?: string | null;
  customerId?: string;
};

export const bankAccountSchema: Schema<BankAccount> = s.object<BankAccount>({
  id: s.string(),
  accountNumberSuffix: s.string(),
  country: countrySchema,
  currency: currencySchema,
  accountType: bankAccountTypeSchema,
  holderName: s.string(),
  primaryBankIdentificationNumber: s.string(),
  secondaryBankIdentificationNumber: s.optionalNullable(s.string()),
  debitMandateReferenceId: s.optionalNullable(s.string()),
  referenceId: s.optionalNullable(s.string()),
  locationId: s.optionalNullable(s.string()),
  status: bankAccountStatusSchema,
  creditable: s.boolean(),
  debitable: s.boolean(),
  fingerprint: s.optionalNullable(s.string()),
  version: s.optional(s.number()),
  bankName: s.optionalNullable(s.string()),
  customerId: s.optional(s.string()),
  _keysMap: {
    accountNumberSuffix: "account_number_suffix",
    accountType: "account_type",
    holderName: "holder_name",
    primaryBankIdentificationNumber: "primary_bank_identification_number",
    secondaryBankIdentificationNumber: "secondary_bank_identification_number",
    debitMandateReferenceId: "debit_mandate_reference_id",
    referenceId: "reference_id",
    locationId: "location_id",
    bankName: "bank_name",
    customerId: "customer_id",
  },
});
