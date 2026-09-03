import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogModifierOverrideSchema, type CatalogModifierOverride } from "./catalog-modifier-override.js";
import {
  catalogModifierToggleOverrideTypeSchema,
  type CatalogModifierToggleOverrideType,
} from "./catalog-modifier-toggle-override-type.js";

export type CatalogItemModifierListInfo = {
  modifierListId: string;
  modifierOverrides?: CatalogModifierOverride[] | null;
  minSelectedModifiers?: number | null;
  maxSelectedModifiers?: number | null;
  enabled?: boolean | null;
  ordinal?: number | null;
  allowQuantities?: CatalogModifierToggleOverrideType;
  isConversational?: CatalogModifierToggleOverrideType;
  hiddenFromCustomerOverride?: CatalogModifierToggleOverrideType;
};

export const catalogItemModifierListInfoSchema: Schema<CatalogItemModifierListInfo> =
  s.object<CatalogItemModifierListInfo>({
    modifierListId: s.string(),
    modifierOverrides: s.optionalNullable(s.array(s.lazy(() => catalogModifierOverrideSchema))),
    minSelectedModifiers: s.optionalNullable(s.number()),
    maxSelectedModifiers: s.optionalNullable(s.number()),
    enabled: s.optionalNullable(s.boolean()),
    ordinal: s.optionalNullable(s.number()),
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
