import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { wageSettingSchema, type WageSetting } from "./wage-setting.js";

export type TeamMemberWageSettingUpdatedEventObject = {
  /**
   * Represents information about the overtime exemption status, job assignments, and compensation
   * for a [team member](entity:TeamMember).
   */
  wageSetting?: WageSetting;
};

export const teamMemberWageSettingUpdatedEventObjectSchema: Schema<TeamMemberWageSettingUpdatedEventObject> =
  s.object<TeamMemberWageSettingUpdatedEventObject>({
    wageSetting: s.optional(s.lazy(() => wageSettingSchema)),
    _keysMap: {
      wageSetting: "wage_setting",
    },
  });
