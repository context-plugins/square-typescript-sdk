import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  modifierLocationOverridesSchema,
  type ModifierLocationOverrides,
} from "./modifier-location-overrides.js";
import { moneySchema, type Money } from "./money.js";

export type CatalogModifier = {
  name?: string | null;
  priceMoney?: Money;
  onByDefault?: boolean | null;
  ordinal?: number | null;
  modifierListId?: string | null;
  locationOverrides?: ModifierLocationOverrides[] | null;
  kitchenName?: string | null;
  imageId?: string | null;
  hiddenOnline?: boolean | null;
};

export const catalogModifierSchema: Schema<CatalogModifier> = s.object<CatalogModifier>({
  name: s.optionalNullable(s.string()),
  priceMoney: s.optional(s.lazy(() => moneySchema)),
  onByDefault: s.optionalNullable(s.boolean()),
  ordinal: s.optionalNullable(s.number()),
  modifierListId: s.optionalNullable(s.string()),
  locationOverrides: s.optionalNullable(s.array(s.lazy(() => modifierLocationOverridesSchema))),
  kitchenName: s.optionalNullable(s.string()),
  imageId: s.optionalNullable(s.string()),
  hiddenOnline: s.optionalNullable(s.boolean()),
  _keysMap: {
    priceMoney: "price_money",
    onByDefault: "on_by_default",
    modifierListId: "modifier_list_id",
    locationOverrides: "location_overrides",
    kitchenName: "kitchen_name",
    imageId: "image_id",
    hiddenOnline: "hidden_online",
  },
});
