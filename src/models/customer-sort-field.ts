import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CustomerSortField = {
  Default: "DEFAULT",
  CreatedAt: "CREATED_AT",
} as const;
export type CustomerSortField = (typeof CustomerSortField)[keyof typeof CustomerSortField] | (string & {});

export const customerSortFieldSchema: EnumSchema<CustomerSortField> =
  s.enumOf<CustomerSortField>(CustomerSortField);
