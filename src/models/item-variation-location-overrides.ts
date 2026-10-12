import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogPricingTypeSchema, type CatalogPricingType } from "./catalog-pricing-type.js";
import { inventoryAlertTypeSchema, type InventoryAlertType } from "./inventory-alert-type.js";
import { moneySchema, type Money } from "./money.js";

/** Price and inventory alerting overrides for a `CatalogItemVariation` at a specific `Location`. */
export type ItemVariationLocationOverrides = {
  /** The ID of the `Location`. This can include locations that are deactivated. */
  locationId?: string | null;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  priceMoney?: Money;
  /**
   * Indicates whether the price of a CatalogItemVariation should be entered manually at the time of
   * sale.
   */
  pricingType?: CatalogPricingType;
  /**
   * Indicates whether inventory tracking is active for the `CatalogItemVariation` at this
   * `Location`. When set, this value explicitly overrides the global `track_inventory` setting.
   * When unset, the location should use the global value. If both global and location-level values
   * are unset, inventory tracking is disabled.
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
   * dashboard.
   *
   * This value is always an integer.
   */
  inventoryAlertThreshold?: number | null;
  /**
   * Indicates whether the overridden item variation is sold out at the specified location.
   *
   * When inventory tracking is enabled on the item variation either globally or at the specified
   * location, the item variation is automatically marked as sold out when its inventory count
   * reaches zero. The seller can manually set the item variation as sold out even when the
   * inventory count is greater than zero. Attempts by an application to set this attribute are
   * ignored. Regardless how the sold-out status is set, applications should treat its inventory
   * count as zero when this attribute value is `true`.
   */
  soldOut?: boolean;
  /**
   * The seller-assigned timestamp, of the RFC 3339 format, to indicate when this sold-out variation
   * becomes available again at the specified location. Attempts by an application to set this
   * attribute are ignored. When the current time is later than this attribute value, the affected
   * item variation is no longer sold out.
   */
  soldOutValidUntil?: string;
};

export const itemVariationLocationOverridesSchema: Schema<ItemVariationLocationOverrides> =
  s.object<ItemVariationLocationOverrides>({
    locationId: s.optionalNullable(s.string()),
    priceMoney: s.optional(s.lazy(() => moneySchema)),
    pricingType: s.optional(s.lazy(() => catalogPricingTypeSchema)),
    trackInventory: s.optionalNullable(s.boolean()),
    inventoryAlertType: s.optional(s.lazy(() => inventoryAlertTypeSchema)),
    inventoryAlertThreshold: s.optionalNullable(s.int()),
    soldOut: s.optional(s.boolean()),
    soldOutValidUntil: s.optional(s.string()),
    _keysMap: {
      locationId: "location_id",
      priceMoney: "price_money",
      pricingType: "pricing_type",
      trackInventory: "track_inventory",
      inventoryAlertType: "inventory_alert_type",
      inventoryAlertThreshold: "inventory_alert_threshold",
      soldOut: "sold_out",
      soldOutValidUntil: "sold_out_valid_until",
    },
  });
