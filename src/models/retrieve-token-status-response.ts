import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

/**
 * Defines the fields that are included in the response body of a request to the
 * `RetrieveTokenStatus` endpoint.
 */
export type RetrieveTokenStatusResponse = {
  /** The list of scopes associated with an access token. */
  scopes?: string[];
  /**
   * The date and time when the `access_token` expires, in RFC 3339 format. Empty if the token never
   * expires.
   */
  expiresAt?: string;
  /**
   * The Square-issued application ID associated with the access token. This is the same application
   * ID used to obtain the token.
   */
  clientId?: string;
  /** The ID of the authorizing merchant's business. */
  merchantId?: string;
  /** Any errors that occurred during the request. */
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
