import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { disputeSchema, type Dispute } from "./dispute.js";
import { errorSchema, type Error } from "./error.js";

export type ListDisputesResponse = {
  errors?: Error[];
  disputes?: Dispute[];
  cursor?: string;
};

export const listDisputesResponseSchema: Schema<ListDisputesResponse> = s.object<ListDisputesResponse>({
  errors: s.optional(s.array(s.lazy(() => errorSchema))),
  disputes: s.optional(s.array(s.lazy(() => disputeSchema))),
  cursor: s.optional(s.string()),
});
