import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ListPaymentsRequestSortField = {
  CreatedAt: "CREATED_AT",
  OfflineCreatedAt: "OFFLINE_CREATED_AT",
  UpdatedAt: "UPDATED_AT",
} as const;
export type ListPaymentsRequestSortField =
  | (typeof ListPaymentsRequestSortField)[keyof typeof ListPaymentsRequestSortField]
  | (string & {});

export const listPaymentsRequestSortFieldSchema: EnumSchema<ListPaymentsRequestSortField> =
  s.enumOf<ListPaymentsRequestSortField>(ListPaymentsRequestSortField);
