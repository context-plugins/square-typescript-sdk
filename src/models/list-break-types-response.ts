import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { breakTypeSchema, type BreakType } from "./break-type.js";
import { errorSchema, type Error } from "./error.js";

export type ListBreakTypesResponse = {
  breakTypes?: BreakType[];
  cursor?: string;
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
