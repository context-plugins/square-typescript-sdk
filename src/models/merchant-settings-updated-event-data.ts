import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  merchantSettingsUpdatedEventObjectSchema,
  type MerchantSettingsUpdatedEventObject,
} from "./merchant-settings-updated-event-object.js";

export type MerchantSettingsUpdatedEventData = {
  type?: string | null;
  id?: string;
  object?: MerchantSettingsUpdatedEventObject;
};

export const merchantSettingsUpdatedEventDataSchema: Schema<MerchantSettingsUpdatedEventData> =
  s.object<MerchantSettingsUpdatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => merchantSettingsUpdatedEventObjectSchema)),
  });
