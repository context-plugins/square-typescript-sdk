import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EventData = {
  /** The name of the affected object’s type. */
  type?: string | null;
  /** The ID of the affected object. */
  id?: string;
  /** This is true if the affected object has been deleted; otherwise, it's absent. */
  deleted?: boolean | null;
  /**
   * An object containing fields and values relevant to the event. It is absent if the affected
   * object has been deleted.
   */
  object?: Record<string, unknown> | null;
};

export const eventDataSchema: Schema<EventData> = s.object<EventData>({
  type: s.optionalNullable(s.string()),
  id: s.optional(s.string()),
  deleted: s.optionalNullable(s.boolean()),
  object: s.optionalNullable(s.record(s.string(), s.unknown())),
});
