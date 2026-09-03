import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardSchema, type Card } from "./card.js";

export type CardDisabledEventObject = {
  card?: Card;
};

export const cardDisabledEventObjectSchema: Schema<CardDisabledEventObject> =
  s.object<CardDisabledEventObject>({
    card: s.optional(s.lazy(() => cardSchema)),
  });
