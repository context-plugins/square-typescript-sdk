import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PaymentOptionsDelayAction = {
  Cancel: "CANCEL",
  Complete: "COMPLETE",
} as const;
export type PaymentOptionsDelayAction =
  | (typeof PaymentOptionsDelayAction)[keyof typeof PaymentOptionsDelayAction]
  | (string & {});

export const paymentOptionsDelayActionSchema: EnumSchema<PaymentOptionsDelayAction> =
  s.enumOf<PaymentOptionsDelayAction>(PaymentOptionsDelayAction);
