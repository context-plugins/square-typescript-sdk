import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Coordinates = {
  latitude?: number | null;
  longitude?: number | null;
};

export const coordinatesSchema: Schema<Coordinates> = s.object<Coordinates>({
  latitude: s.optionalNullable(s.number()),
  longitude: s.optionalNullable(s.number()),
});
