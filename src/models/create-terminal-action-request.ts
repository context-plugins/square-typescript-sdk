import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { terminalActionSchema, type TerminalAction } from "./terminal-action.js";

export type CreateTerminalActionRequest = {
  /**
   * A unique string that identifies this `CreateAction` request. Keys can be any valid string but
   * must be unique for every `CreateAction` request.
   *
   * See [Idempotency
   * keys](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency) for
   * more information.
   */
  idempotencyKey: string;
  /** Represents an action processed by the Square Terminal. */
  action: TerminalAction;
};

export const createTerminalActionRequestSchema: Schema<CreateTerminalActionRequest> =
  s.object<CreateTerminalActionRequest>({
    idempotencyKey: s.string(),
    action: terminalActionSchema,
    _keysMap: {
      idempotencyKey: "idempotency_key",
    },
  });
