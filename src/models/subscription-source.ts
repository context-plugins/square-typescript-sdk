import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The origination details of the subscription. */
export type SubscriptionSource = {
  /**
   * The name used to identify the place (physical or digital) that a subscription originates. If
   * unset, the name defaults to the name of the application that created the subscription.
   */
  name?: string | null;
};

export const subscriptionSourceSchema: Schema<SubscriptionSource> = s.object<SubscriptionSource>({
  name: s.optionalNullable(s.string()),
});
