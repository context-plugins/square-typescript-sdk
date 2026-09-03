import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardSchema, type Card } from "./card.js";

export type CardAutomaticallyUpdatedEventObject = {
  card?: Card;
};

export const cardAutomaticallyUpdatedEventObjectSchema: Schema<CardAutomaticallyUpdatedEventObject> =
  s.object<CardAutomaticallyUpdatedEventObject>({
    card: s.optional(s.lazy(() => cardSchema)),
  });
