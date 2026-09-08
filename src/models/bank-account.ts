import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankAccountStatusSchema, type BankAccountStatus } from "./bank-account-status.js";
import { bankAccountTypeSchema, type BankAccountType } from "./bank-account-type.js";
import { countrySchema, type Country } from "./country.js";
import { currencySchema, type Currency } from "./currency.js";

/**
 * Represents a bank account. For more information about linking a bank account to a Square account,
 * see [Bank Accounts API](https://developer.squareup.com/docs/bank-accounts-api).
 */
export type BankAccount = {
  /** The unique, Square-issued identifier for the bank account. */
  id: string;
  /** The last few digits of the account number. */
  accountNumberSuffix: string;
  /**
   * Indicates the country associated with another entity, such as a business. Values are in [ISO
   * 3166-1-alpha-2 format](http://www.iso.org/iso/home/standards/country_codes.htm).
   */
  country: Country;
  /**
   * Indicates the associated currency for an amount of money. Values correspond to [ISO
   * 4217](https://wikipedia.org/wiki/ISO_4217).
   */
  currency: Currency;
  /** Indicates the financial purpose of the bank account. */
  accountType: BankAccountType;
  /**
   * Name of the account holder. This name must match the name on the targeted bank account record.
   */
  holderName: string;
  /**
   * Primary identifier for the bank. For more information, see [Bank Accounts
   * API](https://developer.squareup.com/docs/bank-accounts-api).
   */
  primaryBankIdentificationNumber: string;
  /**
   * Secondary identifier for the bank. For more information, see [Bank Accounts
   * API](https://developer.squareup.com/docs/bank-accounts-api).
   */
  secondaryBankIdentificationNumber?: string | null;
  /**
   * Reference identifier that will be displayed to UK bank account owners when collecting direct
   * debit authorization. Only required for UK bank accounts.
   */
  debitMandateReferenceId?: string | null;
  /**
   * Client-provided identifier for linking the banking account to an entity in a third-party system
   * (for example, a bank account number or a user identifier).
   */
  referenceId?: string | null;
  /** The location to which the bank account belongs. */
  locationId?: string | null;
  /** Indicates the current verification status of a `BankAccount` object. */
  status: BankAccountStatus;
  /** Indicates whether it is possible for Square to send money to this bank account. */
  creditable: boolean;
  /** Indicates whether it is possible for Square to take money from this bank account. */
  debitable: boolean;
  /**
   * A Square-assigned, unique identifier for the bank account based on the account information. The
   * account fingerprint can be used to compare account entries and determine if the they represent
   * the same real-world bank account.
   */
  fingerprint?: string | null;
  /** The current version of the `BankAccount`. */
  version?: number;
  /** Read only. Name of actual financial institution. For example "Bank of America". */
  bankName?: string | null;
  /** The ID of the customer who owns the bank account */
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
