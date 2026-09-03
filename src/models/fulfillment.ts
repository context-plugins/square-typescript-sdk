import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  fulfillmentDeliveryDetailsSchema,
  type FulfillmentDeliveryDetails,
} from "./fulfillment-delivery-details.js";
import {
  fulfillmentFulfillmentEntrySchema,
  type FulfillmentFulfillmentEntry,
} from "./fulfillment-fulfillment-entry.js";
import {
  fulfillmentFulfillmentLineItemApplicationSchema,
  type FulfillmentFulfillmentLineItemApplication,
} from "./fulfillment-fulfillment-line-item-application.js";
import {
  fulfillmentInStoreDetailsSchema,
  type FulfillmentInStoreDetails,
} from "./fulfillment-in-store-details.js";
import {
  fulfillmentPickupDetailsSchema,
  type FulfillmentPickupDetails,
} from "./fulfillment-pickup-details.js";
import {
  fulfillmentShipmentDetailsSchema,
  type FulfillmentShipmentDetails,
} from "./fulfillment-shipment-details.js";
import { fulfillmentStateSchema, type FulfillmentState } from "./fulfillment-state.js";
import { fulfillmentTypeSchema, type FulfillmentType } from "./fulfillment-type.js";

export type Fulfillment = {
  uid?: string | null;
  type?: FulfillmentType;
  state?: FulfillmentState;
  lineItemApplication?: FulfillmentFulfillmentLineItemApplication;
  entries?: FulfillmentFulfillmentEntry[];
  metadata?: Record<string, string> | null;
  pickupDetails?: FulfillmentPickupDetails;
  shipmentDetails?: FulfillmentShipmentDetails;
  deliveryDetails?: FulfillmentDeliveryDetails;
  inStoreDetails?: FulfillmentInStoreDetails;
};

export const fulfillmentSchema: Schema<Fulfillment> = s.object<Fulfillment>({
  uid: s.optionalNullable(s.string()),
  type: s.optional(s.lazy(() => fulfillmentTypeSchema)),
  state: s.optional(s.lazy(() => fulfillmentStateSchema)),
  lineItemApplication: s.optional(s.lazy(() => fulfillmentFulfillmentLineItemApplicationSchema)),
  entries: s.optional(s.array(s.lazy(() => fulfillmentFulfillmentEntrySchema))),
  metadata: s.optionalNullable(s.record(s.string(), s.string())),
  pickupDetails: s.optional(s.lazy(() => fulfillmentPickupDetailsSchema)),
  shipmentDetails: s.optional(s.lazy(() => fulfillmentShipmentDetailsSchema)),
  deliveryDetails: s.optional(s.lazy(() => fulfillmentDeliveryDetailsSchema)),
  inStoreDetails: s.optional(s.lazy(() => fulfillmentInStoreDetailsSchema)),
  _keysMap: {
    lineItemApplication: "line_item_application",
    pickupDetails: "pickup_details",
    shipmentDetails: "shipment_details",
    deliveryDetails: "delivery_details",
    inStoreDetails: "in_store_details",
  },
});
