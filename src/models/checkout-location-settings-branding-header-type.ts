import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CheckoutLocationSettingsBrandingHeaderType = {
  BusinessName: "BUSINESS_NAME",
  FramedLogo: "FRAMED_LOGO",
  FullWidthLogo: "FULL_WIDTH_LOGO",
} as const;
export type CheckoutLocationSettingsBrandingHeaderType =
  | (typeof CheckoutLocationSettingsBrandingHeaderType)[keyof typeof CheckoutLocationSettingsBrandingHeaderType]
  | (string & {});

export const checkoutLocationSettingsBrandingHeaderTypeSchema: EnumSchema<CheckoutLocationSettingsBrandingHeaderType> =
  s.enumOf<CheckoutLocationSettingsBrandingHeaderType>(CheckoutLocationSettingsBrandingHeaderType);
