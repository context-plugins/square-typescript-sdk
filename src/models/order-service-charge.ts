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

/** Represents a service charge applied to an order. */
export type OrderServiceCharge = {
  /** A unique ID that identifies the service charge only within this order. */
  uid?: string | null;
  /**
   * The name of the service charge. This is unused and null for AUTO_GRATUITY to match the behavior
   * on Bills.
   */
  name?: string | null;
  /** The catalog object ID referencing the service charge [CatalogObject](entity:CatalogObject). */
  catalogObjectId?: string | null;
  /** The version of the catalog object that this service charge references. */
  catalogVersion?: number | null;
  /**
   * The service charge percentage as a string representation of a decimal number. For example,
   * `"7.25"` indicates a service charge of 7.25%.
   *
   * Exactly 1 of `percentage` or `amount_money` should be set.
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
   * Indicates whether the service charge can be taxed. If set to `true`, order-level taxes
   * automatically apply to the service charge. Note that service charges calculated in the
   * `TOTAL_PHASE` cannot be marked as taxable.
   */
  taxable?: boolean | null;
  /**
   * The list of references to the taxes applied to this service charge. Each
   * `OrderLineItemAppliedTax` has a `tax_uid` that references the `uid` of a top-level
   * `OrderLineItemTax` that is being applied to this service charge. On reads, the amount applied
   * is populated.
   *
   * An `OrderLineItemAppliedTax` is automatically created on every taxable service charge for all
   * `ORDER` scoped taxes that are added to the order. `OrderLineItemAppliedTax` records for
   * `LINE_ITEM` scoped taxes must be added in requests for the tax to apply to any taxable service
   * charge. Taxable service charges have the `taxable` field set to `true` and calculated in the
   * `SUBTOTAL_PHASE`.
   *
   * To change the amount of a tax, modify the referenced top-level tax.
   */
  appliedTaxes?: OrderLineItemAppliedTax[] | null;
  /**
   * Application-defined data attached to this service charge. Metadata fields are intended to store
   * descriptive references or associations with an entity in another system or store brief
   * information about the object. Square does not process this field; it only stores and returns it
   * in relevant API calls. Do not use metadata to store any sensitive information (such as
   * personally identifiable information or card details).
   *
   * Keys written by applications must be 60 characters or less and must be in the character set
   * `[a-zA-Z0-9_-]`. Entries can also include metadata generated by Square. These keys are prefixed
   * with a namespace, separated from the key with a ':' character.
   *
   * Values have a maximum length of 255 characters.
   *
   * An application can have up to 10 entries per metadata field.
   *
   * Entries written by applications are private and can only be read or modified by the same
   * application.
   *
   * For more information, see
   * [Metadata](https://developer.squareup.com/docs/build-basics/metadata).
   */
  metadata?: Record<string, string> | null;
  type?: OrderServiceChargeType;
  /**
   * Indicates whether the service charge will be treated as a value-holding line item or
   * apportioned toward a line item.
   */
  treatmentType?: OrderServiceChargeTreatmentType;
  /** Indicates whether this is a line-item or order-level apportioned service charge. */
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
