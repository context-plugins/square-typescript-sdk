import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import {
  registerDomainResponseStatusSchema,
  type RegisterDomainResponseStatus,
} from "./register-domain-response-status.js";

export type RegisterDomainResponse = {
  errors?: Error[];
  status?: RegisterDomainResponseStatus;
};

export const registerDomainResponseSchema: Schema<RegisterDomainResponse> = s.object<RegisterDomainResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  status: s.optional(s.lazy(() => registerDomainResponseStatusSchema)),
});
