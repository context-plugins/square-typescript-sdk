import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cashAppDetailsSchema, type CashAppDetails } from "./cash-app-details.js";
import { errorSchema, type Error } from "./error.js";
import { lightningDetailsSchema, type LightningDetails } from "./lightning-details.js";

/** Additional details about `WALLET` type payments. Contains only non-confidential information. */
export type DigitalWalletDetails = {
  /**
   * The status of the `WALLET` payment. The status can be `AUTHORIZED`, `CAPTURED`, `VOIDED`, or
   * `FAILED`.
   */
  status?: string | null;
  /**
   * The brand used for the `WALLET` payment. The brand can be `CASH_APP`, `PAYPAY`, `ALIPAY`,
   * `RAKUTEN_PAY`, `AU_PAY`, `D_BARAI`, `MERPAY`, `WECHAT_PAY`, `LIGHTNING` or `UNKNOWN`.
   */
  brand?: string | null;
  /** Additional details about `WALLET` type payments with the `brand` of `CASH_APP`. */
  cashAppDetails?: CashAppDetails;
  /** Additional details about `WALLET` type payments with the `brand` of `LIGHTNING`. */
  lightningDetails?: LightningDetails;
  /** Information about errors encountered during the payment. */
  errors?: Error[];
};

export const digitalWalletDetailsSchema: Schema<DigitalWalletDetails> = s.object<DigitalWalletDetails>({
  status: s.optionalNullable(s.string()),
  brand: s.optionalNullable(s.string()),
  cashAppDetails: s.optional(s.lazy(() => cashAppDetailsSchema)),
  lightningDetails: s.optional(s.lazy(() => lightningDetailsSchema)),
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  _keysMap: {
    cashAppDetails: "cash_app_details",
    lightningDetails: "lightning_details",
  },
});
