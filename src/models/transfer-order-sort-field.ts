import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransferOrderSortField = {
  CreatedAt: "CREATED_AT",
  UpdatedAt: "UPDATED_AT",
} as const;
export type TransferOrderSortField =
  | (typeof TransferOrderSortField)[keyof typeof TransferOrderSortField]
  | (string & {});

export const transferOrderSortFieldSchema: EnumSchema<TransferOrderSortField> =
  s.enumOf<TransferOrderSortField>(TransferOrderSortField);
