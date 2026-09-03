import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TipSettings = {
  allowTipping?: boolean | null;
  separateTipScreen?: boolean | null;
  customTipField?: boolean | null;
  tipPercentages?: number[] | null;
  smartTipping?: boolean | null;
};

export const tipSettingsSchema: Schema<TipSettings> = s.object<TipSettings>({
  allowTipping: s.optionalNullable(s.boolean()),
  separateTipScreen: s.optionalNullable(s.boolean()),
  customTipField: s.optionalNullable(s.boolean()),
  tipPercentages: s.optionalNullable(s.array(s.number())),
  smartTipping: s.optionalNullable(s.boolean()),
  _keysMap: {
    allowTipping: "allow_tipping",
    separateTipScreen: "separate_tip_screen",
    customTipField: "custom_tip_field",
    tipPercentages: "tip_percentages",
    smartTipping: "smart_tipping",
  },
});
