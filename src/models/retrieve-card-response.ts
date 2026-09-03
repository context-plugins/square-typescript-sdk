import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardSchema, type Card } from "./card.js";
import { errorSchema, type Error } from "./error.js";

export type RetrieveCardResponse = {
  errors?: Error[];
  card?: Card;
};

export const retrieveCardResponseSchema: Schema<RetrieveCardResponse> = s.object<RetrieveCardResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  card: s.optional(s.lazy(() => cardSchema)),
});
