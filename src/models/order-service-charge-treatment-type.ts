import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether the service charge will be treated as a value-holding line item or apportioned
 * toward a line item.
 */
export const OrderServiceChargeTreatmentType = {
  LineItemTreatment: "LINE_ITEM_TREATMENT",
  ApportionedTreatment: "APPORTIONED_TREATMENT",
} as const;
export type OrderServiceChargeTreatmentType =
  | (typeof OrderServiceChargeTreatmentType)[keyof typeof OrderServiceChargeTreatmentType]
  | (string & {});

export const orderServiceChargeTreatmentTypeSchema: EnumSchema<OrderServiceChargeTreatmentType> =
  s.enumOf<OrderServiceChargeTreatmentType>(OrderServiceChargeTreatmentType);
