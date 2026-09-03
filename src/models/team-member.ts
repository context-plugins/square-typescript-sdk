import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  teamMemberAssignedLocationsSchema,
  type TeamMemberAssignedLocations,
} from "./team-member-assigned-locations.js";
import { teamMemberStatusSchema, type TeamMemberStatus } from "./team-member-status.js";
import { wageSettingSchema, type WageSetting } from "./wage-setting.js";

export type TeamMember = {
  id?: string;
  referenceId?: string | null;
  isOwner?: boolean;
  status?: TeamMemberStatus;
  givenName?: string | null;
  familyName?: string | null;
  emailAddress?: string | null;
  phoneNumber?: string | null;
  createdAt?: string;
  updatedAt?: string;
  assignedLocations?: TeamMemberAssignedLocations;
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
