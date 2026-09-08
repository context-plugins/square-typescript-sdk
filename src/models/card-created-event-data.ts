import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardCreatedEventObjectSchema, type CardCreatedEventObject } from "./card-created-event-object.js";

export type CardCreatedEventData = {
  /** The type of the event data object. The value is `"card"`. */
  type?: string | null;
  /** The ID of the event data object. */
  id?: string;
  object?: CardCreatedEventObject;
};

export const cardCreatedEventDataSchema: Schema<CardCreatedEventData> = s.object<CardCreatedEventData>({
  type: s.optionalNullable(s.string()),
  id: s.optional(s.string()),
  object: s.optional(s.lazy(() => cardCreatedEventObjectSchema)),
});
