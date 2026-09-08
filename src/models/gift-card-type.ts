import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the gift card type. */
export const GiftCardType = {
  /** A plastic gift card. */
  Physical: "PHYSICAL",
  /** A digital gift card. */
  Digital: "DIGITAL",
} as const;
export type GiftCardType = (typeof GiftCardType)[keyof typeof GiftCardType] | (string & {});

export const giftCardTypeSchema: EnumSchema<GiftCardType> = s.enumOf<GiftCardType>(GiftCardType);
