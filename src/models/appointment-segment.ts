import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AppointmentSegment = {
  durationMinutes?: number | null;
  serviceVariationId?: string | null;
  teamMemberId: string;
  serviceVariationVersion?: number | null;
  intermissionMinutes?: number;
  anyTeamMember?: boolean;
  resourceIds?: string[];
};

export const appointmentSegmentSchema: Schema<AppointmentSegment> = s.object<AppointmentSegment>({
  durationMinutes: s.optionalNullable(s.number()),
  serviceVariationId: s.optionalNullable(s.string()),
  teamMemberId: s.string(),
  serviceVariationVersion: s.optionalNullable(s.number()),
  intermissionMinutes: s.optional(s.number()),
  anyTeamMember: s.optional(s.boolean()),
  resourceIds: s.optional(s.array(s.string())),
  _keysMap: {
    durationMinutes: "duration_minutes",
    serviceVariationId: "service_variation_id",
    teamMemberId: "team_member_id",
    serviceVariationVersion: "service_variation_version",
    intermissionMinutes: "intermission_minutes",
    anyTeamMember: "any_team_member",
    resourceIds: "resource_ids",
  },
});
