import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates whether this is a line-item or order-level apportioned service charge. */
export const OrderServiceChargeScope = {
  /**
   * Used for reporting only. The original transaction service charge scope is currently not
   * supported by the API.
   */
  OtherServiceChargeScope: "OTHER_SERVICE_CHARGE_SCOPE",
  /**
   * The service charge should be applied to only line items specified by
   * `OrderLineItemAppliedServiceCharge` reference records.
   */
  LineItem: "LINE_ITEM",
  /** The service charge should be applied to the entire order. */
  Order: "ORDER",
} as const;
export type OrderServiceChargeScope =
  | (typeof OrderServiceChargeScope)[keyof typeof OrderServiceChargeScope]
  | (string & {});

export const orderServiceChargeScopeSchema: EnumSchema<OrderServiceChargeScope> =
  s.enumOf<OrderServiceChargeScope>(OrderServiceChargeScope);
