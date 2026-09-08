import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  catalogAvailabilityPeriodSchema,
  type CatalogAvailabilityPeriod,
} from "./catalog-availability-period.js";
import { catalogCategorySchema, type CatalogCategory } from "./catalog-category.js";
import {
  catalogCustomAttributeDefinitionSchema,
  type CatalogCustomAttributeDefinition,
} from "./catalog-custom-attribute-definition.js";
import {
  catalogCustomAttributeValueSchema,
  type CatalogCustomAttributeValue,
} from "./catalog-custom-attribute-value.js";
import { catalogDiscountSchema, type CatalogDiscount } from "./catalog-discount.js";
import { catalogImageSchema, type CatalogImage } from "./catalog-image.js";
import { catalogItemOptionValueSchema, type CatalogItemOptionValue } from "./catalog-item-option-value.js";
import { catalogItemOptionSchema, type CatalogItemOption } from "./catalog-item-option.js";
import { catalogItemVariationSchema, type CatalogItemVariation } from "./catalog-item-variation.js";
import { catalogItemSchema, type CatalogItem } from "./catalog-item.js";
import { catalogMeasurementUnitSchema, type CatalogMeasurementUnit } from "./catalog-measurement-unit.js";
import { catalogModifierListSchema, type CatalogModifierList } from "./catalog-modifier-list.js";
import { catalogModifierSchema, type CatalogModifier } from "./catalog-modifier.js";
import { catalogObjectTypeSchema, type CatalogObjectType } from "./catalog-object-type.js";
import { catalogPricingRuleSchema, type CatalogPricingRule } from "./catalog-pricing-rule.js";
import { catalogProductSetSchema, type CatalogProductSet } from "./catalog-product-set.js";
import {
  catalogQuickAmountsSettingsSchema,
  type CatalogQuickAmountsSettings,
} from "./catalog-quick-amounts-settings.js";
import {
  catalogSubscriptionPlanVariationSchema,
  type CatalogSubscriptionPlanVariation,
} from "./catalog-subscription-plan-variation.js";
import { catalogSubscriptionPlanSchema, type CatalogSubscriptionPlan } from "./catalog-subscription-plan.js";
import { catalogTaxSchema, type CatalogTax } from "./catalog-tax.js";
import { catalogTimePeriodSchema, type CatalogTimePeriod } from "./catalog-time-period.js";
import { catalogV1IdSchema, type CatalogV1Id } from "./catalog-v1-id.js";

/**
 * The wrapper object for the catalog entries of a given object type.
 *
 * Depending on the `type` attribute value, a `CatalogObject` instance assumes a type-specific data
 * to yield the corresponding type of catalog object.
 *
 * For example, if `type=ITEM`, the `CatalogObject` instance must have the ITEM-specific data set on
 * the `item_data` attribute. The resulting `CatalogObject` instance is also a `CatalogItem`
 * instance.
 *
 * In general, if `type=<OBJECT_TYPE>`, the `CatalogObject` instance must have the
 * `<OBJECT_TYPE>`-specific data set on the `<object_type>_data` attribute. The resulting
 * `CatalogObject` instance is also a `Catalog<ObjectType>` instance.
 *
 * For a more detailed discussion of the Catalog data model, please see the [Design a
 * Catalog](https://developer.squareup.com/docs/catalog-api/design-a-catalog) guide.
 */
export type CatalogObject = {
  /**
   * Possible types of CatalogObjects returned from the catalog, each containing type-specific
   * properties in the `*_data` field corresponding to the specified object type.
   */
  type: CatalogObjectType;
  /**
   * An identifier to reference this object in the catalog. When a new `CatalogObject` is inserted,
   * the client should set the id to a temporary identifier starting with a "`#`" character. Other
   * objects being inserted or updated within the same request may use this identifier to refer to
   * the new object.
   *
   * When the server receives the new object, it will supply a unique identifier that replaces the
   * temporary identifier for all future references.
   */
  id: string;
  /**
   * Last modification
   * [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates) in RFC 3339
   * format, e.g., `"2016-08-15T23:59:33.123Z"` would indicate the UTC time (denoted by `Z`) of
   * August 15, 2016 at 23:59:33 and 123 milliseconds.
   */
  updatedAt?: string;
  /**
   * The version of the object. When updating an object, the version supplied should match the
   * version in the database. If it does not, the server attempts a three-way merge. If the client's
   * changes and the concurrent changes don't overlap, the merge succeeds silently. A
   * `VERSION_MISMATCH` error is only returned when both sides changed the same field to different
   * values.
   *
   * Use the same API version (`Square-Version` header) for both reading and writing catalog
   * objects. The server uses the API version on a write request to determine which missing fields
   * the client intentionally cleared versus which fields the client simply could not see at that
   * version. If a client reads an object at an older API version and writes it back at a newer
   * version, fields that were introduced between those two versions will be absent from the
   * request, and the server will interpret that absence as an intentional clear.
   */
  version?: number;
  /**
   * If `true`, the object has been deleted from the database. Must be `false` for new objects being
   * inserted. When deleted, the `updated_at` field will equal the deletion time.
   */
  isDeleted?: boolean | null;
  /**
   * A map (key-value pairs) of application-defined custom attribute values. The value of a
   * key-value pair is a [CatalogCustomAttributeValue](entity:CatalogCustomAttributeValue) object.
   * The key is the `key` attribute value defined in the associated
   * [CatalogCustomAttributeDefinition](entity:CatalogCustomAttributeDefinition) object defined by
   * the application making the request.
   *
   * If the `CatalogCustomAttributeDefinition` object is defined by another application, the
   * `CatalogCustomAttributeDefinition`'s key attribute value is prefixed by the defining
   * application ID. For example, if the `CatalogCustomAttributeDefinition` has a `key` attribute of
   * `"cocoa_brand"` and the defining application ID is `"abcd1234"`, the key in the map is
   * `"abcd1234:cocoa_brand"` if the application making the request is different from the
   * application defining the custom attribute definition. Otherwise, the key used in the map is
   * simply `"cocoa_brand"`.
   *
   * Application-defined custom attributes are set at a global (location-independent) level. Custom
   * attribute values are intended to store additional information about a catalog object or
   * associations with an entity in another system. Do not use custom attributes to store any
   * sensitive information (personally identifiable information, card details, etc.).
   */
  customAttributeValues?: Record<string, CatalogCustomAttributeValue> | null;
  /**
   * The Connect v1 IDs for this object at each location where it is present, where they differ from
   * the object's Connect V2 ID. The field will only be present for objects that have been created
   * or modified by legacy APIs.
   */
  catalogV1Ids?: CatalogV1Id[] | null;
  /**
   * Controls whether this object is present at all locations, including future locations.
   *
   * Most object types have independent location control, including `TAX`, `DISCOUNT`, and
   * `MODIFIER_LIST`.
   *
   * `ITEM` and `ITEM_VARIATION` have separate settings, but a variation can only be enabled at
   * locations where its parent item is enabled. Disabling a variation everywhere is valid even when
   * the parent item is enabled at specific locations.
   *
   * `MODIFIER` objects nested within a `MODIFIER_LIST` inherit location settings from their parent.
   * Some object types, including `CATEGORY`, `IMAGE`, and `CUSTOM_ATTRIBUTE_DEFINITION`, must
   * always be globally enabled and cannot use location-specific fields.
   *
   * The field operates in two modes. When true (the default), the object is available at all
   * current and future locations except those in `absent_at_location_ids`. When false, the object
   * is available only at locations in `present_at_location_ids`. The unused list in each mode is
   * ignored.
   */
  presentAtAllLocations?: boolean | null;
  /**
   * Locations where the object is present, used when `present_at_all_locations` is false.
   *
   * When `present_at_all_locations` is true, this field is ignored since the object is already
   * present everywhere. Can include deactivated locations. Empty strings are rejected.
   */
  presentAtLocationIds?: string[] | null;
  /**
   * Locations where the object is not present, used when `present_at_all_locations` is true.
   *
   * When `present_at_all_locations` is false, this field is ignored since the object is already
   * absent everywhere except those in `present_at_location_ids`. Can include deactivated locations.
   * Empty strings are rejected.
   */
  absentAtLocationIds?: string[] | null;
  /**
   * A [CatalogObject](entity:CatalogObject) instance of the `ITEM` type, also referred to as an
   * item, in the catalog.
   */
  itemData?: CatalogItem;
  /** A category to which a `CatalogItem` instance belongs. */
  categoryData?: CatalogCategory;
  /**
   * An item variation, representing a product for sale, in the Catalog object model. Each
   * [item](entity:CatalogItem) must have at least one item variation and can have at most 250 item
   * variations.
   *
   * An item variation can be sellable, stockable, or both if it has a unit of measure for its count
   * for the sold number of the variation, the stocked number of the variation, or both. For
   * example, when a variation representing wine is stocked and sold by the bottle, the variation is
   * both stockable and sellable. But when a variation of the wine is sold by the glass, the sold
   * units cannot be used as a measure of the stocked units. This by-the-glass variation is
   * sellable, but not stockable. To accurately keep track of the wine's inventory count at any
   * time, the sellable count must be converted to stockable count. Typically, the seller defines
   * this unit conversion. For example, 1 bottle equals 5 glasses. The Square API exposes the
   * `stockable_conversion` property on the variation to specify the conversion. Thus, when two
   * glasses of the wine are sold, the sellable count decreases by 2, and the stockable count
   * automatically decreases by 0.4 bottle according to the conversion.
   */
  itemVariationData?: CatalogItemVariation;
  /** A tax applicable to an item. */
  taxData?: CatalogTax;
  /** A discount applicable to items. */
  discountData?: CatalogDiscount;
  /**
   * A container for a list of modifiers, or a text-based modifier. For text-based modifiers, this
   * represents text configuration for an item. (For example, custom text to print on a t-shirt).
   * For non text-based modifiers, this represents a list of modifiers that can be applied to items
   * at the time of sale. (For example, a list of condiments for a hot dog, or a list of ice cream
   * flavors). Each element of the modifier list is a `CatalogObject` instance of the `MODIFIER`
   * type.
   */
  modifierListData?: CatalogModifierList;
  /**
   * A modifier that can be applied to items at the time of sale. For example, a cheese modifier for
   * a burger, or a flavor modifier for a serving of ice cream.
   */
  modifierData?: CatalogModifier;
  /** Represents a time period - either a single period or a repeating period. */
  timePeriodData?: CatalogTimePeriod;
  /**
   * Represents a collection of catalog objects for the purpose of applying a `PricingRule`.
   * Including a catalog object will include all of its subtypes. For example, including a category
   * in a product set will include all of its items and associated item variations in the product
   * set. Including an item in a product set will also include its item variations.
   */
  productSetData?: CatalogProductSet;
  /**
   * Defines how discounts are automatically applied to a set of items that match the pricing rule
   * during the active time period.
   */
  pricingRuleData?: CatalogPricingRule;
  /**
   * An image file to use in Square catalogs. It can be associated with `CatalogItem`,
   * `CatalogItemVariation`, `CatalogCategory`, and `CatalogModifierList` objects. Only the images
   * on items and item variations are exposed in Dashboard. Only the first image on an item is
   * displayed in Square Point of Sale (SPOS). Images on items and variations are displayed through
   * Square Online Store. Images on other object types are for use by 3rd party application
   * developers.
   */
  imageData?: CatalogImage;
  /**
   * Represents the unit used to measure a `CatalogItemVariation` and specifies the precision for
   * decimal quantities.
   */
  measurementUnitData?: CatalogMeasurementUnit;
  /**
   * Describes a subscription plan. A subscription plan represents what you want to sell in a
   * subscription model, and includes references to each of the associated subscription plan
   * variations. For more information, see [Subscription Plans and
   * Variations](https://developer.squareup.com/docs/subscriptions-api/plans-and-variations).
   */
  subscriptionPlanData?: CatalogSubscriptionPlan;
  /** A group of variations for a `CatalogItem`. */
  itemOptionData?: CatalogItemOption;
  /**
   * An enumerated value that can link a `CatalogItemVariation` to an item option as one of its item
   * option values.
   */
  itemOptionValueData?: CatalogItemOptionValue;
  /**
   * Contains information defining a custom attribute. Custom attributes are intended to store
   * additional information about a catalog object or to associate a catalog object with an entity
   * in another system. Do not use custom attributes to store any sensitive information (personally
   * identifiable information, card details, etc.). [Read more about custom
   * attributes](https://developer.squareup.com/docs/catalog-api/add-custom-attributes)
   */
  customAttributeDefinitionData?: CatalogCustomAttributeDefinition;
  /**
   * A parent Catalog Object model represents a set of Quick Amounts and the settings control the
   * amounts.
   */
  quickAmountsSettingsData?: CatalogQuickAmountsSettings;
  /**
   * Describes a subscription plan variation. A subscription plan variation represents how the
   * subscription for a product or service is sold. For more information, see [Subscription Plans
   * and Variations](https://developer.squareup.com/docs/subscriptions-api/plans-and-variations).
   */
  subscriptionPlanVariationData?: CatalogSubscriptionPlanVariation;
  /** Represents a time period of availability. */
  availabilityPeriodData?: CatalogAvailabilityPeriod;
};

export const catalogObjectSchema: Schema<CatalogObject> = s.object<CatalogObject>({
  type: catalogObjectTypeSchema,
  id: s.string(),
  updatedAt: s.optional(s.string()),
  version: s.optional(s.number()),
  isDeleted: s.optionalNullable(s.boolean()),
  customAttributeValues: s.optionalNullable(
    s.record(
      s.string(),
      s.lazy(() => catalogCustomAttributeValueSchema),
    ),
  ),
  catalogV1Ids: s.optionalNullable(s.array(s.lazy(() => catalogV1IdSchema))),
  presentAtAllLocations: s.optionalNullable(s.boolean()),
  presentAtLocationIds: s.optionalNullable(s.array(s.string())),
  absentAtLocationIds: s.optionalNullable(s.array(s.string())),
  itemData: s.optional(s.lazy(() => catalogItemSchema)),
  categoryData: s.optional(s.lazy(() => catalogCategorySchema)),
  itemVariationData: s.optional(s.lazy(() => catalogItemVariationSchema)),
  taxData: s.optional(s.lazy(() => catalogTaxSchema)),
  discountData: s.optional(s.lazy(() => catalogDiscountSchema)),
  modifierListData: s.optional(s.lazy(() => catalogModifierListSchema)),
  modifierData: s.optional(s.lazy(() => catalogModifierSchema)),
  timePeriodData: s.optional(s.lazy(() => catalogTimePeriodSchema)),
  productSetData: s.optional(s.lazy(() => catalogProductSetSchema)),
  pricingRuleData: s.optional(s.lazy(() => catalogPricingRuleSchema)),
  imageData: s.optional(s.lazy(() => catalogImageSchema)),
  measurementUnitData: s.optional(s.lazy(() => catalogMeasurementUnitSchema)),
  subscriptionPlanData: s.optional(s.lazy(() => catalogSubscriptionPlanSchema)),
  itemOptionData: s.optional(s.lazy(() => catalogItemOptionSchema)),
  itemOptionValueData: s.optional(s.lazy(() => catalogItemOptionValueSchema)),
  customAttributeDefinitionData: s.optional(s.lazy(() => catalogCustomAttributeDefinitionSchema)),
  quickAmountsSettingsData: s.optional(s.lazy(() => catalogQuickAmountsSettingsSchema)),
  subscriptionPlanVariationData: s.optional(s.lazy(() => catalogSubscriptionPlanVariationSchema)),
  availabilityPeriodData: s.optional(s.lazy(() => catalogAvailabilityPeriodSchema)),
  _keysMap: {
    updatedAt: "updated_at",
    isDeleted: "is_deleted",
    customAttributeValues: "custom_attribute_values",
    catalogV1Ids: "catalog_v1_ids",
    presentAtAllLocations: "present_at_all_locations",
    presentAtLocationIds: "present_at_location_ids",
    absentAtLocationIds: "absent_at_location_ids",
    itemData: "item_data",
    categoryData: "category_data",
    itemVariationData: "item_variation_data",
    taxData: "tax_data",
    discountData: "discount_data",
    modifierListData: "modifier_list_data",
    modifierData: "modifier_data",
    timePeriodData: "time_period_data",
    productSetData: "product_set_data",
    pricingRuleData: "pricing_rule_data",
    imageData: "image_data",
    measurementUnitData: "measurement_unit_data",
    subscriptionPlanData: "subscription_plan_data",
    itemOptionData: "item_option_data",
    itemOptionValueData: "item_option_value_data",
    customAttributeDefinitionData: "custom_attribute_definition_data",
    quickAmountsSettingsData: "quick_amounts_settings_data",
    subscriptionPlanVariationData: "subscription_plan_variation_data",
    availabilityPeriodData: "availability_period_data",
  },
});
