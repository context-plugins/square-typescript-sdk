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

/**
 * A [CatalogObject](entity:CatalogObject) instance of the `ITEM` type, also referred to as an item,
 * in the catalog.
 */
export type CatalogItem = {
  /**
   * The item's name. This is a searchable attribute for use in applicable query filters, its value
   * must not be empty, and the length is of Unicode code points.
   */
  name?: string | null;
  /**
   * The item's description. This is a searchable attribute for use in applicable query filters, and
   * its value length is of Unicode code points.
   *
   * Deprecated at 2022-07-20, this field is planned to retire in 6 months. You should migrate to
   * use `description_html` to set the description of the [CatalogItem](entity:CatalogItem)
   * instance. The `description` and `description_html` field values are kept in sync. If you try to
   * set the both fields, the `description_html` text value overwrites the `description` value.
   * Updates in one field are also reflected in the other, except for when you use an early version
   * before Square API 2022-07-20 and `description_html` is set to blank, setting the `description`
   * value to null does not nullify `description_html`.
   */
  description?: string | null;
  /**
   * The text of the item's display label in the Square Point of Sale app. Only up to the first five
   * characters of the string are used. This attribute is searchable, and its value length is of
   * Unicode code points.
   */
  abbreviation?: string | null;
  /**
   * The color of the item's display label in the Square Point of Sale app. This must be a valid hex
   * color code.
   */
  labelColor?: string | null;
  /** Indicates whether the item is taxable (`true`) or non-taxable (`false`). Default is `true`. */
  isTaxable?: boolean | null;
  /**
   * The ID of the item's category, if any. Deprecated since 2023-12-13. Use
   * `CatalogItem.categories`, instead.
   */
  categoryId?: string | null;
  /** The override to a product name to display to users */
  buyerFacingName?: string | null;
  /**
   * A set of IDs indicating the taxes enabled for this item. When updating an item, any taxes
   * listed here will be added to the item. Taxes may also be added to or deleted from an item using
   * `UpdateItemTaxes`.
   */
  taxIds?: string[] | null;
  /**
   * A set of `CatalogItemModifierListInfo` objects representing the modifier lists that apply to
   * this item, along with the overrides and min and max limits that are specific to this item.
   * Modifier lists may also be added to or deleted from an item using `UpdateItemModifierLists`.
   */
  modifierListInfo?: CatalogItemModifierListInfo[] | null;
  /**
   * A list of [CatalogItemVariation](entity:CatalogItemVariation) objects for this item. An item
   * must have at least one variation.
   */
  variations?: CatalogObject[] | null;
  /**
   * The type of a CatalogItem. Connect V2 only allows the creation of `REGULAR` or
   * `APPOINTMENTS_SERVICE` items.
   */
  productType?: CatalogItemProductType;
  /**
   * If `false`, the Square Point of Sale app will present the `CatalogItem`'s details screen
   * immediately, allowing the merchant to choose `CatalogModifier`s before adding the item to the
   * cart. This is the default behavior.
   *
   * If `true`, the Square Point of Sale app will immediately add the item to the cart with the
   * pre-selected modifiers, and merchants can edit modifiers by drilling down onto the item's
   * details.
   *
   * Third-party clients are encouraged to implement similar behaviors.
   */
  skipModifierScreen?: boolean | null;
  /**
   * List of item options IDs for this item. Used to manage and group item variations in a specified
   * order.
   *
   * Maximum: 6 item options.
   */
  itemOptions?: CatalogItemOptionForItem[] | null;
  /** Deprecated. A URI pointing to a published e-commerce product page for the Item. */
  ecomUri?: string | null;
  /**
   * Deprecated. A comma-separated list of encoded URIs pointing to a set of published e-commerce
   * images for the Item.
   */
  ecomImageUris?: string[] | null;
  /**
   * The IDs of images associated with this `CatalogItem` instance. These images will be shown to
   * customers in Square Online Store. The first image will show up as the icon for this item in
   * POS.
   */
  imageIds?: string[] | null;
  /**
   * A name to sort the item by. If this name is unspecified, namely, the `sort_name` field is
   * absent, the regular `name` field is used for sorting. Its value must not be empty.
   *
   * It is currently supported for sellers of the Japanese locale only.
   */
  sortName?: string | null;
  /**
   * The list of categories to which this item belongs. Each entry includes the category ID and an
   * ordinal value that determines the item's relative position within that category.
   */
  categories?: CatalogObjectCategory[] | null;
  /**
   * The item's description as expressed in valid HTML elements. The length of this field value,
   * including those of HTML tags, is of Unicode points. With application query filters, the text
   * values of the HTML elements and attributes are searchable. Invalid or unsupported HTML elements
   * or attributes are ignored.
   *
   * Supported HTML elements include:
   * - `a`: Link. Supports linking to website URLs, email address, and telephone numbers.
   * - `b`, `strong`: Bold text
   * - `br`: Line break
   * - `code`: Computer code
   * - `div`: Section
   * - `h1-h6`: Headings
   * - `i`, `em`: Italics
   * - `li`: List element
   * - `ol`: Numbered list
   * - `p`: Paragraph
   * - `ul`: Bullet list
   * - `u`: Underline
   *
   *
   * Supported HTML attributes include:
   * - `align`: Alignment of the text content
   * - `href`: Link destination
   * - `rel`: Relationship between link's target and source
   * - `target`: Place to open the linked document
   */
  descriptionHtml?: string | null;
  /**
   * A server-generated plaintext version of the `description_html` field, without formatting tags.
   */
  descriptionPlaintext?: string;
  /**
   * (Optional) Name that the restaurant wants to display to their kitchen workers instead of the
   * customer-facing name. e.g., customer name might be "Big John's Mega Burger" and the kitchen
   * name is "12oz beef burger"
   */
  kitchenName?: string | null;
  /**
   * A list of IDs representing channels, such as a Square Online site, where the item can be made
   * visible or available. This field is read only and cannot be edited.
   */
  channels?: string[] | null;
  /** Indicates whether this item is archived (`true`) or not (`false`). */
  isArchived?: boolean | null;
  /** SEO data for for a seller's Square Online store. */
  ecomSeoData?: CatalogEcomSeoData;
  /** The food and beverage-specific details of a `FOOD_AND_BEV` item. */
  foodAndBeverageDetails?: CatalogItemFoodAndBeverageDetails;
  /**
   * A category that can be assigned to an item or a parent category that can be assigned to another
   * category. For example, a clothing category can be assigned to a t-shirt item or be made as the
   * parent category to the pants category.
   */
  reportingCategory?: CatalogObjectCategory;
  /** Indicates whether this item is alcoholic (`true`) or not (`false`). */
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
