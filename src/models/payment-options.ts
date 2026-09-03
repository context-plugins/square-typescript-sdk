import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  paymentOptionsDelayActionSchema,
  type PaymentOptionsDelayAction,
} from "./payment-options-delay-action.js";

export type PaymentOptions = {
  autocomplete?: boolean | null;
  delayDuration?: string | null;
  acceptPartialAuthorization?: boolean | null;
  delayAction?: PaymentOptionsDelayAction;
};

export const paymentOptionsSchema: Schema<PaymentOptions> = s.object<PaymentOptions>({
  autocomplete: s.optionalNullable(s.boolean()),
  delayDuration: s.optionalNullable(s.string()),
  acceptPartialAuthorization: s.optionalNullable(s.boolean()),
  delayAction: s.optional(s.lazy(() => paymentOptionsDelayActionSchema)),
  _keysMap: {
    delayDuration: "delay_duration",
    acceptPartialAuthorization: "accept_partial_authorization",
    delayAction: "delay_action",
  },
});
