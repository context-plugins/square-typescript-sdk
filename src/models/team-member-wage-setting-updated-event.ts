import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  teamMemberWageSettingUpdatedEventDataSchema,
  type TeamMemberWageSettingUpdatedEventData,
} from "./team-member-wage-setting-updated-event-data.js";

export type TeamMemberWageSettingUpdatedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
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
