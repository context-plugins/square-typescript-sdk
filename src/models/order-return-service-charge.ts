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

/** Represents the service charge applied to the original order. */
export type OrderReturnServiceCharge = {
  /** A unique ID that identifies the return service charge only within this order. */
  uid?: string | null;
  /**
   * The service charge `uid` from the order containing the original service charge.
   * `source_service_charge_uid` is `null` for unlinked returns.
   */
  sourceServiceChargeUid?: string | null;
  /** The name of the service charge. */
  name?: string | null;
  /** The catalog object ID of the associated [OrderServiceCharge](entity:OrderServiceCharge). */
  catalogObjectId?: string | null;
  /** The version of the catalog object that this service charge references. */
  catalogVersion?: number | null;
  /**
   * The percentage of the service charge, as a string representation of a decimal number. For
   * example, a value of `"7.25"` corresponds to a percentage of 7.25%.
   *
   * Either `percentage` or `amount_money` should be set, but not both.
   */
  percentage?: string | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  amountMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  appliedMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  totalMoney?: Money;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  totalTaxMoney?: Money;
  /**
   * Represents a phase in the process of calculating order totals. Service charges are applied
   * after the indicated phase.
   *
   * [Read more about how order totals are
   * calculated.](https://developer.squareup.com/docs/orders-api/how-it-works#how-totals-are-calculated)
   */
  calculationPhase?: OrderServiceChargeCalculationPhase;
  /**
   * Indicates whether the surcharge can be taxed. Service charges calculated in the `TOTAL_PHASE`
   * cannot be marked as taxable.
   */
  taxable?: boolean | null;
  /**
   * The list of references to `OrderReturnTax` entities applied to the `OrderReturnServiceCharge`.
   * Each `OrderLineItemAppliedTax` has a `tax_uid` that references the `uid` of a top-level
   * `OrderReturnTax` that is being applied to the `OrderReturnServiceCharge`. On reads, the applied
   * amount is populated.
   */
  appliedTaxes?: OrderLineItemAppliedTax[] | null;
  /**
   * Indicates whether the service charge will be treated as a value-holding line item or
   * apportioned toward a line item.
   */
  treatmentType?: OrderServiceChargeTreatmentType;
  /** Indicates whether this is a line-item or order-level apportioned service charge. */
  scope?: OrderServiceChargeScope;
  type?: OrderServiceChargeType;
};

export const orderReturnServiceChargeSchema: Schema<OrderReturnServiceCharge> =
  s.object<OrderReturnServiceCharge>({
    uid: s.optionalNullable(s.string()),
    sourceServiceChargeUid: s.optionalNullable(s.string()),
    name: s.optionalNullable(s.string()),
    catalogObjectId: s.optionalNullable(s.string()),
    catalogVersion: s.optionalNullable(s.int()),
    percentage: s.optionalNullable(s.string()),
    amountMoney: s.optional(s.lazy(() => moneySchema)),
    appliedMoney: s.optional(s.lazy(() => moneySchema)),
    totalMoney: s.optional(s.lazy(() => moneySchema)),
    totalTaxMoney: s.optional(s.lazy(() => moneySchema)),
    calculationPhase: s.optional(s.lazy(() => orderServiceChargeCalculationPhaseSchema)),
    taxable: s.optionalNullable(s.boolean()),
    appliedTaxes: s.optionalNullable(s.array(s.lazy(() => orderLineItemAppliedTaxSchema))),
    treatmentType: s.optional(s.lazy(() => orderServiceChargeTreatmentTypeSchema)),
    scope: s.optional(s.lazy(() => orderServiceChargeScopeSchema)),
    type: s.optional(s.lazy(() => orderServiceChargeTypeSchema)),
    _keysMap: {
      sourceServiceChargeUid: "source_service_charge_uid",
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
