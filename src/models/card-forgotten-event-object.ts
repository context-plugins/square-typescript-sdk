import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardForgottenEventCardSchema, type CardForgottenEventCard } from "./card-forgotten-event-card.js";

export type CardForgottenEventObject = {
  card?: CardForgottenEventCard;
};

export const cardForgottenEventObjectSchema: Schema<CardForgottenEventObject> =
  s.object<CardForgottenEventObject>({
    card: s.optional(s.lazy(() => cardForgottenEventCardSchema)),
  });
