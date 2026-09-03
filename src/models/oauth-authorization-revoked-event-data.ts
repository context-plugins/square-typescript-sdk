import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  oauthAuthorizationRevokedEventObjectSchema,
  type OauthAuthorizationRevokedEventObject,
} from "./oauth-authorization-revoked-event-object.js";

export type OauthAuthorizationRevokedEventData = {
  type?: string | null;
  id?: string;
  object?: OauthAuthorizationRevokedEventObject;
};

export const oauthAuthorizationRevokedEventDataSchema: Schema<OauthAuthorizationRevokedEventData> =
  s.object<OauthAuthorizationRevokedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => oauthAuthorizationRevokedEventObjectSchema)),
  });
