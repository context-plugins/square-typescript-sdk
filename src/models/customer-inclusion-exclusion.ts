import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether customers should be included in, or excluded from, the result set when they
 * match the filtering criteria.
 */
export const CustomerInclusionExclusion = {
  /** Customers should be included in the result set when they match the filtering criteria. */
  Include: "INCLUDE",
  /** Customers should be excluded from the result set when they match the filtering criteria. */
  Exclude: "EXCLUDE",
} as const;
export type CustomerInclusionExclusion =
  | (typeof CustomerInclusionExclusion)[keyof typeof CustomerInclusionExclusion]
  | (string & {});

export const customerInclusionExclusionSchema: EnumSchema<CustomerInclusionExclusion> =
  s.enumOf<CustomerInclusionExclusion>(CustomerInclusionExclusion);
