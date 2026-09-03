import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OrderLineItemPricingBlocklistsBlockedServiceCharge = {
  uid?: string | null;
  serviceChargeUid?: string | null;
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
