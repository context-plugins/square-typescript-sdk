import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LocationUpdatedEventData = {
  /** Name of the affected object’s type, `"location"`. */
  type?: string | null;
  /** ID of the updated [Location](entity:Location). */
  id?: string;
};

export const locationUpdatedEventDataSchema: Schema<LocationUpdatedEventData> =
  s.object<LocationUpdatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
  });
