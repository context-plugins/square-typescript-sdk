import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { tipSettingsSchema, type TipSettings } from "./tip-settings.js";

export type DeviceCheckoutOptions = {
  /**
   * The unique ID of the device intended for this `TerminalCheckout`. A list of `DeviceCode`
   * objects can be retrieved from the /v2/devices/codes endpoint. Match a `DeviceCode.device_id`
   * value with `device_id` to get the associated device code.
   */
  deviceId: string;
  /** Instructs the device to skip the receipt screen. Defaults to false. */
  skipReceiptScreen?: boolean | null;
  /** Indicates that signature collection is desired during checkout. Defaults to false. */
  collectSignature?: boolean | null;
  tipSettings?: TipSettings;
  /**
   * Show the itemization screen prior to taking a payment. This field is only meaningful when the
   * checkout includes an order ID. Defaults to true.
   */
  showItemizedCart?: boolean | null;
  /**
   * Controls whether the mobile client applies Auto Card Surcharge (ACS) during checkout. If true,
   * ACS is applied based on Dashboard configuration. If false, ACS is not applied regardless of
   * that configuration. For more information, see [Add a Card
   * Surcharge](https://developer.squareup.com/docs/terminal-api/additional-payment-checkout-features#add-a-card-surcharge).
   */
  allowAutoCardSurcharge?: boolean | null;
};

export const deviceCheckoutOptionsSchema: Schema<DeviceCheckoutOptions> = s.object<DeviceCheckoutOptions>({
  deviceId: s.string(),
  skipReceiptScreen: s.optionalNullable(s.boolean()),
  collectSignature: s.optionalNullable(s.boolean()),
  tipSettings: s.optional(s.lazy(() => tipSettingsSchema)),
  showItemizedCart: s.optionalNullable(s.boolean()),
  allowAutoCardSurcharge: s.optionalNullable(s.boolean()),
  _keysMap: {
    deviceId: "device_id",
    skipReceiptScreen: "skip_receipt_screen",
    collectSignature: "collect_signature",
    tipSettings: "tip_settings",
    showItemizedCart: "show_itemized_cart",
    allowAutoCardSurcharge: "allow_auto_card_surcharge",
  },
});
