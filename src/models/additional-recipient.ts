import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

export type AdditionalRecipient = {
  locationId: string;
  description?: string | null;
  amountMoney: Money;
  receivableId?: string | null;
};

export const additionalRecipientSchema: Schema<AdditionalRecipient> = s.object<AdditionalRecipient>({
  locationId: s.string(),
  description: s.optionalNullable(s.string()),
  amountMoney: moneySchema,
  receivableId: s.optionalNullable(s.string()),
  _keysMap: {
    locationId: "location_id",
    amountMoney: "amount_money",
    receivableId: "receivable_id",
  },
});
