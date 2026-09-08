import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  registerDomainResponseStatusSchema,
  type RegisterDomainResponseStatus,
} from "./register-domain-response-status.js";

/**
 * Defines the fields that are included in the response body of a request to the
 * [RegisterDomain](api-endpoint:ApplePay-RegisterDomain) endpoint.
 *
 * Either `errors` or `status` are present in a given response (never both).
 */
export type RegisterDomainResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
  /** The status of the domain registration. */
  status?: RegisterDomainResponseStatus;
};

export const registerDomainResponseSchema: Schema<RegisterDomainResponse> = s.object<RegisterDomainResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  status: s.optional(s.lazy(() => registerDomainResponseStatusSchema)),
});
