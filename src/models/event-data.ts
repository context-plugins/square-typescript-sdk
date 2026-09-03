import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EventData = {
  type?: string | null;
  id?: string;
  deleted?: boolean | null;
  object?: Record<string, unknown> | null;
};

export const eventDataSchema: Schema<EventData> = s.object<EventData>({
  type: s.optionalNullable(s.string()),
  id: s.optional(s.string()),
  deleted: s.optionalNullable(s.boolean()),
  object: s.optionalNullable(s.record(s.string(), s.unknown())),
});
