import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

/** A response returned by the API call. */
export type DeleteLoyaltyRewardResponse = {
  /** Any errors that occurred during the request. */
  errors?: Error[];
};

export const deleteLoyaltyRewardResponseSchema: Schema<DeleteLoyaltyRewardResponse> =
  s.object<DeleteLoyaltyRewardResponse>({
    errors: s.optional(s.array(s.lazy(() => errorSchema))),
  });
