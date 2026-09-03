import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CollectedData = {
  inputText?: string;
};

export const collectedDataSchema: Schema<CollectedData> = s.object<CollectedData>({
  inputText: s.optional(s.string()),
  _keysMap: {
    inputText: "input_text",
  },
});
