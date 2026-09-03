import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { giftCardGanSourceSchema, type GiftCardGanSource } from "./gift-card-gan-source.js";
import { giftCardStatusSchema, type GiftCardStatus } from "./gift-card-status.js";
import { giftCardTypeSchema, type GiftCardType } from "./gift-card-type.js";
import { moneySchema, type Money } from "./money.js";

export type GiftCard = {
  id?: string;
  type: GiftCardType;
  ganSource?: GiftCardGanSource;
  state?: GiftCardStatus;
  balanceMoney?: Money;
  gan?: string | null;
  createdAt?: string;
  customerIds?: string[];
};

export const giftCardSchema: Schema<GiftCard> = s.object<GiftCard>({
  id: s.optional(s.string()),
  type: giftCardTypeSchema,
  ganSource: s.optional(s.lazy(() => giftCardGanSourceSchema)),
  state: s.optional(s.lazy(() => giftCardStatusSchema)),
  balanceMoney: s.optional(s.lazy(() => moneySchema)),
  gan: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  customerIds: s.optional(s.array(s.string())),
  _keysMap: {
    ganSource: "gan_source",
    balanceMoney: "balance_money",
    createdAt: "created_at",
    customerIds: "customer_ids",
  },
});
