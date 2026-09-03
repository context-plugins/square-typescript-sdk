import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogPricingTypeSchema, type CatalogPricingType } from "./catalog-pricing-type.js";
import { inventoryAlertTypeSchema, type InventoryAlertType } from "./inventory-alert-type.js";
import { moneySchema, type Money } from "./money.js";

export type ItemVariationLocationOverrides = {
  locationId?: string | null;
  priceMoney?: Money;
  pricingType?: CatalogPricingType;
  trackInventory?: boolean | null;
  inventoryAlertType?: InventoryAlertType;
  inventoryAlertThreshold?: number | null;
  soldOut?: boolean;
  soldOutValidUntil?: string;
};

export const itemVariationLocationOverridesSchema: Schema<ItemVariationLocationOverrides> =
  s.object<ItemVariationLocationOverrides>({
    locationId: s.optionalNullable(s.string()),
    priceMoney: s.optional(s.lazy(() => moneySchema)),
    pricingType: s.optional(s.lazy(() => catalogPricingTypeSchema)),
    trackInventory: s.optionalNullable(s.boolean()),
    inventoryAlertType: s.optional(s.lazy(() => inventoryAlertTypeSchema)),
    inventoryAlertThreshold: s.optionalNullable(s.number()),
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
