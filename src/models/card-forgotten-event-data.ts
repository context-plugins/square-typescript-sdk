import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  cardForgottenEventObjectSchema,
  type CardForgottenEventObject,
} from "./card-forgotten-event-object.js";

export type CardForgottenEventData = {
  /** The type of the event data object. The value is `"card"`. */
  type?: string | null;
  /** The ID of the event data object. */
  id?: string;
  object?: CardForgottenEventObject;
};

export const cardForgottenEventDataSchema: Schema<CardForgottenEventData> = s.object<CardForgottenEventData>({
  type: s.optionalNullable(s.string()),
  id: s.optional(s.string()),
  object: s.optional(s.lazy(() => cardForgottenEventObjectSchema)),
});
