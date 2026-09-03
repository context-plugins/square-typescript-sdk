import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CatalogObjectType = {
  Item: "ITEM",
  Image: "IMAGE",
  Category: "CATEGORY",
  ItemVariation: "ITEM_VARIATION",
  Tax: "TAX",
  Discount: "DISCOUNT",
  ModifierList: "MODIFIER_LIST",
  Modifier: "MODIFIER",
  PricingRule: "PRICING_RULE",
  ProductSet: "PRODUCT_SET",
  TimePeriod: "TIME_PERIOD",
  MeasurementUnit: "MEASUREMENT_UNIT",
  SubscriptionPlanVariation: "SUBSCRIPTION_PLAN_VARIATION",
  ItemOption: "ITEM_OPTION",
  ItemOptionVal: "ITEM_OPTION_VAL",
  CustomAttributeDefinition: "CUSTOM_ATTRIBUTE_DEFINITION",
  QuickAmountsSettings: "QUICK_AMOUNTS_SETTINGS",
  SubscriptionPlan: "SUBSCRIPTION_PLAN",
  AvailabilityPeriod: "AVAILABILITY_PERIOD",
} as const;
export type CatalogObjectType = (typeof CatalogObjectType)[keyof typeof CatalogObjectType] | (string & {});

export const catalogObjectTypeSchema: EnumSchema<CatalogObjectType> =
  s.enumOf<CatalogObjectType>(CatalogObjectType);
