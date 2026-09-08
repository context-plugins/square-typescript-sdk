import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines an appointment segment of a booking. */
export type AppointmentSegment = {
  /** The time span in minutes of an appointment segment. */
  durationMinutes?: number | null;
  /**
   * The ID of the [CatalogItemVariation](entity:CatalogItemVariation) object representing the
   * service booked in this segment.
   */
  serviceVariationId?: string | null;
  /**
   * The ID of the [TeamMember](entity:TeamMember) object representing the team member booked in
   * this segment.
   */
  teamMemberId: string;
  /** The current version of the item variation representing the service booked in this segment. */
  serviceVariationVersion?: number | null;
  /** Time between the end of this segment and the beginning of the subsequent segment. */
  intermissionMinutes?: number;
  /**
   * Whether the customer accepts any team member, instead of a specific one, to serve this segment.
   */
  anyTeamMember?: boolean;
  /** The IDs of the seller-accessible resources used for this appointment segment. */
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
