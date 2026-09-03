import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RegisterDomainResponseStatus = {
  Pending: "PENDING",
  Verified: "VERIFIED",
} as const;
export type RegisterDomainResponseStatus =
  | (typeof RegisterDomainResponseStatus)[keyof typeof RegisterDomainResponseStatus]
  | (string & {});

export const registerDomainResponseStatusSchema: EnumSchema<RegisterDomainResponseStatus> =
  s.enumOf<RegisterDomainResponseStatus>(RegisterDomainResponseStatus);
