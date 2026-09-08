import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CheckoutLocationSettingsBrandingButtonShape = {
  Squared: "SQUARED",
  Rounded: "ROUNDED",
  Pill: "PILL",
} as const;
export type CheckoutLocationSettingsBrandingButtonShape =
  | (typeof CheckoutLocationSettingsBrandingButtonShape)[keyof typeof CheckoutLocationSettingsBrandingButtonShape]
  | (string & {});

export const checkoutLocationSettingsBrandingButtonShapeSchema: EnumSchema<CheckoutLocationSettingsBrandingButtonShape> =
  s.enumOf<CheckoutLocationSettingsBrandingButtonShape>(CheckoutLocationSettingsBrandingButtonShape);
