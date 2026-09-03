import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  loyaltyProgramCreatedEventObjectSchema,
  type LoyaltyProgramCreatedEventObject,
} from "./loyalty-program-created-event-object.js";

export type LoyaltyProgramCreatedEventData = {
  type?: string | null;
  id?: string;
  object?: LoyaltyProgramCreatedEventObject;
};

export const loyaltyProgramCreatedEventDataSchema: Schema<LoyaltyProgramCreatedEventData> =
  s.object<LoyaltyProgramCreatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => loyaltyProgramCreatedEventObjectSchema)),
  });
