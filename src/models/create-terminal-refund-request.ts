import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { terminalRefundSchema, type TerminalRefund } from "./terminal-refund.js";

export type CreateTerminalRefundRequest = {
  /**
   * A unique string that identifies this `CreateRefund` request. Keys can be any valid string but
   * must be unique for every `CreateRefund` request.
   *
   * See [Idempotency
   * keys](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency) for
   * more information.
   */
  idempotencyKey: string;
  /**
   * Represents a payment refund processed by the Square Terminal. Only supports Interac (Canadian
   * debit network) payment refunds.
   */
  refund?: TerminalRefund;
};

export const createTerminalRefundRequestSchema: Schema<CreateTerminalRefundRequest> =
  s.object<CreateTerminalRefundRequest>({
    idempotencyKey: s.string(),
    refund: s.optional(s.lazy(() => terminalRefundSchema)),
    _keysMap: {
      idempotencyKey: "idempotency_key",
    },
  });
