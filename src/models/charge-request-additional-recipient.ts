import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

export type ChargeRequestAdditionalRecipient = {
  locationId: string;
  description: string;
  amountMoney: Money;
};

export const chargeRequestAdditionalRecipientSchema: Schema<ChargeRequestAdditionalRecipient> =
  s.object<ChargeRequestAdditionalRecipient>({
    locationId: s.string(),
    description: s.string(),
    amountMoney: moneySchema,
    _keysMap: {
      locationId: "location_id",
      amountMoney: "amount_money",
    },
  });
