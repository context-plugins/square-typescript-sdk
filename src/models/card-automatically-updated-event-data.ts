import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  cardAutomaticallyUpdatedEventObjectSchema,
  type CardAutomaticallyUpdatedEventObject,
} from "./card-automatically-updated-event-object.js";

export type CardAutomaticallyUpdatedEventData = {
  type?: string | null;
  id?: string;
  object?: CardAutomaticallyUpdatedEventObject;
};

export const cardAutomaticallyUpdatedEventDataSchema: Schema<CardAutomaticallyUpdatedEventData> =
  s.object<CardAutomaticallyUpdatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => cardAutomaticallyUpdatedEventObjectSchema)),
  });
