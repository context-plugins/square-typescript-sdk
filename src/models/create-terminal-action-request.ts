import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { terminalActionSchema, type TerminalAction } from "./terminal-action.js";

export type CreateTerminalActionRequest = {
  idempotencyKey: string;
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
