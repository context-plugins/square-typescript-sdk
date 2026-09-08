import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  merchantSettingsUpdatedEventObjectSchema,
  type MerchantSettingsUpdatedEventObject,
} from "./merchant-settings-updated-event-object.js";

export type MerchantSettingsUpdatedEventData = {
  /** Name of the updated object’s type, `"online_checkout.merchant_settings"`. */
  type?: string | null;
  /** ID of the updated merchant settings. */
  id?: string;
  object?: MerchantSettingsUpdatedEventObject;
};

export const merchantSettingsUpdatedEventDataSchema: Schema<MerchantSettingsUpdatedEventData> =
  s.object<MerchantSettingsUpdatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => merchantSettingsUpdatedEventObjectSchema)),
  });
