import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CategoryPathToRootNode = {
  categoryId?: string | null;
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
