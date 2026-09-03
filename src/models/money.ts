import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { currencySchema, type Currency } from "./currency.js";

export type Money = {
  amount?: number | null;
  currency?: Currency;
};

export const moneySchema: Schema<Money> = s.object<Money>({
  amount: s.optionalNullable(s.number()),
  currency: s.optional(s.lazy(() => currencySchema)),
});
