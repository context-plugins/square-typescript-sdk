import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ListPaymentRefundsRequestSortField = {
  CreatedAt: "CREATED_AT",
  UpdatedAt: "UPDATED_AT",
} as const;
export type ListPaymentRefundsRequestSortField =
  | (typeof ListPaymentRefundsRequestSortField)[keyof typeof ListPaymentRefundsRequestSortField]
  | (string & {});

export const listPaymentRefundsRequestSortFieldSchema: EnumSchema<ListPaymentRefundsRequestSortField> =
  s.enumOf<ListPaymentRefundsRequestSortField>(ListPaymentRefundsRequestSortField);
