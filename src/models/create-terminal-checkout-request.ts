import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { terminalCheckoutSchema, type TerminalCheckout } from "./terminal-checkout.js";

export type CreateTerminalCheckoutRequest = {
  /**
   * A unique string that identifies this `CreateCheckout` request. Keys can be any valid string but
   * must be unique for every `CreateCheckout` request.
   *
   * See [Idempotency
   * keys](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency) for
   * more information.
   */
  idempotencyKey: string;
  /** Represents a checkout processed by the Square Terminal. */
  checkout: TerminalCheckout;
};

export const createTerminalCheckoutRequestSchema: Schema<CreateTerminalCheckoutRequest> =
  s.object<CreateTerminalCheckoutRequest>({
    idempotencyKey: s.string(),
    checkout: terminalCheckoutSchema,
    _keysMap: {
      idempotencyKey: "idempotency_key",
    },
  });
