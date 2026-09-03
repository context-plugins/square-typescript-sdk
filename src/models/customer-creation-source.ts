import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CustomerCreationSource = {
  Other: "OTHER",
  Appointments: "APPOINTMENTS",
  Coupon: "COUPON",
  DeletionRecovery: "DELETION_RECOVERY",
  Directory: "DIRECTORY",
  Egifting: "EGIFTING",
  EmailCollection: "EMAIL_COLLECTION",
  Feedback: "FEEDBACK",
  Import: "IMPORT",
  Invoices: "INVOICES",
  Loyalty: "LOYALTY",
  Marketing: "MARKETING",
  Merge: "MERGE",
  OnlineStore: "ONLINE_STORE",
  InstantProfile: "INSTANT_PROFILE",
  Terminal: "TERMINAL",
  ThirdParty: "THIRD_PARTY",
  ThirdPartyImport: "THIRD_PARTY_IMPORT",
  UnmergeRecovery: "UNMERGE_RECOVERY",
} as const;
export type CustomerCreationSource =
  | (typeof CustomerCreationSource)[keyof typeof CustomerCreationSource]
  | (string & {});

export const customerCreationSourceSchema: EnumSchema<CustomerCreationSource> =
  s.enumOf<CustomerCreationSource>(CustomerCreationSource);
