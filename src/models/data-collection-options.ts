import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { collectedDataSchema, type CollectedData } from "./collected-data.js";
import {
  dataCollectionOptionsInputTypeSchema,
  type DataCollectionOptionsInputType,
} from "./data-collection-options-input-type.js";

export type DataCollectionOptions = {
  /** The title text to display in the data collection flow on the Terminal. */
  title: string;
  /**
   * The body text to display under the title in the data collection screen flow on the Terminal.
   */
  body: string;
  /** Describes the input type of the data. */
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
