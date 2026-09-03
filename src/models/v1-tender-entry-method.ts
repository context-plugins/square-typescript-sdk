import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const V1TenderEntryMethod = {
  Manual: "MANUAL",
  Scanned: "SCANNED",
  SquareCash: "SQUARE_CASH",
  SquareWallet: "SQUARE_WALLET",
  Swiped: "SWIPED",
  WebForm: "WEB_FORM",
  Other: "OTHER",
} as const;
export type V1TenderEntryMethod =
  | (typeof V1TenderEntryMethod)[keyof typeof V1TenderEntryMethod]
  | (string & {});

export const v1TenderEntryMethodSchema: EnumSchema<V1TenderEntryMethod> =
  s.enumOf<V1TenderEntryMethod>(V1TenderEntryMethod);
