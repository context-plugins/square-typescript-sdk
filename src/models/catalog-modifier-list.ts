import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  catalogModifierListModifierTypeSchema,
  type CatalogModifierListModifierType,
} from "./catalog-modifier-list-modifier-type.js";
import {
  catalogModifierListSelectionTypeSchema,
  type CatalogModifierListSelectionType,
} from "./catalog-modifier-list-selection-type.js";
import { catalogObjectSchema, type CatalogObject } from "./catalog-object.js";

export type CatalogModifierList = {
  name?: string | null;
  ordinal?: number | null;
  selectionType?: CatalogModifierListSelectionType;
  modifiers?: CatalogObject[] | null;
  imageIds?: string[] | null;
  allowQuantities?: boolean | null;
  isConversational?: boolean | null;
  modifierType?: CatalogModifierListModifierType;
  maxLength?: number | null;
  textRequired?: boolean | null;
  internalName?: string | null;
  minSelectedModifiers?: number | null;
  maxSelectedModifiers?: number | null;
  hiddenFromCustomer?: boolean | null;
};

export const catalogModifierListSchema: Schema<CatalogModifierList> = s.object<CatalogModifierList>({
  name: s.optionalNullable(s.string()),
  ordinal: s.optionalNullable(s.number()),
  selectionType: s.optional(s.lazy(() => catalogModifierListSelectionTypeSchema)),
  modifiers: s.optionalNullable(s.array(s.lazy(() => catalogObjectSchema))),
  imageIds: s.optionalNullable(s.array(s.string())),
  allowQuantities: s.optionalNullable(s.boolean()),
  isConversational: s.optionalNullable(s.boolean()),
  modifierType: s.optional(s.lazy(() => catalogModifierListModifierTypeSchema)),
  maxLength: s.optionalNullable(s.number()),
  textRequired: s.optionalNullable(s.boolean()),
  internalName: s.optionalNullable(s.string()),
  minSelectedModifiers: s.optionalNullable(s.number()),
  maxSelectedModifiers: s.optionalNullable(s.number()),
  hiddenFromCustomer: s.optionalNullable(s.boolean()),
  _keysMap: {
    selectionType: "selection_type",
    imageIds: "image_ids",
    allowQuantities: "allow_quantities",
    isConversational: "is_conversational",
    modifierType: "modifier_type",
    maxLength: "max_length",
    textRequired: "text_required",
    internalName: "internal_name",
    minSelectedModifiers: "min_selected_modifiers",
    maxSelectedModifiers: "max_selected_modifiers",
    hiddenFromCustomer: "hidden_from_customer",
  },
});
