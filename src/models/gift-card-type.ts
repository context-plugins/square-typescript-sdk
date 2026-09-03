import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const GiftCardType = {
  Physical: "PHYSICAL",
  Digital: "DIGITAL",
} as const;
export type GiftCardType = (typeof GiftCardType)[keyof typeof GiftCardType] | (string & {});

export const giftCardTypeSchema: EnumSchema<GiftCardType> = s.enumOf<GiftCardType>(GiftCardType);
