import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  oauthAuthorizationRevokedEventDataSchema,
  type OauthAuthorizationRevokedEventData,
} from "./oauth-authorization-revoked-event-data.js";

/**
 * Published when a merchant/application revokes all access tokens and refresh tokens granted to an
 * application.
 */
export type OauthAuthorizationRevokedEvent = {
  /** The ID of the target merchant associated with the event. */
  merchantId?: string | null;
  /** The type of event this represents, `"oauth.authorization.revoked"`. */
  type?: string | null;
  /** A unique ID for the event. */
  eventId?: string | null;
  /** Timestamp of when the event was created, in RFC 3339 format. */
  createdAt?: string;
  data?: OauthAuthorizationRevokedEventData;
};

export const oauthAuthorizationRevokedEventSchema: Schema<OauthAuthorizationRevokedEvent> =
  s.object<OauthAuthorizationRevokedEvent>({
    merchantId: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    eventId: s.optionalNullable(s.string()),
    createdAt: s.optional(s.string()),
    data: s.optional(s.lazy(() => oauthAuthorizationRevokedEventDataSchema)),
    _keysMap: {
      merchantId: "merchant_id",
      eventId: "event_id",
      createdAt: "created_at",
    },
  });
