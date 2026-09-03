import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  teamMemberUpdatedEventObjectSchema,
  type TeamMemberUpdatedEventObject,
} from "./team-member-updated-event-object.js";

export type TeamMemberUpdatedEventData = {
  type?: string | null;
  id?: string;
  object?: TeamMemberUpdatedEventObject;
};

export const teamMemberUpdatedEventDataSchema: Schema<TeamMemberUpdatedEventData> =
  s.object<TeamMemberUpdatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => teamMemberUpdatedEventObjectSchema)),
  });
