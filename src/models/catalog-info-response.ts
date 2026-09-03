import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  catalogInfoResponseLimitsSchema,
  type CatalogInfoResponseLimits,
} from "./catalog-info-response-limits.js";
import { errorSchema, type Error } from "./error.js";
import {
  standardUnitDescriptionGroupSchema,
  type StandardUnitDescriptionGroup,
} from "./standard-unit-description-group.js";

export type CatalogInfoResponse = {
  errors?: Error[];
  limits?: CatalogInfoResponseLimits;
  standardUnitDescriptionGroup?: StandardUnitDescriptionGroup;
};

export const catalogInfoResponseSchema: Schema<CatalogInfoResponse> = s.object<CatalogInfoResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  limits: s.optional(s.lazy(() => catalogInfoResponseLimitsSchema)),
  standardUnitDescriptionGroup: s.optional(s.lazy(() => standardUnitDescriptionGroupSchema)),
  _keysMap: {
    standardUnitDescriptionGroup: "standard_unit_description_group",
  },
});
