import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardSchema, type Card } from "./card.js";

export type CardUpdatedEventObject = {
  card?: Card;
};

export const cardUpdatedEventObjectSchema: Schema<CardUpdatedEventObject> = s.object<CardUpdatedEventObject>({
  card: s.optional(s.lazy(() => cardSchema)),
});
