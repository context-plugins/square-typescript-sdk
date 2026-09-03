import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  teamMemberUpdatedEventDataSchema,
  type TeamMemberUpdatedEventData,
} from "./team-member-updated-event-data.js";

export type TeamMemberUpdatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
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
