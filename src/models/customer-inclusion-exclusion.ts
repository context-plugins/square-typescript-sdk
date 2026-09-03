import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CustomerInclusionExclusion = {
  Include: "INCLUDE",
  Exclude: "EXCLUDE",
} as const;
export type CustomerInclusionExclusion =
  | (typeof CustomerInclusionExclusion)[keyof typeof CustomerInclusionExclusion]
  | (string & {});

export const customerInclusionExclusionSchema: EnumSchema<CustomerInclusionExclusion> =
  s.enumOf<CustomerInclusionExclusion>(CustomerInclusionExclusion);
