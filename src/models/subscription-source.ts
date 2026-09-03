import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SubscriptionSource = {
  name?: string | null;
};

export const subscriptionSourceSchema: Schema<SubscriptionSource> = s.object<SubscriptionSource>({
  name: s.optionalNullable(s.string()),
});
