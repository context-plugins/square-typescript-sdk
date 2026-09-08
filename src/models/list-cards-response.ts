import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardSchema, type Card } from "./card.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Defines the fields that are included in the response body of a request to the
 * [ListCards](api-endpoint:Cards-ListCards) endpoint.
 *
 * Note: if there are errors processing the request, the card field will not be present.
 */
export type ListCardsResponse = {
  /** Information on errors encountered during the request. */
  errors?: Error[];
  /** The requested list of `Card`s. */
  cards?: Card[];
  /**
   * The pagination cursor to be used in a subsequent request. If empty, this is the final response.
   *
   * See
   * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination)
   * for more information.
   */
  cursor?: string;
};

export const listCardsResponseSchema: Schema<ListCardsResponse> = s.object<ListCardsResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  cards: s.optional(s.array(s.lazy(() => cardSchema))),
  cursor: s.optional(s.string()),
});
