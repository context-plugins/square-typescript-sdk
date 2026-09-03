import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type RetrieveTokenStatusResponse = {
  scopes?: string[];
  expiresAt?: string;
  clientId?: string;
  merchantId?: string;
  errors?: Error[];
};

export const retrieveTokenStatusResponseSchema: Schema<RetrieveTokenStatusResponse> =
  s.object<RetrieveTokenStatusResponse>({
    scopes: s.optional(s.array(s.string())),
    expiresAt: s.optional(s.string()),
    clientId: s.optional(s.string()),
    merchantId: s.optional(s.string()),
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
    _keysMap: {
      expiresAt: "expires_at",
      clientId: "client_id",
      merchantId: "merchant_id",
    },
  });
