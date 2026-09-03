import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogCategoryTypeSchema, type CatalogCategoryType } from "./catalog-category-type.js";
import { catalogEcomSeoDataSchema, type CatalogEcomSeoData } from "./catalog-ecom-seo-data.js";
import { catalogObjectCategorySchema, type CatalogObjectCategory } from "./catalog-object-category.js";
import { categoryPathToRootNodeSchema, type CategoryPathToRootNode } from "./category-path-to-root-node.js";

export type CatalogCategory = {
  name?: string | null;
  imageIds?: string[] | null;
  categoryType?: CatalogCategoryType;
  parentCategory?: CatalogObjectCategory;
  isTopLevel?: boolean | null;
  channels?: string[] | null;
  availabilityPeriodIds?: string[] | null;
  onlineVisibility?: boolean | null;
  rootCategory?: string;
  ecomSeoData?: CatalogEcomSeoData;
  pathToRoot?: CategoryPathToRootNode[] | null;
};

export const catalogCategorySchema: Schema<CatalogCategory> = s.object<CatalogCategory>({
  name: s.optionalNullable(s.string()),
  imageIds: s.optionalNullable(s.array(s.string())),
  categoryType: s.optional(s.lazy(() => catalogCategoryTypeSchema)),
  parentCategory: s.optional(s.lazy(() => catalogObjectCategorySchema)),
  isTopLevel: s.optionalNullable(s.boolean()),
  channels: s.optionalNullable(s.array(s.string())),
  availabilityPeriodIds: s.optionalNullable(s.array(s.string())),
  onlineVisibility: s.optionalNullable(s.boolean()),
  rootCategory: s.optional(s.string()),
  ecomSeoData: s.optional(s.lazy(() => catalogEcomSeoDataSchema)),
  pathToRoot: s.optionalNullable(s.array(s.lazy(() => categoryPathToRootNodeSchema))),
  _keysMap: {
    imageIds: "image_ids",
    categoryType: "category_type",
    parentCategory: "parent_category",
    isTopLevel: "is_top_level",
    availabilityPeriodIds: "availability_period_ids",
    onlineVisibility: "online_visibility",
    rootCategory: "root_category",
    ecomSeoData: "ecom_seo_data",
    pathToRoot: "path_to_root",
  },
});
