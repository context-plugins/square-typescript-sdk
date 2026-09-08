import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  teamMemberUpdatedEventDataSchema,
  type TeamMemberUpdatedEventData,
} from "./team-member-updated-event-data.js";

/** Published when a Team Member is updated. */
export type TeamMemberUpdatedEvent = {
  /** The ID of the target merchant associated with the event. */
  merchantId?: string | null;
  /** The type of event this represents, `"team_member.updated"`. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** Timestamp of when the event was created, in RFC 3339 format. */
  createdAt?: string;
  data?: TeamMemberUpdatedEventData;
};

export const teamMemberUpdatedEventSchema: Schema<TeamMemberUpdatedEvent> = s.object<TeamMemberUpdatedEvent>({
  merchantId: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  eventId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  data: s.optional(s.lazy(() => teamMemberUpdatedEventDataSchema)),
  _keysMap: {
    merchantId: "merchant_id",
    eventId: "event_id",
    createdAt: "created_at",
  },
});
