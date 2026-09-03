import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VisibilityFilter = {
  All: "ALL",
  Read: "READ",
  ReadWrite: "READ_WRITE",
} as const;
export type VisibilityFilter = (typeof VisibilityFilter)[keyof typeof VisibilityFilter] | (string & {});

export const visibilityFilterSchema: EnumSchema<VisibilityFilter> =
  s.enumOf<VisibilityFilter>(VisibilityFilter);
