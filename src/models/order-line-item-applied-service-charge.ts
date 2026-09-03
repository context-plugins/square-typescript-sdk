import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

export type OrderLineItemAppliedServiceCharge = {
  uid?: string | null;
  serviceChargeUid: string;
  appliedMoney?: Money;
};

export const orderLineItemAppliedServiceChargeSchema: Schema<OrderLineItemAppliedServiceCharge> =
  s.object<OrderLineItemAppliedServiceCharge>({
    uid: s.optionalNullable(s.string()),
    serviceChargeUid: s.string(),
    appliedMoney: s.optional(s.lazy(() => moneySchema)),
    _keysMap: {
      serviceChargeUid: "service_charge_uid",
      appliedMoney: "applied_money",
    },
  });
