import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  teamMemberCreatedEventDataSchema,
  type TeamMemberCreatedEventData,
} from "./team-member-created-event-data.js";

export type TeamMemberCreatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
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
