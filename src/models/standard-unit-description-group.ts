import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { standardUnitDescriptionSchema, type StandardUnitDescription } from "./standard-unit-description.js";

/** Group of standard measurement units. */
export type StandardUnitDescriptionGroup = {
  /** List of standard (non-custom) measurement units in this description group. */
  standardUnitDescriptions?: StandardUnitDescription[] | null;
  /** IETF language tag. */
  languageCode?: string | null;
};

export const standardUnitDescriptionGroupSchema: Schema<StandardUnitDescriptionGroup> =
  s.object<StandardUnitDescriptionGroup>({
    standardUnitDescriptions: s.optionalNullable(s.array(s.lazy(() => standardUnitDescriptionSchema))),
    languageCode: s.optionalNullable(s.string()),
    _keysMap: {
      standardUnitDescriptions: "standard_unit_descriptions",
      languageCode: "language_code",
    },
  });
