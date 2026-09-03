import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardCreatedEventObjectSchema, type CardCreatedEventObject } from "./card-created-event-object.js";

export type CardCreatedEventData = {
  type?: string | null;
  id?: string;
  object?: CardCreatedEventObject;
};

export const cardCreatedEventDataSchema: Schema<CardCreatedEventData> = s.object<CardCreatedEventData>({
  type: s.optionalNullable(s.string()),
  id: s.optional(s.string()),
  object: s.optional(s.lazy(() => cardCreatedEventObjectSchema)),
});
