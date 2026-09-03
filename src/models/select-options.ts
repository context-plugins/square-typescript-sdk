import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { selectOptionSchema, type SelectOption } from "./select-option.js";

export type SelectOptions = {
  title: string;
  body: string;
  options: SelectOption[];
  selectedOption?: SelectOption;
};

export const selectOptionsSchema: Schema<SelectOptions> = s.object<SelectOptions>({
  title: s.string(),
  body: s.string(),
  options: s.array(s.lazy(() => selectOptionSchema)),
  selectedOption: s.optional(s.lazy(() => selectOptionSchema)),
  _keysMap: {
    selectedOption: "selected_option",
  },
});
