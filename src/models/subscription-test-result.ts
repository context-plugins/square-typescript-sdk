import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SubscriptionTestResult = {
  id?: string;
  statusCode?: number | null;
  payload?: string | null;
  createdAt?: string;
  updatedAt?: string;
};

export const subscriptionTestResultSchema: Schema<SubscriptionTestResult> = s.object<SubscriptionTestResult>({
  id: s.optional(s.string()),
  statusCode: s.optionalNullable(s.number()),
  payload: s.optionalNullable(s.string()),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  _keysMap: {
    statusCode: "status_code",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
