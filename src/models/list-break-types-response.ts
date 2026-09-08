import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { breakTypeSchema, type BreakType } from "./break-type.js";
import { errorSchema, type Error } from "./error.js";

/**
 * The response to a request for a set of `BreakType` objects. The response contains the requested
 * `BreakType` objects and might contain a set of `Error` objects if the request resulted in errors.
 */
export type ListBreakTypesResponse = {
  /** A page of `BreakType` results. */
  breakTypes?: BreakType[];
  /** The value supplied in the subsequent request to fetch the next page of `BreakType` results. */
  cursor?: string;
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const listBreakTypesResponseSchema: Schema<ListBreakTypesResponse> = s.object<ListBreakTypesResponse>({
  breakTypes: s.optional(s.array(s.lazy(() => breakTypeSchema))),
  cursor: s.optional(s.string()),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  _keysMap: {
    breakTypes: "break_types",
  },
});
