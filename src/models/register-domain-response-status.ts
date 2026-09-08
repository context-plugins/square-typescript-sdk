import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the domain registration. */
export const RegisterDomainResponseStatus = {
  /** The domain is added, but not verified. */
  Pending: "PENDING",
  /** The domain is added and verified. It can be used to accept Apple Pay transactions. */
  Verified: "VERIFIED",
} as const;
export type RegisterDomainResponseStatus =
  | (typeof RegisterDomainResponseStatus)[keyof typeof RegisterDomainResponseStatus]
  | (string & {});

export const registerDomainResponseStatusSchema: EnumSchema<RegisterDomainResponseStatus> =
  s.enumOf<RegisterDomainResponseStatus>(RegisterDomainResponseStatus);
