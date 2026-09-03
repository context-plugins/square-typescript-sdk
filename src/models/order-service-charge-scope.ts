import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OrderServiceChargeScope = {
  OtherServiceChargeScope: "OTHER_SERVICE_CHARGE_SCOPE",
  LineItem: "LINE_ITEM",
  Order: "ORDER",
} as const;
export type OrderServiceChargeScope =
  | (typeof OrderServiceChargeScope)[keyof typeof OrderServiceChargeScope]
  | (string & {});

export const orderServiceChargeScopeSchema: EnumSchema<OrderServiceChargeScope> =
  s.enumOf<OrderServiceChargeScope>(OrderServiceChargeScope);
