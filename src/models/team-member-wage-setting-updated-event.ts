import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  teamMemberWageSettingUpdatedEventDataSchema,
  type TeamMemberWageSettingUpdatedEventData,
} from "./team-member-wage-setting-updated-event-data.js";

/** Published when a Wage Setting is updated. */
export type TeamMemberWageSettingUpdatedEvent = {
  /** The ID of the target merchant associated with the event. */
  merchantId?: string | null;
  /** The type of event this represents, `"team_member.wage_setting.updated"`. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** Timestamp of when the event was created, in RFC 3339 format. */
  createdAt?: string;
  data?: TeamMemberWageSettingUpdatedEventData;
};

export const teamMemberWageSettingUpdatedEventSchema: Schema<TeamMemberWageSettingUpdatedEvent> =
  s.object<TeamMemberWageSettingUpdatedEvent>({
    merchantId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => teamMemberWageSettingUpdatedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
