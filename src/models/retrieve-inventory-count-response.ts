import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { inventoryCountSchema, type InventoryCount } from "./inventory-count.js";

export type RetrieveInventoryCountResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** The current calculated inventory counts for the requested object and locations. */
  counts?: InventoryCount[];
  /**
   * The pagination cursor to be used in a subsequent request. If unset, this is the final response.
   *
   * See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide
   * for more information.
   */
  cursor?: string;
};

export const retrieveInventoryCountResponseSchema: Schema<RetrieveInventoryCountResponse> =
  s.object<RetrieveInventoryCountResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    counts: s.optional(s.array(s.lazy(() => inventoryCountSchema))),
    cursor: s.optional(s.string()),
  });
