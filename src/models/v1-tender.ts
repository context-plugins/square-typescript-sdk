import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { v1MoneySchema, type V1Money } from "./v1-money.js";
import { v1TenderCardBrandSchema, type V1TenderCardBrand } from "./v1-tender-card-brand.js";
import { v1TenderEntryMethodSchema, type V1TenderEntryMethod } from "./v1-tender-entry-method.js";
import { v1TenderTypeSchema, type V1TenderType } from "./v1-tender-type.js";

export type V1Tender = {
  id?: string;
  type?: V1TenderType;
  name?: string | null;
  employeeId?: string | null;
  receiptUrl?: string | null;
  cardBrand?: V1TenderCardBrand;
  panSuffix?: string | null;
  entryMethod?: V1TenderEntryMethod;
  paymentNote?: string | null;
  totalMoney?: V1Money;
  tenderedMoney?: V1Money;
  tenderedAt?: string | null;
  settledAt?: string | null;
  changeBackMoney?: V1Money;
  refundedMoney?: V1Money;
  isExchange?: boolean | null;
};

export const v1TenderSchema: Schema<V1Tender> = s.object<V1Tender>({
  id: s.optional(s.string()),
  type: s.optional(s.lazy(() => v1TenderTypeSchema)),
  name: s.optionalNullable(s.string()),
  employeeId: s.optionalNullable(s.string()),
  receiptUrl: s.optionalNullable(s.string()),
  cardBrand: s.optional(s.lazy(() => v1TenderCardBrandSchema)),
  panSuffix: s.optionalNullable(s.string()),
  entryMethod: s.optional(s.lazy(() => v1TenderEntryMethodSchema)),
  paymentNote: s.optionalNullable(s.string()),
  totalMoney: s.optional(s.lazy(() => v1MoneySchema)),
  tenderedMoney: s.optional(s.lazy(() => v1MoneySchema)),
  tenderedAt: s.optionalNullable(s.string()),
  settledAt: s.optionalNullable(s.string()),
  changeBackMoney: s.optional(s.lazy(() => v1MoneySchema)),
  refundedMoney: s.optional(s.lazy(() => v1MoneySchema)),
  isExchange: s.optionalNullable(s.boolean()),
  _keysMap: {
    employeeId: "employee_id",
    receiptUrl: "receipt_url",
    cardBrand: "card_brand",
    panSuffix: "pan_suffix",
    entryMethod: "entry_method",
    paymentNote: "payment_note",
    totalMoney: "total_money",
    tenderedMoney: "tendered_money",
    tenderedAt: "tendered_at",
    settledAt: "settled_at",
    changeBackMoney: "change_back_money",
    refundedMoney: "refunded_money",
    isExchange: "is_exchange",
  },
});
