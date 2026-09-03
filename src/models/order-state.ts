import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OrderState = {
  Open: "OPEN",
  Completed: "COMPLETED",
  Canceled: "CANCELED",
  Draft: "DRAFT",
} as const;
export type OrderState = (typeof OrderState)[keyof typeof OrderState] | (string & {});

export const orderStateSchema: EnumSchema<OrderState> = s.enumOf<OrderState>(OrderState);
