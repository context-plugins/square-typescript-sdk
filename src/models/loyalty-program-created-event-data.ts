import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  loyaltyProgramCreatedEventObjectSchema,
  type LoyaltyProgramCreatedEventObject,
} from "./loyalty-program-created-event-object.js";

/** The data associated with a `loyalty.program.created` event. */
export type LoyaltyProgramCreatedEventData = {
  /** The type of object affected by the event. For this event, the value is `loyalty_program`. */
  type?: string | null;
  /** The ID of the created loyalty program. */
  id?: string;
  /**
   * An object that contains the loyalty program associated with a `loyalty.program.created` event.
   */
  object?: LoyaltyProgramCreatedEventObject;
};

export const loyaltyProgramCreatedEventDataSchema: Schema<LoyaltyProgramCreatedEventData> =
  s.object<LoyaltyProgramCreatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => loyaltyProgramCreatedEventObjectSchema)),
  });
