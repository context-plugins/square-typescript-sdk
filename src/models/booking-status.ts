import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BookingStatus = {
  Pending: "PENDING",
  CancelledByCustomer: "CANCELLED_BY_CUSTOMER",
  CancelledBySeller: "CANCELLED_BY_SELLER",
  Declined: "DECLINED",
  Accepted: "ACCEPTED",
  NoShow: "NO_SHOW",
} as const;
export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus] | (string & {});

export const bookingStatusSchema: EnumSchema<BookingStatus> = s.enumOf<BookingStatus>(BookingStatus);
