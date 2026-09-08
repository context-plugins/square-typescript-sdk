import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bookingCreatorDetailsCreatorTypeSchema,
  type BookingCreatorDetailsCreatorType,
} from "./booking-creator-details-creator-type.js";

/** Information about a booking creator. */
export type BookingCreatorDetails = {
  /** Supported types of a booking creator. */
  creatorType?: BookingCreatorDetailsCreatorType;
  /**
   * The ID of the team member who created the booking, when the booking creator is of the
   * `TEAM_MEMBER` type. Access to this field requires seller-level permissions.
   */
  teamMemberId?: string;
  /**
   * The ID of the customer who created the booking, when the booking creator is of the `CUSTOMER`
   * type. Access to this field requires seller-level permissions.
   */
  customerId?: string;
};

export const bookingCreatorDetailsSchema: Schema<BookingCreatorDetails> = s.object<BookingCreatorDetails>({
  creatorType: s.optional(s.lazy(() => bookingCreatorDetailsCreatorTypeSchema)),
  teamMemberId: s.optional(s.string()),
  customerId: s.optional(s.string()),
  _keysMap: {
    creatorType: "creator_type",
    teamMemberId: "team_member_id",
    customerId: "customer_id",
  },
});
