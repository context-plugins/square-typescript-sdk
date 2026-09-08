import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  modifierLocationOverridesSchema,
  type ModifierLocationOverrides,
} from "./modifier-location-overrides.js";
import { moneySchema, type Money } from "./money.js";

/**
 * A modifier that can be applied to items at the time of sale. For example, a cheese modifier for a
 * burger, or a flavor modifier for a serving of ice cream.
 */
export type CatalogModifier = {
  /**
   * The modifier name. This is a searchable attribute for use in applicable query filters, and its
   * value length is of Unicode code points.
   */
  name?: string | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  priceMoney?: Money;
  /**
   * When `true`, this modifier is selected by default when displaying the modifier list. This
   * setting can be overridden at the item level using `CatalogModifierListInfo.modifier_overrides`.
   */
  onByDefault?: boolean | null;
  /** Determines where this `CatalogModifier` appears in the `CatalogModifierList`. */
  ordinal?: number | null;
  /** The ID of the `CatalogModifierList` associated with this modifier. */
  modifierListId?: string | null;
  /** Location-specific price overrides. */
  locationOverrides?: ModifierLocationOverrides[] | null;
  /**
   * (Optional) Name that the restaurant wants to display to their kitchen workers instead of the
   * customer-facing name. e.g., customer name might be "Double Baconize" and the kitchen name is
   * "Add 2x bacon"
   */
  kitchenName?: string | null;
  /**
   * The ID of the image associated with this `CatalogModifier` instance. Currently this image is
   * not displayed by Square, but is free to be displayed in 3rd party applications.
   */
  imageId?: string | null;
  /**
   * When `true`, this modifier is hidden from online ordering channels. This setting can be
   * overridden at the item level using `CatalogModifierListInfo.modifier_overrides`.
   */
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
