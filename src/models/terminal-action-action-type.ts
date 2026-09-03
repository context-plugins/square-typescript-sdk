import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TerminalActionActionType = {
  QrCode: "QR_CODE",
  Ping: "PING",
  SaveCard: "SAVE_CARD",
  Signature: "SIGNATURE",
  Confirmation: "CONFIRMATION",
  Receipt: "RECEIPT",
  DataCollection: "DATA_COLLECTION",
  Select: "SELECT",
} as const;
export type TerminalActionActionType =
  | (typeof TerminalActionActionType)[keyof typeof TerminalActionActionType]
  | (string & {});

export const terminalActionActionTypeSchema: EnumSchema<TerminalActionActionType> =
  s.enumOf<TerminalActionActionType>(TerminalActionActionType);
