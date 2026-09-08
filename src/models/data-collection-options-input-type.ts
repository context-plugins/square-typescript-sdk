import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Describes the input type of the data. */
export const DataCollectionOptionsInputType = {
  /**
   * This value is used to represent an input text that contains a email validation on the client.
   */
  Email: "EMAIL",
  /**
   * This value is used to represent an input text that contains a phone number validation on the
   * client.
   */
  PhoneNumber: "PHONE_NUMBER",
} as const;
export type DataCollectionOptionsInputType =
  | (typeof DataCollectionOptionsInputType)[keyof typeof DataCollectionOptionsInputType]
  | (string & {});

export const dataCollectionOptionsInputTypeSchema: EnumSchema<DataCollectionOptionsInputType> =
  s.enumOf<DataCollectionOptionsInputType>(DataCollectionOptionsInputType);
