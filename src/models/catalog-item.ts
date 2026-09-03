import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogEcomSeoDataSchema, type CatalogEcomSeoData } from "./catalog-ecom-seo-data.js";
import {
  catalogItemFoodAndBeverageDetailsSchema,
  type CatalogItemFoodAndBeverageDetails,
} from "./catalog-item-food-and-beverage-details.js";
import {
  catalogItemModifierListInfoSchema,
  type CatalogItemModifierListInfo,
} from "./catalog-item-modifier-list-info.js";
import {
  catalogItemOptionForItemSchema,
  type CatalogItemOptionForItem,
} from "./catalog-item-option-for-item.js";
import { catalogItemProductTypeSchema, type CatalogItemProductType } from "./catalog-item-product-type.js";
import { catalogObjectCategorySchema, type CatalogObjectCategory } from "./catalog-object-category.js";
import { catalogObjectSchema, type CatalogObject } from "./catalog-object.js";

export type CatalogItem = {
  name?: string | null;
  description?: string | null;
  abbreviation?: string | null;
  labelColor?: string | null;
  isTaxable?: boolean | null;
  categoryId?: string | null;
  buyerFacingName?: string | null;
  taxIds?: string[] | null;
  modifierListInfo?: CatalogItemModifierListInfo[] | null;
  variations?: CatalogObject[] | null;
  productType?: CatalogItemProductType;
  skipModifierScreen?: boolean | null;
  itemOptions?: CatalogItemOptionForItem[] | null;
  ecomUri?: string | null;
  ecomImageUris?: string[] | null;
  imageIds?: string[] | null;
  sortName?: string | null;
  categories?: CatalogObjectCategory[] | null;
  descriptionHtml?: string | null;
  descriptionPlaintext?: string;
  kitchenName?: string | null;
  channels?: string[] | null;
  isArchived?: boolean | null;
  ecomSeoData?: CatalogEcomSeoData;
  foodAndBeverageDetails?: CatalogItemFoodAndBeverageDetails;
  reportingCategory?: CatalogObjectCategory;
  isAlcoholic?: boolean | null;
};

export const catalogItemSchema: Schema<CatalogItem> = s.object<CatalogItem>({
  name: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  abbreviation: s.optionalNullable(s.string()),
  labelColor: s.optionalNullable(s.string()),
  isTaxable: s.optionalNullable(s.boolean()),
  categoryId: s.optionalNullable(s.string()),
  buyerFacingName: s.optionalNullable(s.string()),
  taxIds: s.optionalNullable(s.array(s.string())),
  modifierListInfo: s.optionalNullable(s.array(s.lazy(() => catalogItemModifierListInfoSchema))),
  variations: s.optionalNullable(s.array(s.lazy(() => catalogObjectSchema))),
  productType: s.optional(s.lazy(() => catalogItemProductTypeSchema)),
  skipModifierScreen: s.optionalNullable(s.boolean()),
  itemOptions: s.optionalNullable(s.array(s.lazy(() => catalogItemOptionForItemSchema))),
  ecomUri: s.optionalNullable(s.string()),
  ecomImageUris: s.optionalNullable(s.array(s.string())),
  imageIds: s.optionalNullable(s.array(s.string())),
  sortName: s.optionalNullable(s.string()),
  categories: s.optionalNullable(s.array(s.lazy(() => catalogObjectCategorySchema))),
  descriptionHtml: s.optionalNullable(s.string()),
  descriptionPlaintext: s.optional(s.string()),
  kitchenName: s.optionalNullable(s.string()),
  channels: s.optionalNullable(s.array(s.string())),
  isArchived: s.optionalNullable(s.boolean()),
  ecomSeoData: s.optional(s.lazy(() => catalogEcomSeoDataSchema)),
  foodAndBeverageDetails: s.optional(s.lazy(() => catalogItemFoodAndBeverageDetailsSchema)),
  reportingCategory: s.optional(s.lazy(() => catalogObjectCategorySchema)),
  isAlcoholic: s.optionalNullable(s.boolean()),
  _keysMap: {
    labelColor: "label_color",
    isTaxable: "is_taxable",
    categoryId: "category_id",
    buyerFacingName: "buyer_facing_name",
    taxIds: "tax_ids",
    modifierListInfo: "modifier_list_info",
    productType: "product_type",
    skipModifierScreen: "skip_modifier_screen",
    itemOptions: "item_options",
    ecomUri: "ecom_uri",
    ecomImageUris: "ecom_image_uris",
    imageIds: "image_ids",
    sortName: "sort_name",
    descriptionHtml: "description_html",
    descriptionPlaintext: "description_plaintext",
    kitchenName: "kitchen_name",
    isArchived: "is_archived",
    ecomSeoData: "ecom_seo_data",
    foodAndBeverageDetails: "food_and_beverage_details",
    reportingCategory: "reporting_category",
    isAlcoholic: "is_alcoholic",
  },
});
