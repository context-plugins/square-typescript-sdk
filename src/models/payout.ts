import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { destinationSchema, type Destination } from "./destination.js";
import { moneySchema, type Money } from "./money.js";
import { payoutFeeSchema, type PayoutFee } from "./payout-fee.js";
import { payoutStatusSchema, type PayoutStatus } from "./payout-status.js";
import { payoutTypeSchema, type PayoutType } from "./payout-type.js";

/**
 * An accounting of the amount owed the seller and record of the actual transfer to their external
 * bank account or to the Square balance.
 */
export type Payout = {
  /** A unique ID for the payout. */
  id: string;
  /** Payout status types */
  status?: PayoutStatus;
  /** The ID of the location associated with the payout. */
  locationId: string;
  /**
   * The timestamp of when the payout was created and submitted for deposit to the seller's banking
   * destination, in RFC 3339 format.
   */
  createdAt?: string;
  /** The timestamp of when the payout was last updated, in RFC 3339 format. */
  updatedAt?: string;
  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned. Fields that do not
   * explicitly define whether they are signed or unsigned are considered unsigned and can only hold
   * positive amounts. For signed fields, the sign of the value indicates the purpose of the money
   * transfer. See [Working with Monetary
   * Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts) for
   * more information.
   */
  amountMoney?: Money;
  /** Information about the destination against which the payout was made. */
  destination?: Destination;
  /**
   * The version number, which is incremented each time an update is made to this payout record. The
   * version number helps developers receive event notifications or feeds out of order.
   */
  version?: number;
  /**
   * The type of payout: “BATCH” or “SIMPLE”. BATCH payouts include a list of payout entries that
   * can be considered settled. SIMPLE payouts do not have any payout entries associated with them
   * and will show up as one of the payout entries in a future BATCH payout.
   */
  type?: PayoutType;
  /** A list of transfer fees and any taxes on the fees assessed by Square for this payout. */
  payoutFee?: PayoutFee[] | null;
  /**
   * The calendar date, in ISO 8601 format (YYYY-MM-DD), when the payout is due to arrive in the
   * seller’s banking destination.
   */
  arrivalDate?: string | null;
  /**
   * A unique ID for each `Payout` object that might also appear on the seller’s bank statement. You
   * can use this ID to automate the process of reconciling each payout with the corresponding line
   * item on the bank statement.
   */
  endToEndId?: string | null;
};

export const payoutSchema: Schema<Payout> = s.object<Payout>({
  id: s.string(),
  status: s.optional(s.lazy(() => payoutStatusSchema)),
  locationId: s.string(),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  amountMoney: s.optional(s.lazy(() => moneySchema)),
  destination: s.optional(s.lazy(() => destinationSchema)),
  version: s.optional(s.int()),
  type: s.optional(s.lazy(() => payoutTypeSchema)),
  payoutFee: s.optionalNullable(s.array(s.lazy(() => payoutFeeSchema))),
  arrivalDate: s.optionalNullable(s.string()),
  endToEndId: s.optionalNullable(s.string()),
  _keysMap: {
    locationId: "location_id",
    createdAt: "created_at",
    updatedAt: "updated_at",
    amountMoney: "amount_money",
    payoutFee: "payout_fee",
    arrivalDate: "arrival_date",
    endToEndId: "end_to_end_id",
  },
});
