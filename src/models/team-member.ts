import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  teamMemberAssignedLocationsSchema,
  type TeamMemberAssignedLocations,
} from "./team-member-assigned-locations.js";
import { teamMemberStatusSchema, type TeamMemberStatus } from "./team-member-status.js";
import { wageSettingSchema, type WageSetting } from "./wage-setting.js";

/** A record representing an individual team member for a business. */
export type TeamMember = {
  /** The unique ID for the team member. */
  id?: string;
  /** A second ID used to associate the team member with an entity in another system. */
  referenceId?: string | null;
  /** Whether the team member is the owner of the Square account. */
  isOwner?: boolean;
  /** Enumerates the possible statuses the team member can have within a business. */
  status?: TeamMemberStatus;
  /** The given name (that is, the first name) associated with the team member. */
  givenName?: string | null;
  /** The family name (that is, the last name) associated with the team member. */
  familyName?: string | null;
  /**
   * The email address associated with the team member. After accepting the invitation from Square,
   * only the team member can change this value.
   */
  emailAddress?: string | null;
  /**
   * The team member's phone number, in E.164 format. For example: +14155552671 - the country code
   * is 1 for US +551155256325 - the country code is 55 for BR
   */
  phoneNumber?: string | null;
  /** The timestamp when the team member was created, in RFC 3339 format. */
  createdAt?: string;
  /** The timestamp when the team member was last updated, in RFC 3339 format. */
  updatedAt?: string;
  /** An object that represents a team member's assignment to locations. */
  assignedLocations?: TeamMemberAssignedLocations;
  /**
   * Represents information about the overtime exemption status, job assignments, and compensation
   * for a [team member](entity:TeamMember).
   */
  wageSetting?: WageSetting;
};

export const teamMemberSchema: Schema<TeamMember> = s.object<TeamMember>({
  id: s.optional(s.string()),
  referenceId: s.optionalNullable(s.string()),
  isOwner: s.optional(s.boolean()),
  status: s.optional(s.lazy(() => teamMemberStatusSchema)),
  givenName: s.optionalNullable(s.string()),
  familyName: s.optionalNullable(s.string()),
  emailAddress: s.optionalNullable(s.string()),
  phoneNumber: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  assignedLocations: s.optional(s.lazy(() => teamMemberAssignedLocationsSchema)),
  wageSetting: s.optional(s.lazy(() => wageSettingSchema)),
  _keysMap: {
    referenceId: "reference_id",
    isOwner: "is_owner",
    givenName: "given_name",
    familyName: "family_name",
    emailAddress: "email_address",
    phoneNumber: "phone_number",
    createdAt: "created_at",
    updatedAt: "updated_at",
    assignedLocations: "assigned_locations",
    wageSetting: "wage_setting",
  },
});
