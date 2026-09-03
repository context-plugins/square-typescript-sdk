import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FulfillmentPickupDetailsCurbsidePickupDetails = {
  curbsideDetails?: string | null;
  buyerArrivedAt?: string | null;
};

export const fulfillmentPickupDetailsCurbsidePickupDetailsSchema: Schema<FulfillmentPickupDetailsCurbsidePickupDetails> =
  s.object<FulfillmentPickupDetailsCurbsidePickupDetails>({
    curbsideDetails: s.optionalNullable(s.string()),
    buyerArrivedAt: s.optionalNullable(s.string()),
    _keysMap: {
      curbsideDetails: "curbside_details",
      buyerArrivedAt: "buyer_arrived_at",
    },
  });
