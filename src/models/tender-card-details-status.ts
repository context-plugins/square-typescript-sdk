import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TenderCardDetailsStatus = {
  Authorized: "AUTHORIZED",
  Captured: "CAPTURED",
  Voided: "VOIDED",
  Failed: "FAILED",
} as const;
export type TenderCardDetailsStatus =
  | (typeof TenderCardDetailsStatus)[keyof typeof TenderCardDetailsStatus]
  | (string & {});

export const tenderCardDetailsStatusSchema: EnumSchema<TenderCardDetailsStatus> =
  s.enumOf<TenderCardDetailsStatus>(TenderCardDetailsStatus);
