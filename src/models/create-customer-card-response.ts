import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardSchema, type Card } from "./card.js";
import { errorSchema, type Error } from "./error.js";

export type CreateCustomerCardResponse = {
  errors?: Error[];
  card?: Card;
};

export const createCustomerCardResponseSchema: Schema<CreateCustomerCardResponse> =
  s.object<CreateCustomerCardResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    card: s.optional(s.lazy(() => cardSchema)),
  });
