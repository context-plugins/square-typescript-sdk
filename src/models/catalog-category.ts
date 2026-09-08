import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogCategoryTypeSchema, type CatalogCategoryType } from "./catalog-category-type.js";
import { catalogEcomSeoDataSchema, type CatalogEcomSeoData } from "./catalog-ecom-seo-data.js";
import { catalogObjectCategorySchema, type CatalogObjectCategory } from "./catalog-object-category.js";
import { categoryPathToRootNodeSchema, type CategoryPathToRootNode } from "./category-path-to-root-node.js";

/** A category to which a `CatalogItem` instance belongs. */
export type CatalogCategory = {
  /**
   * The category name. This is a searchable attribute for use in applicable query filters, and its
   * value length is of Unicode code points.
   */
  name?: string | null;
  /**
   * The IDs of images associated with this `CatalogCategory` instance. Currently these images are
   * not displayed by Square, but are free to be displayed in 3rd party applications.
   */
  imageIds?: string[] | null;
  /** Indicates the type of a category. */
  categoryType?: CatalogCategoryType;
  /**
   * A category that can be assigned to an item or a parent category that can be assigned to another
   * category. For example, a clothing category can be assigned to a t-shirt item or be made as the
   * parent category to the pants category.
   */
  parentCategory?: CatalogObjectCategory;
  /**
   * Indicates whether a category is a top level category, which does not have any parent_category.
   */
  isTopLevel?: boolean | null;
  /**
   * A list of IDs representing channels, such as a Square Online site, where the category can be
   * made visible.
   */
  channels?: string[] | null;
  /** The IDs of the `CatalogAvailabilityPeriod` objects associated with the category. */
  availabilityPeriodIds?: string[] | null;
  /**
   * Indicates whether the category is visible (`true`) or hidden (`false`) on all of the seller's
   * Square Online sites.
   */
  onlineVisibility?: boolean | null;
  /** The top-level category in a category hierarchy. */
  rootCategory?: string;
  /** SEO data for for a seller's Square Online store. */
  ecomSeoData?: CatalogEcomSeoData;
  /**
   * The path from the category to its root category. The first node of the path is the parent of
   * the category and the last is the root category. The path is empty if the category is a root
   * category.
   */
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
