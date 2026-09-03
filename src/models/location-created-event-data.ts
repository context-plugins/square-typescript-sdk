import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LocationCreatedEventData = {
  type?: string | null;
  id?: string;
};

export const locationCreatedEventDataSchema: Schema<LocationCreatedEventData> =
  s.object<LocationCreatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
  });
