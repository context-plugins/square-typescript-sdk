import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Possible types of CatalogObjects returned from the catalog, each containing type-specific
 * properties in the `*_data` field corresponding to the specified object type.
 */
export const CatalogObjectType = {
  /**
   * The `CatalogObject` instance is of the [CatalogItem](entity:CatalogItem) type and represents an
   * item. The item-specific data must be set on the `item_data` field.
   */
  Item: "ITEM",
  /**
   * The `CatalogObject` instance is of the [CatalogImage](entity:CatalogImage) type and represents
   * an image. The image-specific data must be set on the `image_data` field.
   */
  Image: "IMAGE",
  /**
   * The `CatalogObject` instance is of the [CatalogCategory](entity:CatalogCategory) type and
   * represents a category. The category-specific data must be set on the `category_data` field.
   */
  Category: "CATEGORY",
  /**
   * The `CatalogObject` instance is of the [CatalogItemVariation](entity:CatalogItemVariation) type
   * and represents an item variation, also referred to as variation. The item variation-specific
   * data must be set on the `item_variation_data` field.
   */
  ItemVariation: "ITEM_VARIATION",
  /**
   * The `CatalogObject` instance is of the [CatalogTax](entity:CatalogTax) type and represents a
   * tax. The tax-specific data must be set on the `tax_data` field.
   */
  Tax: "TAX",
  /**
   * The `CatalogObject` instance is of the [CatalogDiscount](entity:CatalogDiscount) type and
   * represents a discount. The discount-specific data must be set on the `discount_data` field.
   */
  Discount: "DISCOUNT",
  /**
   * The `CatalogObject` instance is of the [CatalogModifierList](entity:CatalogModifierList) type
   * and represents a modifier list. The modifier-list-specific data must be set on the
   * `modifier_list_data` field.
   */
  ModifierList: "MODIFIER_LIST",
  /**
   * The `CatalogObject` instance is of the [CatalogModifier](entity:CatalogModifier) type and
   * represents a modifier. The modifier-specific data must be set on the `modifier_data` field.
   */
  Modifier: "MODIFIER",
  /**
   * The `CatalogObject` instance is of the [CatalogPricingRule](entity:CatalogPricingRule) type and
   * represents a pricing rule. The pricing-rule-specific data must be set on the
   * `pricing_rule_data` field.
   */
  PricingRule: "PRICING_RULE",
  /**
   * The `CatalogObject` instance is of the [CatalogProductSet](entity:CatalogProductSet) type and
   * represents a product set. The product-set-specific data will be stored in the
   * `product_set_data` field.
   */
  ProductSet: "PRODUCT_SET",
  /**
   * The `CatalogObject` instance is of the [CatalogTimePeriod](entity:CatalogTimePeriod) type and
   * represents a time period. The time-period-specific data must be set on the `time_period_data`
   * field.
   */
  TimePeriod: "TIME_PERIOD",
  /**
   * The `CatalogObject` instance is of the [CatalogMeasurementUnit](entity:CatalogMeasurementUnit)
   * type and represents a measurement unit specifying the unit of measure and precision in which an
   * item variation is sold. The measurement-unit-specific data must set on the
   * `measurement_unit_data` field.
   */
  MeasurementUnit: "MEASUREMENT_UNIT",
  /**
   * The `CatalogObject` instance is of the
   * [CatalogSubscriptionPlan](entity:CatalogSubscriptionPlan) type and represents a subscription
   * plan. The subscription-plan-specific data must be stored on the `subscription_plan_data` field.
   */
  SubscriptionPlanVariation: "SUBSCRIPTION_PLAN_VARIATION",
  /**
   * The `CatalogObject` instance is of the [CatalogItemOption](entity:CatalogItemOption) type and
   * represents a list of options (such as a color or size of a T-shirt) that can be assigned to
   * item variations. The item-option-specific data must be on the `item_option_data` field.
   */
  ItemOption: "ITEM_OPTION",
  /**
   * The `CatalogObject` instance is of the [CatalogItemOptionValue](entity:CatalogItemOptionValue)
   * type and represents a value associated with one or more item options. For example, an item
   * option of "Size" may have item option values such as "Small" or "Medium". The
   * item-option-value-specific data must be on the `item_option_value_data` field.
   */
  ItemOptionVal: "ITEM_OPTION_VAL",
  /**
   * The `CatalogObject` instance is of the
   * [CatalogCustomAttributeDefinition](entity:CatalogCustomAttributeDefinition) type and represents
   * the definition of a custom attribute. The custom-attribute-definition-specific data must be set
   * on the `custom_attribute_definition_data` field.
   */
  CustomAttributeDefinition: "CUSTOM_ATTRIBUTE_DEFINITION",
  /**
   * The `CatalogObject` instance is of the
   * [CatalogQuickAmountsSettings](entity:CatalogQuickAmountsSettings) type and represents settings
   * to configure preset charges for quick payments at each location. For example, a location may
   * have a list of both AUTO and MANUAL quick amounts that are set to DISABLED. The
   * quick-amounts-settings-specific data must be set on the `quick_amounts_settings_data` field.
   */
  QuickAmountsSettings: "QUICK_AMOUNTS_SETTINGS",
  /**
   * The `CatalogObject` instance is of the
   * [CatalogSubscriptionPlan](entity:CatalogSubscriptionPlan) type and represents a subscription
   * plan. The subscription plan specific data must be stored on the `subscription_plan_data` field.
   */
  SubscriptionPlan: "SUBSCRIPTION_PLAN",
  /**
   * The `CatalogObject` instance is of the
   * [CatalogAvailabilityPeriod](entity:CatalogAvailabilityPeriod) type and represents an
   * availability period. The availability period specific data must be stored on the
   * `availability_period_data` field.
   */
  AvailabilityPeriod: "AVAILABILITY_PERIOD",
} as const;
export type CatalogObjectType = (typeof CatalogObjectType)[keyof typeof CatalogObjectType] | (string & {});

export const catalogObjectTypeSchema: EnumSchema<CatalogObjectType> =
  s.enumOf<CatalogObjectType>(CatalogObjectType);
