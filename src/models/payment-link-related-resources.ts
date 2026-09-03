import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { catalogObjectSchema, type CatalogObject } from "./catalog-object.js";
import { orderSchema, type Order } from "./order.js";

export type PaymentLinkRelatedResources = {
  orders?: Order[] | null;
  subscriptionPlans?: CatalogObject[] | null;
};

export const paymentLinkRelatedResourcesSchema: Schema<PaymentLinkRelatedResources> =
  s.object<PaymentLinkRelatedResources>({
    orders: s.optionalNullable(s.array(s.lazy(() => orderSchema))),
    subscriptionPlans: s.optionalNullable(s.array(s.lazy(() => catalogObjectSchema))),
    _keysMap: {
      subscriptionPlans: "subscription_plans",
    },
  });
