import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The state of the order. */
export const OrderState = {
  /** Indicates that the order is open. Open orders can be updated. */
  Open: "OPEN",
  /**
   * Indicates that the order is completed. Completed orders are fully paid. This is a terminal
   * state.
   */
  Completed: "COMPLETED",
  /**
   * Indicates that the order is canceled. Canceled orders are not paid. This is a terminal state.
   */
  Canceled: "CANCELED",
  /**
   * Indicates that the order is in a draft state. Draft orders can be updated, but cannot be paid
   * or fulfilled. For more information, see [Create
   * Orders](https://developer.squareup.com/docs/orders-api/create-orders).
   */
  Draft: "DRAFT",
} as const;
export type OrderState = (typeof OrderState)[keyof typeof OrderState] | (string & {});

export const orderStateSchema: EnumSchema<OrderState> = s.enumOf<OrderState>(OrderState);
