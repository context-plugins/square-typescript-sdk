import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { wageSettingSchema, type WageSetting } from "./wage-setting.js";

/** Represents an update request for the `WageSetting` object describing a `TeamMember`. */
export type UpdateWageSettingRequest = {
  /**
   * Represents information about the overtime exemption status, job assignments, and compensation
   * for a [team member](entity:TeamMember).
   */
  wageSetting: WageSetting;
};

export const updateWageSettingRequestSchema: Schema<UpdateWageSettingRequest> =
  s.object<UpdateWageSettingRequest>({
    wageSetting: wageSettingSchema,
    _keysMap: {
      wageSetting: "wage_setting",
    },
  });
