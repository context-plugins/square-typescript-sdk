import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { collectedDataSchema, type CollectedData } from "./collected-data.js";
import {
  dataCollectionOptionsInputTypeSchema,
  type DataCollectionOptionsInputType,
} from "./data-collection-options-input-type.js";

export type DataCollectionOptions = {
  title: string;
  body: string;
  inputType: DataCollectionOptionsInputType;
  collectedData?: CollectedData;
};

export const dataCollectionOptionsSchema: Schema<DataCollectionOptions> = s.object<DataCollectionOptions>({
  title: s.string(),
  body: s.string(),
  inputType: dataCollectionOptionsInputTypeSchema,
  collectedData: s.optional(s.lazy(() => collectedDataSchema)),
  _keysMap: {
    inputType: "input_type",
    collectedData: "collected_data",
  },
});
