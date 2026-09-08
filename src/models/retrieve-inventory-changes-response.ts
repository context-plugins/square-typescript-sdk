import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { inventoryChangeSchema, type InventoryChange } from "./inventory-change.js";

export type RetrieveInventoryChangesResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** The set of inventory changes for the requested object and locations. */
  changes?: InventoryChange[];
  /**
   * The pagination cursor to be used in a subsequent request. If unset, this is the final response.
   *
   * See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide
   * for more information.
   */
  cursor?: string;
};

export const retrieveInventoryChangesResponseSchema: Schema<RetrieveInventoryChangesResponse> =
  s.object<RetrieveInventoryChangesResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    changes: s.optional(s.array(s.lazy(() => inventoryChangeSchema))),
    cursor: s.optional(s.string()),
  });
