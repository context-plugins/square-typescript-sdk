import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  destinationDetailsCardRefundDetailsSchema,
  type DestinationDetailsCardRefundDetails,
} from "./destination-details-card-refund-details.js";
import {
  destinationDetailsCashRefundDetailsSchema,
  type DestinationDetailsCashRefundDetails,
} from "./destination-details-cash-refund-details.js";
import {
  destinationDetailsExternalRefundDetailsSchema,
  type DestinationDetailsExternalRefundDetails,
} from "./destination-details-external-refund-details.js";

export type DestinationDetails = {
  cardDetails?: DestinationDetailsCardRefundDetails;
  cashDetails?: DestinationDetailsCashRefundDetails;
  externalDetails?: DestinationDetailsExternalRefundDetails;
};

export const destinationDetailsSchema: Schema<DestinationDetails> = s.object<DestinationDetails>({
  cardDetails: s.optional(s.lazy(() => destinationDetailsCardRefundDetailsSchema)),
  cashDetails: s.optional(s.lazy(() => destinationDetailsCashRefundDetailsSchema)),
  externalDetails: s.optional(s.lazy(() => destinationDetailsExternalRefundDetailsSchema)),
  _keysMap: {
    cardDetails: "card_details",
    cashDetails: "cash_details",
    externalDetails: "external_details",
  },
});
