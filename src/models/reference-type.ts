import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ReferenceType = {
  UnknownType: "UNKNOWN_TYPE",
  Location: "LOCATION",
  FirstPartyIntegration: "FIRST_PARTY_INTEGRATION",
  OauthApplication: "OAUTH_APPLICATION",
  OnlineSite: "ONLINE_SITE",
  OnlineCheckout: "ONLINE_CHECKOUT",
  Invoice: "INVOICE",
  GiftCard: "GIFT_CARD",
  GiftCardMarketplace: "GIFT_CARD_MARKETPLACE",
  RecurringSubscription: "RECURRING_SUBSCRIPTION",
  OnlineBookingFlow: "ONLINE_BOOKING_FLOW",
  SquareAssistant: "SQUARE_ASSISTANT",
  CashLocal: "CASH_LOCAL",
  PointOfSale: "POINT_OF_SALE",
  Kiosk: "KIOSK",
} as const;
export type ReferenceType = (typeof ReferenceType)[keyof typeof ReferenceType] | (string & {});

export const referenceTypeSchema: EnumSchema<ReferenceType> = s.enumOf<ReferenceType>(ReferenceType);
