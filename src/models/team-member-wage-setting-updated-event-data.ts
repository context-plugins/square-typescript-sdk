import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  teamMemberWageSettingUpdatedEventObjectSchema,
  type TeamMemberWageSettingUpdatedEventObject,
} from "./team-member-wage-setting-updated-event-object.js";

export type TeamMemberWageSettingUpdatedEventData = {
  /** Name of the affected object’s type, `"wage_setting"`. */
  type?: string | null;
  /** ID of the updated team member wage setting. */
  id?: string;
  object?: TeamMemberWageSettingUpdatedEventObject;
};

export const teamMemberWageSettingUpdatedEventDataSchema: Schema<TeamMemberWageSettingUpdatedEventData> =
  s.object<TeamMemberWageSettingUpdatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => teamMemberWageSettingUpdatedEventObjectSchema)),
  });
