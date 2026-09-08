import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { selectOptionSchema, type SelectOption } from "./select-option.js";

export type SelectOptions = {
  /** The title text to display in the select flow on the Terminal. */
  title: string;
  /** The body text to display in the select flow on the Terminal. */
  body: string;
  /** Represents the buttons/options that should be displayed in the select flow on the Terminal. */
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
