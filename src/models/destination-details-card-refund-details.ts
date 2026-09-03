import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardSchema, type Card } from "./card.js";

export type DestinationDetailsCardRefundDetails = {
  card?: Card;
  entryMethod?: string | null;
  authResultCode?: string | null;
};

export const destinationDetailsCardRefundDetailsSchema: Schema<DestinationDetailsCardRefundDetails> =
  s.object<DestinationDetailsCardRefundDetails>({
    card: s.optional(s.lazy(() => cardSchema)),
    entryMethod: s.optionalNullable(s.string()),
    authResultCode: s.optionalNullable(s.string()),
    _keysMap: {
      entryMethod: "entry_method",
      authResultCode: "auth_result_code",
    },
  });
