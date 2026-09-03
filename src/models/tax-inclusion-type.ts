import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TaxInclusionType = {
  Additive: "ADDITIVE",
  Inclusive: "INCLUSIVE",
} as const;
export type TaxInclusionType = (typeof TaxInclusionType)[keyof typeof TaxInclusionType] | (string & {});

export const taxInclusionTypeSchema: EnumSchema<TaxInclusionType> =
  s.enumOf<TaxInclusionType>(TaxInclusionType);
