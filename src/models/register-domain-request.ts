import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Defines the parameters that can be included in the body of a request to the
 * [RegisterDomain](api-endpoint:ApplePay-RegisterDomain) endpoint.
 */
export type RegisterDomainRequest = {
  /** A domain name as described in RFC-1034 that will be registered with ApplePay. */
  domainName: string;
};

export const registerDomainRequestSchema: Schema<RegisterDomainRequest> = s.object<RegisterDomainRequest>({
  domainName: s.string(),
  _keysMap: {
    domainName: "domain_name",
  },
});
