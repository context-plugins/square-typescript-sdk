import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SelectOption = {
  referenceId: string;
  title: string;
};

export const selectOptionSchema: Schema<SelectOption> = s.object<SelectOption>({
  referenceId: s.string(),
  title: s.string(),
  _keysMap: {
    referenceId: "reference_id",
  },
});
