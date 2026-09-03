import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OrderCardSurchargeTreatmentType = {
  LineItemTreatment: "LINE_ITEM_TREATMENT",
  ApportionedTreatment: "APPORTIONED_TREATMENT",
} as const;
export type OrderCardSurchargeTreatmentType =
  | (typeof OrderCardSurchargeTreatmentType)[keyof typeof OrderCardSurchargeTreatmentType]
  | (string & {});

export const orderCardSurchargeTreatmentTypeSchema: EnumSchema<OrderCardSurchargeTreatmentType> =
  s.enumOf<OrderCardSurchargeTreatmentType>(OrderCardSurchargeTreatmentType);
