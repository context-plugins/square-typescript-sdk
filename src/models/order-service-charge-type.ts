import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OrderServiceChargeType = {
  AutoGratuity: "AUTO_GRATUITY",
  Custom: "CUSTOM",
} as const;
export type OrderServiceChargeType =
  | (typeof OrderServiceChargeType)[keyof typeof OrderServiceChargeType]
  | (string & {});

export const orderServiceChargeTypeSchema: EnumSchema<OrderServiceChargeType> =
  s.enumOf<OrderServiceChargeType>(OrderServiceChargeType);
