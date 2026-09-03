import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { tipSettingsSchema, type TipSettings } from "./tip-settings.js";

export type DeviceCheckoutOptions = {
  deviceId: string;
  skipReceiptScreen?: boolean | null;
  collectSignature?: boolean | null;
  tipSettings?: TipSettings;
  showItemizedCart?: boolean | null;
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
