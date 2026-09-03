import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  catalogItemOptionValueForItemVariationSchema,
  type CatalogItemOptionValueForItemVariation,
} from "./catalog-item-option-value-for-item-variation.js";
import {
  catalogItemVariationVendorInformationSchema,
  type CatalogItemVariationVendorInformation,
} from "./catalog-item-variation-vendor-information.js";
import { catalogPricingTypeSchema, type CatalogPricingType } from "./catalog-pricing-type.js";
import { catalogStockConversionSchema, type CatalogStockConversion } from "./catalog-stock-conversion.js";
import { inventoryAlertTypeSchema, type InventoryAlertType } from "./inventory-alert-type.js";
import {
  itemVariationLocationOverridesSchema,
  type ItemVariationLocationOverrides,
} from "./item-variation-location-overrides.js";
import { moneySchema, type Money } from "./money.js";

export type CatalogItemVariation = {
  itemId?: string | null;
  name?: string | null;
  sku?: string | null;
  upc?: string | null;
  ordinal?: number;
  pricingType?: CatalogPricingType;
  priceMoney?: Money;
  locationOverrides?: ItemVariationLocationOverrides[] | null;
  trackInventory?: boolean | null;
  inventoryAlertType?: InventoryAlertType;
  inventoryAlertThreshold?: number | null;
  userData?: string | null;
  serviceDuration?: number | null;
  availableForBooking?: boolean | null;
  itemOptionValues?: CatalogItemOptionValueForItemVariation[] | null;
  measurementUnitId?: string | null;
  sellable?: boolean | null;
  stockable?: boolean | null;
  imageIds?: string[] | null;
  teamMemberIds?: string[] | null;
  stockableConversion?: CatalogStockConversion;
  kitchenName?: string | null;
  vendorInformation?: CatalogItemVariationVendorInformation[] | null;
};

export const catalogItemVariationSchema: Schema<CatalogItemVariation> = s.object<CatalogItemVariation>({
  itemId: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  sku: s.optionalNullable(s.string()),
  upc: s.optionalNullable(s.string()),
  ordinal: s.optional(s.number()),
  pricingType: s.optional(s.lazy(() => catalogPricingTypeSchema)),
  priceMoney: s.optional(s.lazy(() => moneySchema)),
  locationOverrides: s.optionalNullable(s.array(s.lazy(() => itemVariationLocationOverridesSchema))),
  trackInventory: s.optionalNullable(s.boolean()),
  inventoryAlertType: s.optional(s.lazy(() => inventoryAlertTypeSchema)),
  inventoryAlertThreshold: s.optionalNullable(s.number()),
  userData: s.optionalNullable(s.string()),
  serviceDuration: s.optionalNullable(s.number()),
  availableForBooking: s.optionalNullable(s.boolean()),
  itemOptionValues: s.optionalNullable(s.array(s.lazy(() => catalogItemOptionValueForItemVariationSchema))),
  measurementUnitId: s.optionalNullable(s.string()),
  sellable: s.optionalNullable(s.boolean()),
  stockable: s.optionalNullable(s.boolean()),
  imageIds: s.optionalNullable(s.array(s.string())),
  teamMemberIds: s.optionalNullable(s.array(s.string())),
  stockableConversion: s.optional(s.lazy(() => catalogStockConversionSchema)),
  kitchenName: s.optionalNullable(s.string()),
  vendorInformation: s.optionalNullable(s.array(s.lazy(() => catalogItemVariationVendorInformationSchema))),
  _keysMap: {
    itemId: "item_id",
    pricingType: "pricing_type",
    priceMoney: "price_money",
    locationOverrides: "location_overrides",
    trackInventory: "track_inventory",
    inventoryAlertType: "inventory_alert_type",
    inventoryAlertThreshold: "inventory_alert_threshold",
    userData: "user_data",
    serviceDuration: "service_duration",
    availableForBooking: "available_for_booking",
    itemOptionValues: "item_option_values",
    measurementUnitId: "measurement_unit_id",
    imageIds: "image_ids",
    teamMemberIds: "team_member_ids",
    stockableConversion: "stockable_conversion",
    kitchenName: "kitchen_name",
    vendorInformation: "vendor_information",
  },
});
