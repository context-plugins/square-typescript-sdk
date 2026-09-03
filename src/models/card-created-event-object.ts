import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardSchema, type Card } from "./card.js";

export type CardCreatedEventObject = {
  card?: Card;
};

export const cardCreatedEventObjectSchema: Schema<CardCreatedEventObject> = s.object<CardCreatedEventObject>({
  card: s.optional(s.lazy(() => cardSchema)),
});
