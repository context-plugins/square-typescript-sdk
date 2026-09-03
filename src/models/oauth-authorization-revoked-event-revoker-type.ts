import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OauthAuthorizationRevokedEventRevokerType = {
  Application: "APPLICATION",
  Merchant: "MERCHANT",
  Square: "SQUARE",
} as const;
export type OauthAuthorizationRevokedEventRevokerType =
  | (typeof OauthAuthorizationRevokedEventRevokerType)[keyof typeof OauthAuthorizationRevokedEventRevokerType]
  | (string & {});

export const oauthAuthorizationRevokedEventRevokerTypeSchema: EnumSchema<OauthAuthorizationRevokedEventRevokerType> =
  s.enumOf<OauthAuthorizationRevokedEventRevokerType>(OauthAuthorizationRevokedEventRevokerType);
