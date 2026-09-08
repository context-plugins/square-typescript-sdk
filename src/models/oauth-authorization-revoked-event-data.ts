import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  oauthAuthorizationRevokedEventObjectSchema,
  type OauthAuthorizationRevokedEventObject,
} from "./oauth-authorization-revoked-event-object.js";

export type OauthAuthorizationRevokedEventData = {
  /** Name of the affected object’s type, `"revocation"`. */
  type?: string | null;
  /** Not applicable, revocation is not an object */
  id?: string;
  object?: OauthAuthorizationRevokedEventObject;
};

export const oauthAuthorizationRevokedEventDataSchema: Schema<OauthAuthorizationRevokedEventData> =
  s.object<OauthAuthorizationRevokedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => oauthAuthorizationRevokedEventObjectSchema)),
  });
