import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V1UpdateOrderRequestAction = {
  Complete: "COMPLETE",
  Cancel: "CANCEL",
  Refund: "REFUND",
} as const;
export type V1UpdateOrderRequestAction =
  | (typeof V1UpdateOrderRequestAction)[keyof typeof V1UpdateOrderRequestAction]
  | (string & {});

export const v1UpdateOrderRequestActionSchema: EnumSchema<V1UpdateOrderRequestAction> =
  s.enumOf<V1UpdateOrderRequestAction>(V1UpdateOrderRequestAction);
