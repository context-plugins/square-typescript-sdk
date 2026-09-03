import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardPaymentTimelineSchema, type CardPaymentTimeline } from "./card-payment-timeline.js";
import { cardSurchargeDetailsSchema, type CardSurchargeDetails } from "./card-surcharge-details.js";
import { cardSchema, type Card } from "./card.js";
import { deviceDetailsSchema, type DeviceDetails } from "./device-details.js";
import { errorSchema, type Error } from "./error.js";

export type CardPaymentDetails = {
  status?: string;
  card?: Card;
  entryMethod?: string;
  cvvStatus?: string;
  avsStatus?: string;
  authResultCode?: string;
  applicationIdentifier?: string;
  applicationName?: string;
  applicationCryptogram?: string;
  verificationMethod?: string;
  verificationResults?: string;
  statementDescription?: string;
  deviceDetails?: DeviceDetails;
  cardPaymentTimeline?: CardPaymentTimeline;
  refundRequiresCardPresence?: boolean;
  errors?: Error[];
  appliedCardSurchargeDetails?: CardSurchargeDetails;
  walletType?: string;
};

export const cardPaymentDetailsSchema: Schema<CardPaymentDetails> = s.object<CardPaymentDetails>({
  status: s.optional(s.string()),
  card: s.optional(s.lazy(() => cardSchema)),
  entryMethod: s.optional(s.string()),
  cvvStatus: s.optional(s.string()),
  avsStatus: s.optional(s.string()),
  authResultCode: s.optional(s.string()),
  applicationIdentifier: s.optional(s.string()),
  applicationName: s.optional(s.string()),
  applicationCryptogram: s.optional(s.string()),
  verificationMethod: s.optional(s.string()),
  verificationResults: s.optional(s.string()),
  statementDescription: s.optional(s.string()),
  deviceDetails: s.optional(s.lazy(() => deviceDetailsSchema)),
  cardPaymentTimeline: s.optional(s.lazy(() => cardPaymentTimelineSchema)),
  refundRequiresCardPresence: s.optional(s.boolean()),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  appliedCardSurchargeDetails: s.optional(s.lazy(() => cardSurchargeDetailsSchema)),
  walletType: s.optional(s.string()),
  _keysMap: {
    entryMethod: "entry_method",
    cvvStatus: "cvv_status",
    avsStatus: "avs_status",
    authResultCode: "auth_result_code",
    applicationIdentifier: "application_identifier",
    applicationName: "application_name",
    applicationCryptogram: "application_cryptogram",
    verificationMethod: "verification_method",
    verificationResults: "verification_results",
    statementDescription: "statement_description",
    deviceDetails: "device_details",
    cardPaymentTimeline: "card_payment_timeline",
    refundRequiresCardPresence: "refund_requires_card_presence",
    appliedCardSurchargeDetails: "applied_card_surcharge_details",
    walletType: "wallet_type",
  },
});
