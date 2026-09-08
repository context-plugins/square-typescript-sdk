import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardUpdatedEventObjectSchema, type CardUpdatedEventObject } from "./card-updated-event-object.js";

export type CardUpdatedEventData = {
  /** The type of the event data object. The value is `"card"`. */
  type?: string | null;
  /** The ID of the event data object. */
  id?: string;
  object?: CardUpdatedEventObject;
};

export const cardUpdatedEventDataSchema: Schema<CardUpdatedEventData> = s.object<CardUpdatedEventData>({
  type: s.optionalNullable(s.string()),
  id: s.optional(s.string()),
  object: s.optional(s.lazy(() => cardUpdatedEventObjectSchema)),
});
