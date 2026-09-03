import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { destinationTypeSchema, type DestinationType } from "./destination-type.js";

export type Destination = {
  type?: DestinationType;
  id?: string;
};

export const destinationSchema: Schema<Destination> = s.object<Destination>({
  type: s.optional(s.lazy(() => destinationTypeSchema)),
  id: s.optional(s.string()),
});
