import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * A service charge to block from applying to a line item. The service charge must be identified by
 * either `service_charge_uid` or `service_charge_catalog_object_id`, but not both.
 */
export type OrderLineItemPricingBlocklistsBlockedServiceCharge = {
  /** A unique ID of the `BlockedServiceCharge` within the order. */
  uid?: string | null;
  /**
   * The `uid` of the service charge that should be blocked. Use this field to block ad hoc service
   * charges. For catalog service charges, use the `service_charge_catalog_object_id` field.
   */
  serviceChargeUid?: string | null;
  /**
   * The `catalog_object_id` of the service charge that should be blocked. Use this field to block
   * catalog service charges. For ad hoc service charges, use the `service_charge_uid` field.
   */
  serviceChargeCatalogObjectId?: string | null;
};

export const orderLineItemPricingBlocklistsBlockedServiceChargeSchema: Schema<OrderLineItemPricingBlocklistsBlockedServiceCharge> =
  s.object<OrderLineItemPricingBlocklistsBlockedServiceCharge>({
    uid: s.optionalNullable(s.string()),
    serviceChargeUid: s.optionalNullable(s.string()),
    serviceChargeCatalogObjectId: s.optionalNullable(s.string()),
    _keysMap: {
      serviceChargeUid: "service_charge_uid",
      serviceChargeCatalogObjectId: "service_charge_catalog_object_id",
    },
  });
