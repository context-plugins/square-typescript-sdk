import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the method used to create the customer profile. */
export const CustomerCreationSource = {
  /**
   * The default creation source. This source is typically used for backward/future compatibility
   * when the original source of a customer profile is unrecognized. For example, when older clients
   * do not support newer source types.
   */
  Other: "OTHER",
  /** The customer profile was created automatically when an appointment was scheduled. */
  Appointments: "APPOINTMENTS",
  /**
   * The customer profile was created automatically when a coupon was issued using Square Point of
   * Sale.
   */
  Coupon: "COUPON",
  /** The customer profile was restored through Square's deletion recovery process. */
  DeletionRecovery: "DELETION_RECOVERY",
  /**
   * The customer profile was created manually through Square Seller Dashboard or the Point of Sale
   * application.
   */
  Directory: "DIRECTORY",
  /**
   * The customer profile was created automatically when a gift card was issued using Square Point
   * of Sale. Customer profiles are created for both the buyer and the recipient of the gift card.
   */
  Egifting: "EGIFTING",
  /**
   * The customer profile was created through Square Point of Sale when signing up for marketing
   * emails during checkout.
   */
  EmailCollection: "EMAIL_COLLECTION",
  /**
   * The customer profile was created automatically when providing feedback through a digital
   * receipt.
   */
  Feedback: "FEEDBACK",
  /**
   * The customer profile was created automatically when importing customer data through Square
   * Seller Dashboard.
   */
  Import: "IMPORT",
  /** The customer profile was created automatically during an invoice payment. */
  Invoices: "INVOICES",
  /**
   * The customer profile was created automatically when customers provide a phone number for
   * loyalty reward programs during checkout.
   */
  Loyalty: "LOYALTY",
  /**
   * The customer profile was created as the result of a campaign managed through Square’s Facebook
   * integration.
   */
  Marketing: "MARKETING",
  /**
   * The customer profile was created as the result of explicitly merging multiple customer profiles
   * through the Square Seller Dashboard or the Point of Sale application.
   */
  Merge: "MERGE",
  /** The customer profile was created through Square's Online Store solution (legacy service). */
  OnlineStore: "ONLINE_STORE",
  /**
   * The customer profile was created automatically as the result of a successful transaction that
   * did not explicitly link to an existing customer profile.
   */
  InstantProfile: "INSTANT_PROFILE",
  /** The customer profile was created through Square's Virtual Terminal. */
  Terminal: "TERMINAL",
  /** The customer profile was created through a Square API call. */
  ThirdParty: "THIRD_PARTY",
  /**
   * The customer profile was created by a third-party product and imported through an official
   * integration.
   */
  ThirdPartyImport: "THIRD_PARTY_IMPORT",
  /** The customer profile was restored through Square's unmerge recovery process. */
  UnmergeRecovery: "UNMERGE_RECOVERY",
} as const;
export type CustomerCreationSource =
  | (typeof CustomerCreationSource)[keyof typeof CustomerCreationSource]
  | (string & {});

export const customerCreationSourceSchema: EnumSchema<CustomerCreationSource> =
  s.enumOf<CustomerCreationSource>(CustomerCreationSource);
