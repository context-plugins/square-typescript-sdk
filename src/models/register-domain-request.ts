import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RegisterDomainRequest = {
  domainName: string;
};

export const registerDomainRequestSchema: Schema<RegisterDomainRequest> = s.object<RegisterDomainRequest>({
  domainName: s.string(),
  _keysMap: {
    domainName: "domain_name",
  },
});
