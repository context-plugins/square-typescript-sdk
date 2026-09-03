import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

export type ShippingFee = {
  name?: string | null;
  charge: Money;
};

export const shippingFeeSchema: Schema<ShippingFee> = s.object<ShippingFee>({
  name: s.optionalNullable(s.string()),
  charge: moneySchema,
});
