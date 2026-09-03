import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  loyaltyProgramUpdatedEventObjectSchema,
  type LoyaltyProgramUpdatedEventObject,
} from "./loyalty-program-updated-event-object.js";

export type LoyaltyProgramUpdatedEventData = {
  type?: string | null;
  id?: string;
  object?: LoyaltyProgramUpdatedEventObject;
};

export const loyaltyProgramUpdatedEventDataSchema: Schema<LoyaltyProgramUpdatedEventData> =
  s.object<LoyaltyProgramUpdatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => loyaltyProgramUpdatedEventObjectSchema)),
  });
