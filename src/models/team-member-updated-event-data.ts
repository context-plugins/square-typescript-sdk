import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  teamMemberUpdatedEventObjectSchema,
  type TeamMemberUpdatedEventObject,
} from "./team-member-updated-event-object.js";

export type TeamMemberUpdatedEventData = {
  /** Name of the affected object’s type, `"team_member"`. */
  type?: string | null;
  /** ID of the affected team member. */
  id?: string;
  object?: TeamMemberUpdatedEventObject;
};

export const teamMemberUpdatedEventDataSchema: Schema<TeamMemberUpdatedEventData> =
  s.object<TeamMemberUpdatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => teamMemberUpdatedEventObjectSchema)),
  });
