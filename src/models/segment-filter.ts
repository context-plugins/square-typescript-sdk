import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filterValueSchema, type FilterValue } from "./filter-value.js";

/** A query filter to search for buyer-accessible appointment segments by. */
export type SegmentFilter = {
  /**
   * The ID of the [CatalogItemVariation](entity:CatalogItemVariation) object representing the
   * service booked in this segment.
   */
  serviceVariationId: string;
  /**
   * A filter to select resources based on an exact field value. For any given value, the value can
   * only be in one property. Depending on the field, either all properties can be set or only a
   * subset will be available.
   *
   * Refer to the documentation of the field.
   */
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
