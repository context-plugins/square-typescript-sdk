import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerCreationSourceSchema, type CustomerCreationSource } from "./customer-creation-source.js";
import {
  customerInclusionExclusionSchema,
  type CustomerInclusionExclusion,
} from "./customer-inclusion-exclusion.js";

/**
 * The creation source filter.
 *
 * If one or more creation sources are set, customer profiles are included in, or excluded from, the
 * result if they match at least one of the filter criteria.
 */
export type CustomerCreationSourceFilter = {
  /**
   * The list of creation sources used as filtering criteria. See
   * [CustomerCreationSource](#type-customercreationsource) for possible values
   */
  values?: CustomerCreationSource[] | null;
  /**
   * Indicates whether customers should be included in, or excluded from, the result set when they
   * match the filtering criteria.
   */
  rule?: CustomerInclusionExclusion;
};

export const customerCreationSourceFilterSchema: Schema<CustomerCreationSourceFilter> =
  s.object<CustomerCreationSourceFilter>({
    values: s.optionalNullable(s.array(s.lazy(() => customerCreationSourceSchema))),
    rule: s.optional(s.lazy(() => customerInclusionExclusionSchema)),
  });
