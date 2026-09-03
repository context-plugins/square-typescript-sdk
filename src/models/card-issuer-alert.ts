import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CardIssuerAlert = {
  IssuerAlertCardClosed: "ISSUER_ALERT_CARD_CLOSED",
} as const;
export type CardIssuerAlert = (typeof CardIssuerAlert)[keyof typeof CardIssuerAlert] | (string & {});

export const cardIssuerAlertSchema: EnumSchema<CardIssuerAlert> = s.enumOf<CardIssuerAlert>(CardIssuerAlert);
