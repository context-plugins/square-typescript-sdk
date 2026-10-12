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

/**
 * An item variation, representing a product for sale, in the Catalog object model. Each
 * [item](entity:CatalogItem) must have at least one item variation and can have at most 250 item
 * variations.
 *
 * An item variation can be sellable, stockable, or both if it has a unit of measure for its count
 * for the sold number of the variation, the stocked number of the variation, or both. For example,
 * when a variation representing wine is stocked and sold by the bottle, the variation is both
 * stockable and sellable. But when a variation of the wine is sold by the glass, the sold units
 * cannot be used as a measure of the stocked units. This by-the-glass variation is sellable, but
 * not stockable. To accurately keep track of the wine's inventory count at any time, the sellable
 * count must be converted to stockable count. Typically, the seller defines this unit conversion.
 * For example, 1 bottle equals 5 glasses. The Square API exposes the `stockable_conversion`
 * property on the variation to specify the conversion. Thus, when two glasses of the wine are sold,
 * the sellable count decreases by 2, and the stockable count automatically decreases by 0.4 bottle
 * according to the conversion.
 */
export type CatalogItemVariation = {
  /** The ID of the `CatalogItem` associated with this item variation. */
  itemId?: string | null;
  /**
   * The item variation's name. This is a searchable attribute for use in applicable query filters.
   *
   * Its value has a maximum length of 255 Unicode code points. However, when the parent
   * [item](entity:CatalogItem) uses [item options](entity:CatalogItemOption), this attribute is
   * auto-generated, read-only, and can be longer than 255 Unicode code points.
   */
  name?: string | null;
  /**
   * The item variation's SKU, if any. This is a searchable attribute for use in applicable query
   * filters.
   */
  sku?: string | null;
  /**
   * The universal product code (UPC) of the item variation, if any. This is a searchable attribute
   * for use in applicable query filters.
   *
   * The value of this attribute should be a number of 12-14 digits long. This restriction is
   * enforced on the Square Seller Dashboard, Square Point of Sale or Retail Point of Sale apps,
   * where this attribute shows in the GTIN field. If a non-compliant UPC value is assigned to this
   * attribute using the API, the value is not editable on the Seller Dashboard, Square Point of
   * Sale or Retail Point of Sale apps unless it is updated to fit the expected format.
   */
  upc?: string | null;
  /**
   * The order in which this item variation should be displayed. This value is read-only. On writes,
   * the ordinal for each item variation within a parent `CatalogItem` is set according to the item
   * variations's position. On reads, the value is not guaranteed to be sequential or unique.
   */
  ordinal?: number;
  /**
   * Indicates whether the price of a CatalogItemVariation should be entered manually at the time of
   * sale.
   */
  pricingType?: CatalogPricingType;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  priceMoney?: Money;
  /** Per-location price and inventory overrides. */
  locationOverrides?: ItemVariationLocationOverrides[] | null;
  /**
   * If `true`, inventory tracking is active for the variation at all locations by default. This
   * value can be overridden for specific locations using
   * `ItemVariationLocationOverrides.track_inventory`. If unset at both levels, inventory tracking
   * is disabled.
   */
  trackInventory?: boolean | null;
  /**
   * Indicates whether Square should alert the merchant when the inventory quantity of a
   * CatalogItemVariation is low.
   */
  inventoryAlertType?: InventoryAlertType;
  /**
   * If the inventory quantity for the variation is less than or equal to this value and
   * `inventory_alert_type` is `LOW_QUANTITY`, the variation displays an alert in the merchant
   * dashboard. This value is always an integer.
   *
   * Deprecated because this field has never been global.
   */
  inventoryAlertThreshold?: number | null;
  /**
   * Arbitrary user metadata to associate with the item variation. This attribute value length is of
   * Unicode code points.
   */
  userData?: string | null;
  /**
   * If the `CatalogItem` that owns this item variation is of type `APPOINTMENTS_SERVICE`, then this
   * is the duration of the service in milliseconds. For example, a 30 minute appointment would have
   * the value `1800000`, which is equal to 30 (minutes) * 60 (seconds per minute) * 1000
   * (milliseconds per second).
   */
  serviceDuration?: number | null;
  /**
   * If the `CatalogItem` that owns this item variation is of type `APPOINTMENTS_SERVICE`, a bool
   * representing whether this service is available for booking.
   */
  availableForBooking?: boolean | null;
  /**
   * List of item option values associated with this item variation. Listed in the same order as the
   * item options of the parent item.
   */
  itemOptionValues?: CatalogItemOptionValueForItemVariation[] | null;
  /**
   * ID of the ‘CatalogMeasurementUnit’ that is used to measure the quantity sold of this item
   * variation. If left unset, the item will be sold in whole quantities.
   */
  measurementUnitId?: string | null;
  /**
   * Whether this variation can be sold. The inventory count of a sellable variation indicates the
   * number of units available for sale. When a variation is both stockable and sellable, its
   * sellable inventory count can be smaller than or equal to its stockable count.
   */
  sellable?: boolean | null;
  /**
   * Whether stock is counted directly on this variation (TRUE) or only on its components (FALSE).
   * When a variation is both stockable and sellable, the inventory count of a stockable variation
   * keeps track of the number of units of this variation in stock and is not an indicator of the
   * number of units of the variation that can be sold.
   */
  stockable?: boolean | null;
  /**
   * The IDs of images associated with this `CatalogItemVariation` instance. These images will be
   * shown to customers in Square Online Store.
   */
  imageIds?: string[] | null;
  /**
   * Tokens of employees that can perform the service represented by this variation. Only valid for
   * variations of type `APPOINTMENTS_SERVICE`.
   */
  teamMemberIds?: string[] | null;
  /**
   * Represents the rule of conversion between a stockable
   * [CatalogItemVariation](entity:CatalogItemVariation) and a non-stockable sell-by or receive-by
   * `CatalogItemVariation` that share the same underlying stock.
   */
  stockableConversion?: CatalogStockConversion;
  /**
   * (Optional) Name that the restaurant wants to display to their kitchen workers instead of the
   * customer-facing name. e.g., customer name might be "Mega-Jumbo Triplesized" and the kitchen
   * name is "Large container"
   */
  kitchenName?: string | null;
  /**
   * Details of the vendor this product is purchased from. This field can be set only if the seller
   * has an active subscription to either Square for Retail Premium or Square for Restaurants
   * Premium.
   */
  vendorInformation?: CatalogItemVariationVendorInformation[] | null;
};

export const catalogItemVariationSchema: Schema<CatalogItemVariation> = s.object<CatalogItemVariation>({
  itemId: s.optionalNullable(s.string()),
  name: s.optionalNullable(s.string()),
  sku: s.optionalNullable(s.string()),
  upc: s.optionalNullable(s.string()),
  ordinal: s.optional(s.int()),
  pricingType: s.optional(s.lazy(() => catalogPricingTypeSchema)),
  priceMoney: s.optional(s.lazy(() => moneySchema)),
  locationOverrides: s.optionalNullable(s.array(s.lazy(() => itemVariationLocationOverridesSchema))),
  trackInventory: s.optionalNullable(s.boolean()),
  inventoryAlertType: s.optional(s.lazy(() => inventoryAlertTypeSchema)),
  inventoryAlertThreshold: s.optionalNullable(s.int()),
  userData: s.optionalNullable(s.string()),
  serviceDuration: s.optionalNullable(s.int()),
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
