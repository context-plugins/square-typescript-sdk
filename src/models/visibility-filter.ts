import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Enumeration of visibility-filter values used to set the ability to view custom attributes or
 * custom attribute definitions.
 */
export const VisibilityFilter = {
  /** All custom attributes or custom attribute definitions. */
  All: "ALL",
  /**
   * All custom attributes or custom attribute definitions with the `visibility` field set to
   * `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.
   */
  Read: "READ",
  /**
   * All custom attributes or custom attribute definitions with the `visibility` field set to
   * `VISIBILITY_READ_WRITE_VALUES`.
   */
  ReadWrite: "READ_WRITE",
} as const;
export type VisibilityFilter = (typeof VisibilityFilter)[keyof typeof VisibilityFilter] | (string & {});

export const visibilityFilterSchema: EnumSchema<VisibilityFilter> =
  s.enumOf<VisibilityFilter>(VisibilityFilter);
