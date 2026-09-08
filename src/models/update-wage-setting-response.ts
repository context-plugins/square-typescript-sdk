import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { wageSettingSchema, type WageSetting } from "./wage-setting.js";

/**
 * Represents a response from an update request containing the updated `WageSetting` object or error
 * messages.
 */
export type UpdateWageSettingResponse = {
  /**
   * Represents information about the overtime exemption status, job assignments, and compensation
   * for a [team member](entity:TeamMember).
   */
  wageSetting?: WageSetting;
  /** The errors that occurred during the request. */
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
