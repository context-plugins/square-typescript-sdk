import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { cardBrandSchema, type CardBrand } from "./card-brand.js";
import { cardCoBrandSchema, type CardCoBrand } from "./card-co-brand.js";
import { cardIssuerAlertSchema, type CardIssuerAlert } from "./card-issuer-alert.js";
import { cardPrepaidTypeSchema, type CardPrepaidType } from "./card-prepaid-type.js";
import { cardTypeSchema, type CardType } from "./card-type.js";

export type Card = {
  id?: string;
  cardBrand?: CardBrand;
  last4?: string;
  expMonth?: number | null;
  expYear?: number | null;
  cardholderName?: string | null;
  billingAddress?: Address;
  fingerprint?: string;
  customerId?: string | null;
  merchantId?: string;
  referenceId?: string | null;
  enabled?: boolean;
  cardType?: CardType;
  prepaidType?: CardPrepaidType;
  bin?: string;
  createdAt?: string;
  disabledAt?: string;
  version?: number;
  cardCoBrand?: CardCoBrand;
  issuerAlert?: CardIssuerAlert;
  issuerAlertAt?: string;
  hsaFsa?: boolean;
};

export const cardSchema: Schema<Card> = s.object<Card>({
  id: s.optional(s.string()),
  cardBrand: s.optional(s.lazy(() => cardBrandSchema)),
  last4: s.optional(s.string()),
  expMonth: s.optionalNullable(s.number()),
  expYear: s.optionalNullable(s.number()),
  cardholderName: s.optionalNullable(s.string()),
  billingAddress: s.optional(s.lazy(() => addressSchema)),
  fingerprint: s.optional(s.string()),
  customerId: s.optionalNullable(s.string()),
  merchantId: s.optional(s.string()),
  referenceId: s.optionalNullable(s.string()),
  enabled: s.optional(s.boolean()),
  cardType: s.optional(s.lazy(() => cardTypeSchema)),
  prepaidType: s.optional(s.lazy(() => cardPrepaidTypeSchema)),
  bin: s.optional(s.string()),
  createdAt: s.optional(s.string()),
  disabledAt: s.optional(s.string()),
  version: s.optional(s.number()),
  cardCoBrand: s.optional(s.lazy(() => cardCoBrandSchema)),
  issuerAlert: s.optional(s.lazy(() => cardIssuerAlertSchema)),
  issuerAlertAt: s.optional(s.string()),
  hsaFsa: s.optional(s.boolean()),
  _keysMap: {
    cardBrand: "card_brand",
    last4: "last_4",
    expMonth: "exp_month",
    expYear: "exp_year",
    cardholderName: "cardholder_name",
    billingAddress: "billing_address",
    customerId: "customer_id",
    merchantId: "merchant_id",
    referenceId: "reference_id",
    cardType: "card_type",
    prepaidType: "prepaid_type",
    createdAt: "created_at",
    disabledAt: "disabled_at",
    cardCoBrand: "card_co_brand",
    issuerAlert: "issuer_alert",
    issuerAlertAt: "issuer_alert_at",
    hsaFsa: "hsa_fsa",
  },
});
