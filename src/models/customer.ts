import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { customerCreationSourceSchema, type CustomerCreationSource } from "./customer-creation-source.js";
import { customerPreferencesSchema, type CustomerPreferences } from "./customer-preferences.js";
import { customerTaxIdsSchema, type CustomerTaxIds } from "./customer-tax-ids.js";

/** Represents a Square customer profile in the Customer Directory of a Square seller. */
export type Customer = {
  /**
   * A unique Square-assigned ID for the customer profile.
   *
   * If you need this ID for an API request, use the ID returned when you created the customer
   * profile or call the [SearchCustomers](api-endpoint:Customers-SearchCustomers) or
   * [ListCustomers](api-endpoint:Customers-ListCustomers) endpoint.
   */
  id?: string;
  /** The timestamp when the customer profile was created, in RFC 3339 format. */
  createdAt?: string;
  /** The timestamp when the customer profile was last updated, in RFC 3339 format. */
  updatedAt?: string;
  /** The given name (that is, the first name) associated with the customer profile. */
  givenName?: string | null;
  /** The family name (that is, the last name) associated with the customer profile. */
  familyName?: string | null;
  /** A nickname for the customer profile. */
  nickname?: string | null;
  /** A business name associated with the customer profile. */
  companyName?: string | null;
  /** The email address associated with the customer profile. */
  emailAddress?: string | null;
  /**
   * Represents a postal address in a country. For more information, see [Working with
   * Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses).
   */
  address?: Address;
  /** The phone number associated with the customer profile. */
  phoneNumber?: string | null;
  /**
   * The birthday associated with the customer profile, in `YYYY-MM-DD` format. For example,
   * `1998-09-21` represents September 21, 1998, and `0000-09-21` represents September 21 (without a
   * birth year).
   */
  birthday?: string | null;
  /**
   * An optional second ID used to associate the customer profile with an entity in another system.
   */
  referenceId?: string | null;
  /** A custom note associated with the customer profile. */
  note?: string | null;
  /** Represents communication preferences for the customer profile. */
  preferences?: CustomerPreferences;
  /** Indicates the method used to create the customer profile. */
  creationSource?: CustomerCreationSource;
  /** The IDs of [customer groups](entity:CustomerGroup) the customer belongs to. */
  groupIds?: string[] | null;
  /** The IDs of [customer segments](entity:CustomerSegment) the customer belongs to. */
  segmentIds?: string[] | null;
  /**
   * The Square-assigned version number of the customer profile. The version number is incremented
   * each time an update is committed to the customer profile, except for changes to customer
   * segment membership.
   */
  version?: number;
  /**
   * Represents the tax ID associated with a [customer profile](entity:Customer). The corresponding
   * `tax_ids` field is available only for customers of sellers in EU countries or the United
   * Kingdom. For more information, see [Customer tax
   * IDs](https://developer.squareup.com/docs/customers-api/what-it-does#customer-tax-ids).
   */
  taxIds?: CustomerTaxIds;
};

export const customerSchema: Schema<Customer> = s.object<Customer>({
  id: s.optional(s.string()),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  givenName: s.optionalNullable(s.string()),
  familyName: s.optionalNullable(s.string()),
  nickname: s.optionalNullable(s.string()),
  companyName: s.optionalNullable(s.string()),
  emailAddress: s.optionalNullable(s.string()),
  address: s.optional(s.lazy(() => addressSchema)),
  phoneNumber: s.optionalNullable(s.string()),
  birthday: s.optionalNullable(s.string()),
  referenceId: s.optionalNullable(s.string()),
  note: s.optionalNullable(s.string()),
  preferences: s.optional(s.lazy(() => customerPreferencesSchema)),
  creationSource: s.optional(s.lazy(() => customerCreationSourceSchema)),
  groupIds: s.optionalNullable(s.array(s.string())),
  segmentIds: s.optionalNullable(s.array(s.string())),
  version: s.optional(s.number()),
  taxIds: s.optional(s.lazy(() => customerTaxIdsSchema)),
  _keysMap: {
    createdAt: "created_at",
    updatedAt: "updated_at",
    givenName: "given_name",
    familyName: "family_name",
    companyName: "company_name",
    emailAddress: "email_address",
    phoneNumber: "phone_number",
    referenceId: "reference_id",
    creationSource: "creation_source",
    groupIds: "group_ids",
    segmentIds: "segment_ids",
    taxIds: "tax_ids",
  },
});
