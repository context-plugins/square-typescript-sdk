import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates a card's type, such as `CREDIT` or `DEBIT`. */
export const CardType = {
  UnknownCardType: "UNKNOWN_CARD_TYPE",
  Credit: "CREDIT",
  Debit: "DEBIT",
} as const;
export type CardType = (typeof CardType)[keyof typeof CardType] | (string & {});

export const cardTypeSchema: EnumSchema<CardType> = s.enumOf<CardType>(CardType);
