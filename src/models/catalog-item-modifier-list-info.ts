import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogModifierOverrideSchema, type CatalogModifierOverride } from "./catalog-modifier-override.js";
import {
  catalogModifierToggleOverrideTypeSchema,
  type CatalogModifierToggleOverrideType,
} from "./catalog-modifier-toggle-override-type.js";

/**
 * Controls how a modifier list is applied to a specific item. This object allows for item-specific
 * customization of modifier list behavior and provides the ability to override global modifier list
 * settings.
 */
export type CatalogItemModifierListInfo = {
  /** The ID of the `CatalogModifierList` controlled by this `CatalogModifierListInfo`. */
  modifierListId: string;
  /**
   * A set of `CatalogModifierOverride` objects that override default modifier settings for this
   * item.
   */
  modifierOverrides?: CatalogModifierOverride[] | null;
  /**
   * The minimum number of modifiers that must be selected from this modifier list. Values:
   *
   * - 0: No selection is required.
   * - -1: Default value, the attribute was not set by the client. When `max_selected_modifiers` is
   *   also -1, use the minimum and maximum selection values set on the `CatalogItemModifierList`.
   * - &gt;0: The required minimum modifier selections. This can be larger than the total
   *   `CatalogModifiers` when `allow_quantities` is enabled.
   * - &lt; -1: Invalid. Treated as no selection required.
   */
  minSelectedModifiers?: number | null;
  /**
   * The maximum number of modifiers that can be selected. Values:
   *
   * - 0: No maximum limit.
   * - -1: Default value, the attribute was not set by the client. When `min_selected_modifiers` is
   *   also -1, use the minimum and maximum selection values set on the `CatalogItemModifierList`.
   * - &gt;0: The maximum total modifier selections. This can be larger than the total
   *   `CatalogModifiers` when `allow_quantities` is enabled.
   * - &lt; -1: Invalid. Treated as no maximum limit.
   */
  maxSelectedModifiers?: number | null;
  /** If `true`, enable this `CatalogModifierList`. The default value is `true`. */
  enabled?: boolean | null;
  /**
   * The position of this `CatalogItemModifierListInfo` object within the `modifier_list_info` list
   * applied to a `CatalogItem` instance.
   */
  ordinal?: number | null;
  /** Item level overrides for bool attributes */
  allowQuantities?: CatalogModifierToggleOverrideType;
  /** Item level overrides for bool attributes */
  isConversational?: CatalogModifierToggleOverrideType;
  /** Item level overrides for bool attributes */
  hiddenFromCustomerOverride?: CatalogModifierToggleOverrideType;
};

export const catalogItemModifierListInfoSchema: Schema<CatalogItemModifierListInfo> =
  s.object<CatalogItemModifierListInfo>({
    modifierListId: s.string(),
    modifierOverrides: s.optionalNullable(s.array(s.lazy(() => catalogModifierOverrideSchema))),
    minSelectedModifiers: s.optionalNullable(s.int()),
    maxSelectedModifiers: s.optionalNullable(s.int()),
    enabled: s.optionalNullable(s.boolean()),
    ordinal: s.optionalNullable(s.int()),
    allowQuantities: s.optional(s.lazy(() => catalogModifierToggleOverrideTypeSchema)),
    isConversational: s.optional(s.lazy(() => catalogModifierToggleOverrideTypeSchema)),
    hiddenFromCustomerOverride: s.optional(s.lazy(() => catalogModifierToggleOverrideTypeSchema)),
    _keysMap: {
      modifierListId: "modifier_list_id",
      modifierOverrides: "modifier_overrides",
      minSelectedModifiers: "min_selected_modifiers",
      maxSelectedModifiers: "max_selected_modifiers",
      allowQuantities: "allow_quantities",
      isConversational: "is_conversational",
      hiddenFromCustomerOverride: "hidden_from_customer_override",
    },
  });
