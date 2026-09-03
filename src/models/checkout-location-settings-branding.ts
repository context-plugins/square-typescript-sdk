import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  checkoutLocationSettingsBrandingButtonShapeSchema,
  type CheckoutLocationSettingsBrandingButtonShape,
} from "./checkout-location-settings-branding-button-shape.js";
import {
  checkoutLocationSettingsBrandingHeaderTypeSchema,
  type CheckoutLocationSettingsBrandingHeaderType,
} from "./checkout-location-settings-branding-header-type.js";

export type CheckoutLocationSettingsBranding = {
  headerType?: CheckoutLocationSettingsBrandingHeaderType;
  buttonColor?: string | null;
  buttonShape?: CheckoutLocationSettingsBrandingButtonShape;
};

export const checkoutLocationSettingsBrandingSchema: Schema<CheckoutLocationSettingsBranding> =
  s.object<CheckoutLocationSettingsBranding>({
    headerType: s.optional(s.lazy(() => checkoutLocationSettingsBrandingHeaderTypeSchema)),
    buttonColor: s.optionalNullable(s.string()),
    buttonShape: s.optional(s.lazy(() => checkoutLocationSettingsBrandingButtonShapeSchema)),
    _keysMap: {
      headerType: "header_type",
      buttonColor: "button_color",
      buttonShape: "button_shape",
    },
  });
