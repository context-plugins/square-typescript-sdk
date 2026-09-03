import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

export type QuickPay = {
  name: string;
  priceMoney: Money;
  locationId: string;
};

export const quickPaySchema: Schema<QuickPay> = s.object<QuickPay>({
  name: s.string(),
  priceMoney: moneySchema,
  locationId: s.string(),
  _keysMap: {
    priceMoney: "price_money",
    locationId: "location_id",
  },
});
