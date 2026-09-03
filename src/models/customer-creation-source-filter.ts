import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customerCreationSourceSchema, type CustomerCreationSource } from "./customer-creation-source.js";
import {
  customerInclusionExclusionSchema,
  type CustomerInclusionExclusion,
} from "./customer-inclusion-exclusion.js";

export type CustomerCreationSourceFilter = {
  values?: CustomerCreationSource[] | null;
  rule?: CustomerInclusionExclusion;
};

export const customerCreationSourceFilterSchema: Schema<CustomerCreationSourceFilter> =
  s.object<CustomerCreationSourceFilter>({
    values: s.optionalNullable(s.array(s.lazy(() => customerCreationSourceSchema))),
    rule: s.optional(s.lazy(() => customerInclusionExclusionSchema)),
  });
