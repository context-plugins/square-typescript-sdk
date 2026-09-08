import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A node in the path from a retrieved category to its root node. */
export type CategoryPathToRootNode = {
  /** The category's ID. */
  categoryId?: string | null;
  /** The category's name. */
  categoryName?: string | null;
};

export const categoryPathToRootNodeSchema: Schema<CategoryPathToRootNode> = s.object<CategoryPathToRootNode>({
  categoryId: s.optionalNullable(s.string()),
  categoryName: s.optionalNullable(s.string()),
  _keysMap: {
    categoryId: "category_id",
    categoryName: "category_name",
  },
});
