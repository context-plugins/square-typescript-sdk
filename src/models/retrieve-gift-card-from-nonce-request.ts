import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RetrieveGiftCardFromNonceRequest = {
  nonce: string;
};

export const retrieveGiftCardFromNonceRequestSchema: Schema<RetrieveGiftCardFromNonceRequest> =
  s.object<RetrieveGiftCardFromNonceRequest>({
    nonce: s.string(),
  });
