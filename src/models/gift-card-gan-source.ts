import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const GiftCardGanSource = {
  Square: "SQUARE",
  Other: "OTHER",
} as const;
export type GiftCardGanSource = (typeof GiftCardGanSource)[keyof typeof GiftCardGanSource] | (string & {});

export const giftCardGanSourceSchema: EnumSchema<GiftCardGanSource> =
  s.enumOf<GiftCardGanSource>(GiftCardGanSource);
