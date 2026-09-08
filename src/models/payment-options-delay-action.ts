import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Describes the action to be applied to a delayed capture payment when the delay_duration has
 * elapsed.
 */
export const PaymentOptionsDelayAction = {
  /**
   * Indicates that the payment should be automatically canceled when the delay duration elapses.
   */
  Cancel: "CANCEL",
  /**
   * Indicates that the payment should be automatically completed when the delay duration elapses.
   */
  Complete: "COMPLETE",
} as const;
export type PaymentOptionsDelayAction =
  | (typeof PaymentOptionsDelayAction)[keyof typeof PaymentOptionsDelayAction]
  | (string & {});

export const paymentOptionsDelayActionSchema: EnumSchema<PaymentOptionsDelayAction> =
  s.enumOf<PaymentOptionsDelayAction>(PaymentOptionsDelayAction);
