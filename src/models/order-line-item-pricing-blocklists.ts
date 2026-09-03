import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  orderLineItemPricingBlocklistsBlockedDiscountSchema,
  type OrderLineItemPricingBlocklistsBlockedDiscount,
} from "./order-line-item-pricing-blocklists-blocked-discount.js";
import {
  orderLineItemPricingBlocklistsBlockedServiceChargeSchema,
  type OrderLineItemPricingBlocklistsBlockedServiceCharge,
} from "./order-line-item-pricing-blocklists-blocked-service-charge.js";
import {
  orderLineItemPricingBlocklistsBlockedTaxSchema,
  type OrderLineItemPricingBlocklistsBlockedTax,
} from "./order-line-item-pricing-blocklists-blocked-tax.js";

export type OrderLineItemPricingBlocklists = {
  blockedDiscounts?: OrderLineItemPricingBlocklistsBlockedDiscount[] | null;
  blockedTaxes?: OrderLineItemPricingBlocklistsBlockedTax[] | null;
  blockedServiceCharges?: OrderLineItemPricingBlocklistsBlockedServiceCharge[] | null;
};

export const orderLineItemPricingBlocklistsSchema: Schema<OrderLineItemPricingBlocklists> =
  s.object<OrderLineItemPricingBlocklists>({
    blockedDiscounts: s.optionalNullable(
      s.array(s.lazy(() => orderLineItemPricingBlocklistsBlockedDiscountSchema)),
    ),
    blockedTaxes: s.optionalNullable(s.array(s.lazy(() => orderLineItemPricingBlocklistsBlockedTaxSchema))),
    blockedServiceCharges: s.optionalNullable(
      s.array(s.lazy(() => orderLineItemPricingBlocklistsBlockedServiceChargeSchema)),
    ),
    _keysMap: {
      blockedDiscounts: "blocked_discounts",
      blockedTaxes: "blocked_taxes",
      blockedServiceCharges: "blocked_service_charges",
    },
  });
