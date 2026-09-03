import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { wageSettingSchema, type WageSetting } from "./wage-setting.js";

export type UpdateWageSettingResponse = {
  wageSetting?: WageSetting;
  errors?: Error[];
};

export const updateWageSettingResponseSchema: Schema<UpdateWageSettingResponse> =
  s.object<UpdateWageSettingResponse>({
    wageSetting: s.optional(s.lazy(() => wageSettingSchema)),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      wageSetting: "wage_setting",
    },
  });
