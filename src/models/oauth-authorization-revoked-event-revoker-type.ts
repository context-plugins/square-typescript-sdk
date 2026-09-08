import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Defines the possible types for the revoking client. */
export const OauthAuthorizationRevokedEventRevokerType = {
  /** The application that requested access to a merchant's data. */
  Application: "APPLICATION",
  /** The admin for the merchant. */
  Merchant: "MERCHANT",
  /** An internal Square employee. */
  Square: "SQUARE",
} as const;
export type OauthAuthorizationRevokedEventRevokerType =
  | (typeof OauthAuthorizationRevokedEventRevokerType)[keyof typeof OauthAuthorizationRevokedEventRevokerType]
  | (string & {});

export const oauthAuthorizationRevokedEventRevokerTypeSchema: EnumSchema<OauthAuthorizationRevokedEventRevokerType> =
  s.enumOf<OauthAuthorizationRevokedEventRevokerType>(OauthAuthorizationRevokedEventRevokerType);
