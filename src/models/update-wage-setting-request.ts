import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { wageSettingSchema, type WageSetting } from "./wage-setting.js";

export type UpdateWageSettingRequest = {
  wageSetting: WageSetting;
};

export const updateWageSettingRequestSchema: Schema<UpdateWageSettingRequest> =
  s.object<UpdateWageSettingRequest>({
    wageSetting: wageSettingSchema,
    _keysMap: {
      wageSetting: "wage_setting",
    },
  });
