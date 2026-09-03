import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DestinationDetailsExternalRefundDetails = {
  type: string;
  source: string;
  sourceId?: string | null;
};

export const destinationDetailsExternalRefundDetailsSchema: Schema<DestinationDetailsExternalRefundDetails> =
  s.object<DestinationDetailsExternalRefundDetails>({
    type: s.string(),
    source: s.string(),
    sourceId: s.optionalNullable(s.string()),
    _keysMap: {
      sourceId: "source_id",
    },
  });
