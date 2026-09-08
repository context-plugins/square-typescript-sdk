import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { customerTaxIdsSchema, type CustomerTaxIds } from "./customer-tax-ids.js";

/**
 * Defines the body parameters that can be included in a request to the `CreateCustomer` endpoint.
 */
export type CreateCustomerRequest = {
  /**
   * The idempotency key for the request. For more information, see
   * [Idempotency](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency).
   */
  idempotencyKey?: string;
  /**
   * The given name (that is, the first name) associated with the customer profile.
   *
   * The maximum length for this value is 300 characters.
   */
  givenName?: string;
  /**
   * The family name (that is, the last name) associated with the customer profile.
   *
   * The maximum length for this value is 300 characters.
   */
  familyName?: string;
  /**
   * A business name associated with the customer profile.
   *
   * The maximum length for this value is 500 characters.
   */
  companyName?: string;
  /**
   * A nickname for the customer profile.
   *
   * The maximum length for this value is 100 characters.
   */
  nickname?: string;
  /**
   * The email address associated with the customer profile.
   *
   * The maximum length for this value is 254 characters.
   */
  emailAddress?: string;
  /**
   * Represents a postal address in a country. For more information, see [Working with
   * Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
   */
  address?: Address;
  /**
   * The phone number associated with the customer profile. The phone number must be valid and can
   * contain 9–16 digits, with an optional `+` prefix and country code. For more information, see
   * [Customer phone
   * numbers](https://developer.squareup.com/docs/customers-api/use-the-api/keep-records#phone-number).
   */
  phoneNumber?: string;
  /**
   * An optional second ID used to associate the customer profile with an entity in another system.
   *
   * The maximum length for this value is 100 characters.
   */
  referenceId?: string;
  /** A custom note associated with the customer profile. */
  note?: string;
  /**
   * The birthday associated with the customer profile, in `YYYY-MM-DD` or `MM-DD` format. For
   * example, specify `1998-09-21` for September 21, 1998, or `09-21` for September 21. Birthdays
   * are returned in `YYYY-MM-DD` format, where `YYYY` is the specified birth year or `0000` if a
   * birth year is not specified.
   */
  birthday?: string;
  /**
   * Represents the tax ID associated with a [customer profile](entity:Customer). The corresponding
   * `tax_ids` field is available only for customers of sellers in EU countries or the United
   * Kingdom. For more information, see [Customer tax
   * IDs](https://developer.squareup.com/docs/customers-api/what-it-does#customer-tax-ids).
   */
  taxIds?: CustomerTaxIds;
};

export const createCustomerRequestSchema: Schema<CreateCustomerRequest> = s.object<CreateCustomerRequest>({
  idempotencyKey: s.optional(s.string()),
  givenName: s.optional(s.string()),
  familyName: s.optional(s.string()),
  companyName: s.optional(s.string()),
  nickname: s.optional(s.string()),
  emailAddress: s.optional(s.string()),
  address: s.optional(s.lazy(() => addressSchema)),
  phoneNumber: s.optional(s.string()),
  referenceId: s.optional(s.string()),
  note: s.optional(s.string()),
  birthday: s.optional(s.string()),
  taxIds: s.optional(s.lazy(() => customerTaxIdsSchema)),
  _keysMap: {
    idempotencyKey: "idempotency_key",
    givenName: "given_name",
    familyName: "family_name",
    companyName: "company_name",
    emailAddress: "email_address",
    phoneNumber: "phone_number",
    referenceId: "reference_id",
    taxIds: "tax_ids",
  },
});
