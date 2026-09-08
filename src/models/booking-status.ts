import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Supported booking statuses. */
export const BookingStatus = {
  /** An unaccepted booking. It is visible to both sellers and customers. */
  Pending: "PENDING",
  /** A customer-cancelled booking. It is visible to both the seller and the customer. */
  CancelledByCustomer: "CANCELLED_BY_CUSTOMER",
  /** A seller-cancelled booking. It is visible to both the seller and the customer. */
  CancelledBySeller: "CANCELLED_BY_SELLER",
  /** A declined booking. It had once been pending, but was then declined by the seller. */
  Declined: "DECLINED",
  /** An accepted booking agreed to or accepted by the seller. */
  Accepted: "ACCEPTED",
  /**
   * A no-show booking. The booking was accepted at one time, but have now been marked as a no-show
   * by the seller because the client either missed the booking or cancelled it without enough
   * notice.
   */
  NoShow: "NO_SHOW",
} as const;
export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus] | (string & {});

export const bookingStatusSchema: EnumSchema<BookingStatus> = s.enumOf<BookingStatus>(BookingStatus);
