import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { currencySchema, type Currency } from "./currency.js";

export type V1Money = {
  amount?: number | null;
  currencyCode?: Currency;
};

export const v1MoneySchema: Schema<V1Money> = s.object<V1Money>({
  amount: s.optionalNullable(s.number()),
  currencyCode: s.optional(s.lazy(() => currencySchema)),
  _keysMap: {
    currencyCode: "currency_code",
  },
});
