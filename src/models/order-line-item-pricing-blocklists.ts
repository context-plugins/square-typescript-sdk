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

/**
 * Describes pricing adjustments that are blocked from automatic application to a line item. For
 * more information, see [Apply Taxes and
 * Discounts](https://developer.squareup.com/docs/orders-api/apply-taxes-and-discounts).
 */
export type OrderLineItemPricingBlocklists = {
  /**
   * A list of discounts blocked from applying to the line item. Discounts can be blocked by the
   * `discount_uid` (for ad hoc discounts) or the `discount_catalog_object_id` (for catalog
   * discounts).
   */
  blockedDiscounts?: OrderLineItemPricingBlocklistsBlockedDiscount[] | null;
  /**
   * A list of taxes blocked from applying to the line item. Taxes can be blocked by the `tax_uid`
   * (for ad hoc taxes) or the `tax_catalog_object_id` (for catalog taxes).
   */
  blockedTaxes?: OrderLineItemPricingBlocklistsBlockedTax[] | null;
  /**
   * A list of service charges blocked from applying to the line item. Service charges can be
   * blocked by the `service_charge_uid` (for ad hoc service charges) or the
   * `service_charge_catalog_object_id` (for catalog service charges).
   */
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
