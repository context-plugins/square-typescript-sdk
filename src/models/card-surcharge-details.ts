import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

export type CardSurchargeDetails = {
  cardSurchargeMoney?: Money;
};

export const cardSurchargeDetailsSchema: Schema<CardSurchargeDetails> = s.object<CardSurchargeDetails>({
  cardSurchargeMoney: s.optional(s.lazy(() => moneySchema)),
  _keysMap: {
    cardSurchargeMoney: "card_surcharge_money",
  },
});
