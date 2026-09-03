import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  teamMemberCreatedEventObjectSchema,
  type TeamMemberCreatedEventObject,
} from "./team-member-created-event-object.js";

export type TeamMemberCreatedEventData = {
  type?: string | null;
  id?: string;
  object?: TeamMemberCreatedEventObject;
};

export const teamMemberCreatedEventDataSchema: Schema<TeamMemberCreatedEventData> =
  s.object<TeamMemberCreatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => teamMemberCreatedEventObjectSchema)),
  });
