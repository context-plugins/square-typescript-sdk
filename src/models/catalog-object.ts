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

export type CatalogObject = {
  type: CatalogObjectType;
  id: string;
  updatedAt?: string;
  version?: number;
  isDeleted?: boolean | null;
  customAttributeValues?: Record<string, CatalogCustomAttributeValue> | null;
  catalogV1Ids?: CatalogV1Id[] | null;
  presentAtAllLocations?: boolean | null;
  presentAtLocationIds?: string[] | null;
  absentAtLocationIds?: string[] | null;
  itemData?: CatalogItem;
  categoryData?: CatalogCategory;
  itemVariationData?: CatalogItemVariation;
  taxData?: CatalogTax;
  discountData?: CatalogDiscount;
  modifierListData?: CatalogModifierList;
  modifierData?: CatalogModifier;
  timePeriodData?: CatalogTimePeriod;
  productSetData?: CatalogProductSet;
  pricingRuleData?: CatalogPricingRule;
  imageData?: CatalogImage;
  measurementUnitData?: CatalogMeasurementUnit;
  subscriptionPlanData?: CatalogSubscriptionPlan;
  itemOptionData?: CatalogItemOption;
  itemOptionValueData?: CatalogItemOptionValue;
  customAttributeDefinitionData?: CatalogCustomAttributeDefinition;
  quickAmountsSettingsData?: CatalogQuickAmountsSettings;
  subscriptionPlanVariationData?: CatalogSubscriptionPlanVariation;
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
