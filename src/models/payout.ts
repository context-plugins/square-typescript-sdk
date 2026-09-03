import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { destinationSchema, type Destination } from "./destination.js";
import { moneySchema, type Money } from "./money.js";
import { payoutFeeSchema, type PayoutFee } from "./payout-fee.js";
import { payoutStatusSchema, type PayoutStatus } from "./payout-status.js";
import { payoutTypeSchema, type PayoutType } from "./payout-type.js";

export type Payout = {
  id: string;
  status?: PayoutStatus;
  locationId: string;
  createdAt?: string;
  updatedAt?: string;
  amountMoney?: Money;
  destination?: Destination;
  version?: number;
  type?: PayoutType;
  payoutFee?: PayoutFee[] | null;
  arrivalDate?: string | null;
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
  version: s.optional(s.number()),
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
