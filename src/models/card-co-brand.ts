import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CardCoBrand = {
  Unknown: "UNKNOWN",
  Afterpay: "AFTERPAY",
  Clearpay: "CLEARPAY",
} as const;
export type CardCoBrand = (typeof CardCoBrand)[keyof typeof CardCoBrand] | (string & {});

export const cardCoBrandSchema: EnumSchema<CardCoBrand> = s.enumOf<CardCoBrand>(CardCoBrand);
