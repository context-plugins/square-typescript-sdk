import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Specific details for curbside pickup. */
export type FulfillmentPickupDetailsCurbsidePickupDetails = {
  /** Specific details for curbside pickup, such as parking number and vehicle model. */
  curbsideDetails?: string | null;
  /**
   * The [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates) indicating
   * when the buyer arrived and is waiting for pickup. The timestamp must be in RFC 3339 format (for
   * example, "2016-09-04T23:59:33.123Z").
   */
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
