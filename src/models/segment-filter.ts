import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filterValueSchema, type FilterValue } from "./filter-value.js";

export type SegmentFilter = {
  serviceVariationId: string;
  teamMemberIdFilter?: FilterValue;
};

export const segmentFilterSchema: Schema<SegmentFilter> = s.object<SegmentFilter>({
  serviceVariationId: s.string(),
  teamMemberIdFilter: s.optional(s.lazy(() => filterValueSchema)),
  _keysMap: {
    serviceVariationId: "service_variation_id",
    teamMemberIdFilter: "team_member_id_filter",
  },
});
