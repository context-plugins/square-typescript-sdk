import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DataCollectionOptionsInputType = {
  Email: "EMAIL",
  PhoneNumber: "PHONE_NUMBER",
} as const;
export type DataCollectionOptionsInputType =
  | (typeof DataCollectionOptionsInputType)[keyof typeof DataCollectionOptionsInputType]
  | (string & {});

export const dataCollectionOptionsInputTypeSchema: EnumSchema<DataCollectionOptionsInputType> =
  s.enumOf<DataCollectionOptionsInputType>(DataCollectionOptionsInputType);
