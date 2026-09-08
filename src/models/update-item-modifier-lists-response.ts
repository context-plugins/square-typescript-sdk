import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type UpdateItemModifierListsResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /**
   * The database
   * [timestamp](https://developer.squareup.com/docs/build-basics/common-data-types/working-with-dates)
   * of this update in RFC 3339 format, e.g., `2016-09-04T23:59:33.123Z`.
   */
  updatedAt?: string;
};

export const updateItemModifierListsResponseSchema: Schema<UpdateItemModifierListsResponse> =
  s.object<UpdateItemModifierListsResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    updatedAt: s.optional(s.string()),
    _keysMap: {
      updatedAt: "updated_at",
    },
  });
