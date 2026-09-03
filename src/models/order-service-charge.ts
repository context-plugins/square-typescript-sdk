import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";
import {
  orderLineItemAppliedTaxSchema,
  type OrderLineItemAppliedTax,
} from "./order-line-item-applied-tax.js";
import {
  orderServiceChargeCalculationPhaseSchema,
  type OrderServiceChargeCalculationPhase,
} from "./order-service-charge-calculation-phase.js";
import { orderServiceChargeScopeSchema, type OrderServiceChargeScope } from "./order-service-charge-scope.js";
import {
  orderServiceChargeTreatmentTypeSchema,
  type OrderServiceChargeTreatmentType,
} from "./order-service-charge-treatment-type.js";
import { orderServiceChargeTypeSchema, type OrderServiceChargeType } from "./order-service-charge-type.js";

export type OrderServiceCharge = {
  uid?: string | null;
  name?: string | null;
  catalogObjectId?: string | null;
  catalogVersion?: number | null;
  percentage?: string | null;
  amountMoney?: Money;
  appliedMoney?: Money;
  totalMoney?: Money;
  totalTaxMoney?: Money;
  calculationPhase?: OrderServiceChargeCalculationPhase;
  taxable?: boolean | null;
  appliedTaxes?: OrderLineItemAppliedTax[] | null;
  metadata?: Record<string, string> | null;
  type?: OrderServiceChargeType;
  treatmentType?: OrderServiceChargeTreatmentType;
  scope?: OrderServiceChargeScope;
};

export const orderServiceChargeSchema: Schema<OrderServiceCharge> = s.object<OrderServiceCharge>({
  uid: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  catalogObjectId: s.optionalNullable(s.string()),
  catalogVersion: s.optionalNullable(s.number()),
  percentage: s.optionalNullable(s.string()),
  amountMoney: s.optional(s.lazy(() => moneySchema)),
  appliedMoney: s.optional(s.lazy(() => moneySchema)),
  totalMoney: s.optional(s.lazy(() => moneySchema)),
  totalTaxMoney: s.optional(s.lazy(() => moneySchema)),
  calculationPhase: s.optional(s.lazy(() => orderServiceChargeCalculationPhaseSchema)),
  taxable: s.optionalNullable(s.boolean()),
  appliedTaxes: s.optionalNullable(s.array(s.lazy(() => orderLineItemAppliedTaxSchema))),
  metadata: s.optionalNullable(s.record(s.string(), s.string())),
  type: s.optional(s.lazy(() => orderServiceChargeTypeSchema)),
  treatmentType: s.optional(s.lazy(() => orderServiceChargeTreatmentTypeSchema)),
  scope: s.optional(s.lazy(() => orderServiceChargeScopeSchema)),
  _keysMap: {
    catalogObjectId: "catalog_object_id",
    catalogVersion: "catalog_version",
    amountMoney: "amount_money",
    appliedMoney: "applied_money",
    totalMoney: "total_money",
    totalTaxMoney: "total_tax_money",
    calculationPhase: "calculation_phase",
    appliedTaxes: "applied_taxes",
    treatmentType: "treatment_type",
  },
});
