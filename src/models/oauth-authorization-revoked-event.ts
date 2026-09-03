import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  oauthAuthorizationRevokedEventDataSchema,
  type OauthAuthorizationRevokedEventData,
} from "./oauth-authorization-revoked-event-data.js";

export type OauthAuthorizationRevokedEvent = {
  merchantId?: string | null;
  type?: string | null;
  eventId?: string | null;
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
