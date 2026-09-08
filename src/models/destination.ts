import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { destinationTypeSchema, type DestinationType } from "./destination-type.js";

/** Information about the destination against which the payout was made. */
export type Destination = {
  /** List of possible destinations against which a payout can be made. */
  type?: DestinationType;
  /** Square issued unique ID (also known as the instrument ID) associated with this destination. */
  id?: string;
};

export const destinationSchema: Schema<Destination> = s.object<Destination>({
  type: s.optional(s.lazy(() => destinationTypeSchema)),
  id: s.optional(s.string()),
});
