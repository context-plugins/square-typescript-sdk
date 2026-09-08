import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the type of issuer alert for a [card on file](entity:Card). */
export const CardIssuerAlert = {
  /**
   * The underlying account of the card was closed, which is a strong signal that future charges to
   * the card are likely to fail.
   */
  IssuerAlertCardClosed: "ISSUER_ALERT_CARD_CLOSED",
} as const;
export type CardIssuerAlert = (typeof CardIssuerAlert)[keyof typeof CardIssuerAlert] | (string & {});

export const cardIssuerAlertSchema: EnumSchema<CardIssuerAlert> = s.enumOf<CardIssuerAlert>(CardIssuerAlert);
