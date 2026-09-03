import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OrderServiceChargeTreatmentType = {
  LineItemTreatment: "LINE_ITEM_TREATMENT",
  ApportionedTreatment: "APPORTIONED_TREATMENT",
} as const;
export type OrderServiceChargeTreatmentType =
  | (typeof OrderServiceChargeTreatmentType)[keyof typeof OrderServiceChargeTreatmentType]
  | (string & {});

export const orderServiceChargeTreatmentTypeSchema: EnumSchema<OrderServiceChargeTreatmentType> =
  s.enumOf<OrderServiceChargeTreatmentType>(OrderServiceChargeTreatmentType);
