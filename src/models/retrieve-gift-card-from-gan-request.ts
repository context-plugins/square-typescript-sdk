import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RetrieveGiftCardFromGanRequest = {
  gan: string;
};

export const retrieveGiftCardFromGanRequestSchema: Schema<RetrieveGiftCardFromGanRequest> =
  s.object<RetrieveGiftCardFromGanRequest>({
    gan: s.string(),
  });
