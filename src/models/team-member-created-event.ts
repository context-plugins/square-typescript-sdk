import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  teamMemberCreatedEventDataSchema,
  type TeamMemberCreatedEventData,
} from "./team-member-created-event-data.js";

/** Published when a Team Member is created. */
export type TeamMemberCreatedEvent = {
  /** The ID of the target merchant associated with the event. */
  merchantId?: string | null;
  /** The type of event this represents, `"team_member.created"`. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** Timestamp of when the event was created, in RFC 3339 format. */
  createdAt?: string;
  data?: TeamMemberCreatedEventData;
};

export const teamMemberCreatedEventSchema: Schema<TeamMemberCreatedEvent> = s.object<TeamMemberCreatedEvent>({
  merchantId: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
  eventId: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  data: s.optional(s.lazy(() => teamMemberCreatedEventDataSchema)),
  _keysMap: {
    merchantId: "merchant_id",
    eventId: "event_id",
    createdAt: "created_at",
  },
});
