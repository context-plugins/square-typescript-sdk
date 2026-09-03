import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardSchema, type Card } from "./card.js";
import { errorSchema, type Error } from "./error.js";

export type ListCardsResponse = {
  errors?: Error[];
  cards?: Card[];
  cursor?: string;
};

export const listCardsResponseSchema: Schema<ListCardsResponse> = s.object<ListCardsResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  cards: s.optional(s.array(s.lazy(() => cardSchema))),
  cursor: s.optional(s.string()),
});
