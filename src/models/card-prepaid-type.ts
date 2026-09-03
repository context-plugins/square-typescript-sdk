import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CardPrepaidType = {
  UnknownPrepaidType: "UNKNOWN_PREPAID_TYPE",
  NotPrepaid: "NOT_PREPAID",
  Prepaid: "PREPAID",
} as const;
export type CardPrepaidType = (typeof CardPrepaidType)[keyof typeof CardPrepaidType] | (string & {});

export const cardPrepaidTypeSchema: EnumSchema<CardPrepaidType> = s.enumOf<CardPrepaidType>(CardPrepaidType);
