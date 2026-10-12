import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * A category that can be assigned to an item or a parent category that can be assigned to another
 * category. For example, a clothing category can be assigned to a t-shirt item or be made as the
 * parent category to the pants category.
 */
export type CatalogObjectCategory = {
  /** The ID of the object's category. */
  id?: string;
  /**
   * The position of this object within the specified category. When an item is assigned to a
   * category, the ordinal determines the item's position relative to other items in the same
   * category. When used for a parent category reference, the ordinal determines the category's
   * position among its sibling categories.
   */
  ordinal?: number | null;
};

export const catalogObjectCategorySchema: Schema<CatalogObjectCategory> = s.object<CatalogObjectCategory>({
  id: s.optional(s.string()),
  ordinal: s.optionalNullable(s.int()),
});
