import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  oauthAuthorizationRevokedEventRevocationObjectSchema,
  type OauthAuthorizationRevokedEventRevocationObject,
} from "./oauth-authorization-revoked-event-revocation-object.js";

export type OauthAuthorizationRevokedEventObject = {
  revocation?: OauthAuthorizationRevokedEventRevocationObject;
};

export const oauthAuthorizationRevokedEventObjectSchema: Schema<OauthAuthorizationRevokedEventObject> =
  s.object<OauthAuthorizationRevokedEventObject>({
    revocation: s.optional(s.lazy(() => oauthAuthorizationRevokedEventRevocationObjectSchema)),
  });
