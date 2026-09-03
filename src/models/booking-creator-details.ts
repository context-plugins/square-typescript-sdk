import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bookingCreatorDetailsCreatorTypeSchema,
  type BookingCreatorDetailsCreatorType,
} from "./booking-creator-details-creator-type.js";

export type BookingCreatorDetails = {
  creatorType?: BookingCreatorDetailsCreatorType;
  teamMemberId?: string;
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
