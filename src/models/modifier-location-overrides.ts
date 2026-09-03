import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { moneySchema, type Money } from "./money.js";

export type ModifierLocationOverrides = {
  locationId?: string | null;
  priceMoney?: Money;
  soldOut?: boolean;
};

export const modifierLocationOverridesSchema: Schema<ModifierLocationOverrides> =
  s.object<ModifierLocationOverrides>({
    locationId: s.optionalNullable(s.string()),
    priceMoney: s.optional(s.lazy(() => moneySchema)),
    soldOut: s.optional(s.boolean()),
    _keysMap: {
      locationId: "location_id",
      priceMoney: "price_money",
      soldOut: "sold_out",
    },
  });
