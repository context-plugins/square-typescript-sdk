import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  loyaltyProgramUpdatedEventObjectSchema,
  type LoyaltyProgramUpdatedEventObject,
} from "./loyalty-program-updated-event-object.js";

/** The data associated with a `loyalty.program.updated` event. */
export type LoyaltyProgramUpdatedEventData = {
  /** The type of object affected by the event. For this event, the value is `loyalty_program`. */
  type?: string | null;
  /** The ID of the affected loyalty program. */
  id?: string;
  /**
   * An object that contains the loyalty program associated with a `loyalty.program.updated` event.
   */
  object?: LoyaltyProgramUpdatedEventObject;
};

export const loyaltyProgramUpdatedEventDataSchema: Schema<LoyaltyProgramUpdatedEventData> =
  s.object<LoyaltyProgramUpdatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => loyaltyProgramUpdatedEventObjectSchema)),
  });
