import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specifies customer attributes as the sort key to customer profiles returned from a search. */
export const CustomerSortField = {
  /**
   * Use the default sort key. By default, customers are sorted alphanumerically by concatenating
   * their `given_name` and `family_name`. If neither name field is set, string comparison is
   * performed using one of the remaining fields in the following order: `company_name`, `email`,
   * `phone_number`.
   */
  Default: "DEFAULT",
  /** Use the creation date attribute (`created_at`) of customer profiles as the sort key. */
  CreatedAt: "CREATED_AT",
} as const;
export type CustomerSortField = (typeof CustomerSortField)[keyof typeof CustomerSortField] | (string & {});

export const customerSortFieldSchema: EnumSchema<CustomerSortField> =
  s.enumOf<CustomerSortField>(CustomerSortField);
