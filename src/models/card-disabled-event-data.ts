import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardDisabledEventObjectSchema, type CardDisabledEventObject } from "./card-disabled-event-object.js";

export type CardDisabledEventData = {
  /** The type of the event data object. The value is `"card"`. */
  type?: string | null;
  /** The ID of the event data object. */
  id?: string;
  object?: CardDisabledEventObject;
};

export const cardDisabledEventDataSchema: Schema<CardDisabledEventData> = s.object<CardDisabledEventData>({
  type: s.optionalNullable(s.string()),
  id: s.optional(s.string()),
  object: s.optional(s.lazy(() => cardDisabledEventObjectSchema)),
});
