import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  oauthAuthorizationRevokedEventRevokerTypeSchema,
  type OauthAuthorizationRevokedEventRevokerType,
} from "./oauth-authorization-revoked-event-revoker-type.js";

export type OauthAuthorizationRevokedEventRevocationObject = {
  /** Timestamp of when the revocation event occurred, in RFC 3339 format. */
  revokedAt?: string | null;
  /** Defines the possible types for the revoking client. */
  revokerType?: OauthAuthorizationRevokedEventRevokerType;
};

export const oauthAuthorizationRevokedEventRevocationObjectSchema: Schema<OauthAuthorizationRevokedEventRevocationObject> =
  s.object<OauthAuthorizationRevokedEventRevocationObject>({
    revokedAt: s.optionalNullable(s.string()),
    revokerType: s.optional(s.lazy(() => oauthAuthorizationRevokedEventRevokerTypeSchema)),
    _keysMap: {
      revokedAt: "revoked_at",
      revokerType: "revoker_type",
    },
  });
