import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";
import {
  orderLineItemDiscountScopeSchema,
  type OrderLineItemDiscountScope,
} from "./order-line-item-discount-scope.js";
import {
  orderLineItemDiscountTypeSchema,
  type OrderLineItemDiscountType,
} from "./order-line-item-discount-type.js";

export type OrderReturnDiscount = {
  uid?: string | null;
  sourceDiscountUid?: string | null;
  catalogObjectId?: string | null;
  catalogVersion?: number | null;
  name?: string | null;
  type?: OrderLineItemDiscountType;
  percentage?: string | null;
  amountMoney?: Money;
  appliedMoney?: Money;
  scope?: OrderLineItemDiscountScope;
};

export const orderReturnDiscountSchema: Schema<OrderReturnDiscount> = s.object<OrderReturnDiscount>({
  uid: s.optionalNullable(s.string()),
  sourceDiscountUid: s.optionalNullable(s.string()),
  catalogObjectId: s.optionalNullable(s.string()),
  catalogVersion: s.optionalNullable(s.number()),
  name: s.optionalNullable(s.string()),
  type: s.optional(s.lazy(() => orderLineItemDiscountTypeSchema)),
  percentage: s.optionalNullable(s.string()),
  amountMoney: s.optional(s.lazy(() => moneySchema)),
  appliedMoney: s.optional(s.lazy(() => moneySchema)),
  scope: s.optional(s.lazy(() => orderLineItemDiscountScopeSchema)),
  _keysMap: {
    sourceDiscountUid: "source_discount_uid",
    catalogObjectId: "catalog_object_id",
    catalogVersion: "catalog_version",
    amountMoney: "amount_money",
    appliedMoney: "applied_money",
  },
});
